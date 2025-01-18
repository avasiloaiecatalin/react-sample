import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import './index.css';
import App from './App.jsx';
import Test from './Test.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={<App />}
      />
      <Route
        path='/test'
        element={<Test />}
      />
    </Routes>
  </BrowserRouter>
);
