import { useEffect } from 'react';

const Twak = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/683f1b76cbac70190b031fd2/1isr86hjq';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    const moveWidget = () => {
      const iframe = document.querySelector('iframe[title="chat widget"]');
      if (iframe && iframe.parentElement) {
        iframe.parentElement.style.right = 'auto';
        iframe.parentElement.style.left = '20px';
        clearInterval(widgetWatcher);
      }
    };

    // Keep checking every 500ms until widget appears
    const widgetWatcher = setInterval(moveWidget, 500);

    return () => {
      clearInterval(widgetWatcher);
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Twak;
