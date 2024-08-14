import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import Nav from './Nav';

// Sidebar comp
const Sidebar: React.FC = () => {
  return (
    
    <div className="bg-white p-6 w-1/3 h-screen flex flex-col justify-between shadow-lg">
      <div>
        <h1 className="text-2xl font-bold mb-8">Sanya's Space</h1>
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-purple-700">
              <MdEmail />
              <span>Verify your email</span>
            </li>
            
          </ul>
        </nav>
      </div>
      <div className="flex justify-between text-gray-700 text-lg">
        <Link to="/">Back to home</Link>
        <Link to="/">Check more spaces</Link>
      </div>
    </div>
  );
};

// Verifying my form comp
const VerifyEmail: React.FC = () => {
  const [code, setCode] = useState<string[]>(['', '', '', '']);
  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      setCode([...code.slice(0, index), value, ...code.slice(index + 1)]);
    }
  };

  return (
    <div className="flex-grow flex flex-col justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-center mb-4">Verify your email</h2>
        <p className="text-center mb-6 text-gray-600">We sent a code to <strong>adenious20@gmail.com</strong></p>
        <div className="flex justify-between mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-16 h-16 border rounded text-center text-2xl"
            />
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mb-4">
          Didn’t get a code? <Link to="/" className="text-purple-600">Click to resend</Link>
        </p>
        <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-950">
        <Link to="/reset-password" className="text-purple-600">Continue </Link>
        </button>
      </div>
    </div>
  );
};

// Rendered Component
const ForgetPassword: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Nav />
      <Sidebar />
      <VerifyEmail />
    </div>
  );
};

export default ForgetPassword;
