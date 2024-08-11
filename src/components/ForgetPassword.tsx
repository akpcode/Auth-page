import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import Nav from './Nav';
const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
    } else {
      setError('');
      // Submit form
      console.log({ email });
    }
  };

  return (
    <>
    <Nav />
    <div className="flex flex-col items-center justify-center min-h-screen bg-white ">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <h2 className="text-4xl text-center font-bold mb-6">Forgot Password</h2>
        <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded">
        <MdEmail className="text-gray-700 text-xl" />
          <input
            type="email"
            className="bg-transparent border-none outline-none"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        
        </div>
        <button className="w-full bg-gray-900 text-white py-2 rounded hover:bg-purple-600">
          <Link to="/otp">Submit</Link> 
        </button>
        
      </form>
    </div>
   
    
    </>
    
  );
};

export default ForgetPassword;
