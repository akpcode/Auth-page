import React, { useState } from 'react';
import Nav from './Nav';
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ password: '', confirmPassword: '' });

  const validatePassword = (password: string) => {
    const errors: string[] = [];
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long.');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter.');
    }
    return errors.join(' ');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const passwordError = validatePassword(password);
    const newErrors = {
      password: passwordError,
      confirmPassword: '',
    };

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (!newErrors.password && !newErrors.confirmPassword) {
      // Submit form
      console.log({ password });
    }
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-purple-700 to-black ">
        <div className="lg:w-[450px] bg-gray-100 py-20 px-10 rounded-bl-[40px] rounded-se-[40px]">
          <h2 className="text-4xl text-black-900 text-center mb-6 transition-all">Reset Password</h2>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="my-4">
              <div className={`flex items-center gap-5 p-4 rounded transition-all ${errors.password ? 'border border-red-500' : 'bg-gray-200'}`}>
                <RiLockPasswordFill className="text-gray-700 text-xl" />
                <input
                  type="password"
                  className="bg-transparent border-none outline-none flex-grow"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
            </div>
            <div className="my-4">
              <div className={`flex items-center gap-5 p-4 rounded transition-all ${errors.confirmPassword ? 'border border-red-500' : 'bg-gray-200'}`}>
                <RiLockPasswordFill className="text-gray-700 text-xl" />
                <input
                  type="password"
                  className="bg-transparent border-none outline-none flex-grow"
                  placeholder="Confirm Your Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-2">{errors.confirmPassword}</p>}
            </div>
            <button className="animate-pulse w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-950">
              <Link to="/">Submit</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
