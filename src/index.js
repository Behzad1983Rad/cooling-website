import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import AirCondition from "./pages/air-condition/air-condition.jsx";
import Refrigration from "./pages/refrigeration/refrigration.jsx";
import ColdRoom from "./pages/cold-room/cold-room.jsx";
import Gallery from "./pages/gallery/gallery.jsx";
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';
import './assets/scss/style.scss'; // Import your project's main SCSS file
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
const hist = createBrowserHistory();

// Initialize AOS
function App() {
  useEffect(() => {
    AOS.init({
      // offset: 200, // Adjust this value to set the offset for triggering animations
      duration: 600, // Animation duration
      easing: 'ease-in-out', // Easing function
      delay: 100, // Delay between each animation
      // once: true, // Only animate elements once
    });
  }, []);

  return (
    <HashRouter history={hist}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/air-condition" element={<AirCondition />} />
        <Route path="/refrigration" element={<Refrigration />} />
        <Route path="/cold-room" element={<ColdRoom />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </HashRouter>
  );
}

root.render(<App />);

reportWebVitals();
