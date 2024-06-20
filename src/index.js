import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css'; // Import your CSS file if any

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
);