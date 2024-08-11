import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      // Submit form
      console.log({ email, password });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-black p-10 mt-3 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto bg-gray-800 rounded-lg shadow-md overflow-hidden flex">
        <div className="hidden md:block w-1/2 bg-gradient-to-br from-purple-700 to-black p-10 ">
          <div className="flex flex-col justify-center h-full text-center">
            <h2 className="text-white text-3xl font-bold mb-4">Get Started with Us</h2>
            <p className="text-gray-300 mb-6">Complete these easy steps to register your account.</p>
            <ol className="text-left text-white">
              <li className="mb-2 flex items-center">
                <span className="mr-2 w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">1</span>
                Sign up your account
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center">2</span>
                Set up your workspace
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center">3</span>
                Set up your profile
              </li>
            </ol>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-10 bg-gray-100">
          <form onSubmit={handleSubmit} className="w-full">
            <h2 className="text-4xl text-gray-900 text-center mb-6">Login</h2>
            <div className="my-4">
              <div className={`flex items-center gap-5 p-4 rounded transition-all ${errors.email ? 'border border-red-500' : 'bg-gray-200'}`}>
                <MdEmail className="text-gray-700 text-xl" />
                <input
                  type="email"
                  className="bg-transparent border-none outline-none flex-grow"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>
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
            <button type="submit" className="w-full bg-purple-900 text-white py-2 rounded hover:bg-gray-600">
              Login
            </button>
            <div className="mt-4 text-center">
              <p>Forgot Password? <Link to="/ForgetPassword" className="text-purple-500 hover:underline">Click Here</Link></p>
            </div>
          </form>
          <div className="mt-4 flex justify-center">
            <Link to="/Register" className="w-full bg-gray-100 text-gray-700 py-2 rounded border border-purple-600 text-center hover:bg-gray-200">
              Create new account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
