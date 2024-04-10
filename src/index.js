// ./src/index.js
//
// Entrypoint to the React app,
// renders the App component to the DOM.
// DO NOT MODIFY THIS FILE.

// React library imports.
import React from 'react';
import ReactDOM from 'react-dom/client';

// Core components and style import.
// import reportWebVitals from './reportWebVitals';
import App from './pages/App';
import './static/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
