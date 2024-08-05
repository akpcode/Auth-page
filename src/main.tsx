import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './Auth.tsx';
import './index.css';
import App from './App.tsx';
import ResetPassword from './passwordReset.tsx';


// import Register from './pages/Register.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="Reset Password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
