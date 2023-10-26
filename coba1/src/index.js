import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element= {<App />} />
        <Route path = "/about" element= {<About />} />
        <Route path = "/contact" element= {<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
