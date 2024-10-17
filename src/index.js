// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TaskProvider } from './TaskContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TaskProvider>
    <App />
  </TaskProvider>
);
