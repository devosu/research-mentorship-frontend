import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Yakob from "./Yakob";
import Ziqi from "./Ziqi";
// Path: <rootDir>/src/pages/App.js
//
// Routing for the whole React application.

// React essential imports.
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import pages.
import Home from "./Home";

// Import components.
import HealthCheckComp from "../components/healthCheckComp";
import ExampleComp from "../components/exampleComp";

/**
 * Do NOT add code for other pages here.
 * Use separate components.
 *
 * @returns {ReactElement} The React element.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/yakob" element={<Yakob />} />
        <Route path="/ziqi" element={<Ziqi />} />
=======
        <Route path="/health" element={<HealthCheckComp />} />
        <Route path="/example" element={<ExampleComp />} />
>>>>>>> aa314c900a51be6d9102b50075b73cee15fdfeab
      </Routes>
    </BrowserRouter>
  );
}
