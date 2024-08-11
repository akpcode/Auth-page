import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import ForgetPassword from './components/ForgetPassword';
import Register from './components/Register';
import OTP from './components/OTP';
import ResetPassword from './components/ResetPassword';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
         <Route path="/otp" element={<OTP />} />
        <Route path="/reset-password" element={<ResetPassword />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
