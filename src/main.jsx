import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

/**
 * Application entry point
 * Initializes React, connects necessary providers (React Router, ThemeProvider for Material-UI)
 * Renders root element in DOM and handles application-level errors
 */

// Render the application
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
