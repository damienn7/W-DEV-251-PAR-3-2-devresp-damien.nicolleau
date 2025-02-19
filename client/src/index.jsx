import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Suspense fallback={<div>Chargement en cours...</div>}>
      <App />
    </Suspense>
  </BrowserRouter>
);