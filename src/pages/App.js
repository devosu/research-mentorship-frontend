// Path: <rootDir>/src/pages/App.js
//
// Routing for the whole React application.

// React essential imports.
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import pages.
import Home from "./Home";

// Import components.
import HealthCheckComp from "./healthCheckComp";
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
        <Route path="/health" element={<HealthCheckComp />} />
        <Route path="/example" element={<ExampleComp />} />
      </Routes>
    </BrowserRouter>
  );
}
