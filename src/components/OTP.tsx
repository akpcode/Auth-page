import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
const OTP: React.FC = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) {
      setError('OTP is required');
    } else {
      setError('');
      // Submit form
      console.log({ otp });
    }
  };

  return (
    <>
    <Nav />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 to-black">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-4xl text-center font-bold mb-6">Email Verification</h2>
        <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded">
          <input
            type="text"
           className="bg-transparent border-none outline-none"
           placeholder="Enter Otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <button className="w-full bg-gray-900 text-white py-2 rounded hover:bg-purple-600">
          <Link to="/reset-password">Submit</Link> 
        </button>
      </form>
    </div>
    </>
    
  );
};

export default OTP;
