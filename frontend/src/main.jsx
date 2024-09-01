import React from "react";
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { StrictMode } from 'react'; // Import StrictMode from react
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
