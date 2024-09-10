import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const OTP: React.FC = () => {
  const [code, setCode] = useState<string[]>(['', '', '', '']);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  // Store refs to all input elements
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]); 

  //seting the inputs to numbers only
  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) { 
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // making the inputs to move to the next as soon as value is entered into the previous one
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      // If input is cleared and it's not the first input, go to the previous input
      if (!value && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredCode = code.join('');
    // Replace with the actual OTP logic
    const correctCode = '1234'; 

    if (enteredCode === correctCode) {
      navigate('/reset-password');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 to-black">
      <form
        onSubmit={handleVerify}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-4xl text-center font-bold mb-6">Email Verification</h2>
        <div className="flex items-center gap-2 justify-center mb-4">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center bg-gray-200 border-none outline-none focus:ring-2 focus:ring-purple-500 rounded"
              aria-label={`OTP digit ${index + 1}`}
            />
          ))}
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-950"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default OTP;
