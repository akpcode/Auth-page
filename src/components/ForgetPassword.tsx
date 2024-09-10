import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 to-black">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-950">
          <Link to="/OTP">Submit</Link>
        </button>
        <div className="mt-4">
          <Link to="/login" className="text-purple-700 hover:underline">Back to Login</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
