import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail, MdShop2 } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      // Simulate an async operation (e.g., API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log({ email, password });
    }

    setLoading(false);
  };

  return (
    <>
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-20 md:bg-gray-500 pointer-events-auto">
      <div className="md:flex items-center justify-between bg-white opacity-05 py-4 md:px-10 px-7">
        <div className="font-bold text-3xl cursor-pointer flex items-center font-[Poppins] text-purple-950">
          <span className="text-3xl mr-1 pt-2"><MdShop2 /></span> 
          <Link to="/">Sanya's Space</Link>
        </div>
        </div>
        </div>
       <div className="min-h-screen bg-gradient-to-br from-purple-700 to-black p-10 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto bg-gray-800 rounded-lg shadow-md overflow-hidden flex">
        <div className="hidden md:block w-1/2 bg-gradient-to-br from-purple-700 to-black p-10">
          <div className="flex flex-col justify-center h-full text-center">
            <h2 className="text-white text-3xl font-bold mb-4">Get Started with Us</h2>
            <p className="text-gray-300 mb-6">Complete these easy steps to start enjoying our services.</p>
            <ol className="text-left text-white">
              <li className="mb-2 flex items-center">
                <span className="mr-2 w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">1</span>
                Sign up your account
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center">2</span>
                Find your prefer workspace
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center">3</span>
                Start Enjoying 
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
                  className="bg-transparent border-none outline-none focus:invalid:ring-red-500"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>
            <div className="my-4">
              <div className={`flex items-center gap-5 p-4 rounded transition-all ${errors.password ? 'border border-red-500' : 'bg-gray-200'}`}>
                <RiLockPasswordFill className="text-gray-700 text-xl" />
                <input
                  type="password"
                  className="bg-transparent border-none focus:invalid:ring-red-500 outline-none flex-grow"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
            </div>
            <button type="submit" className="w-full bg-purple-900 text-white py-2 rounded hover:bg-purple-950" disabled={loading}>
            <Link to="/Hero"> {loading ? 'Loading...' : 'Login'}
            </Link>
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
    </>
   
  );
};

export default App;
