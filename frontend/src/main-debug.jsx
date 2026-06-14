import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log('main.jsx loaded');
console.log('App component:', App);

try {
  const rootElement = document.getElementById('root');
  console.log('Root element:', rootElement);
  
  if (!rootElement) {
    throw new Error('Root element not found in DOM');
  }
  
  const root = ReactDOM.createRoot(rootElement);
  console.log('React root created');
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  console.log('App rendered successfully');
} catch (error) {
  console.error('Failed to render app:', error);
  document.body.innerHTML = `
    <div style="background: #0f172a; color: #ff0000; padding: 20px; font-family: monospace; white-space: pre-wrap;">
      <h1>ERROR: Failed to render application</h1>
      ${error.message}
      <br><br>
      Check browser console (F12) for more details.
    </div>
  `;
}
