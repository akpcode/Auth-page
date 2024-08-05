import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './pages/Nav';


const App: React.FC = () => {
  return (
   <><div>
          <Nav />
      </div>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
              <div className="max-w-4xl w-full mx-auto bg-gray-800 rounded-lg shadow-md overflow-hidden flex">
                  <div className="hidden md:block w-1/2 bg-gradient-to-br from-purple-700 to-black p-10">
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
                  <div className="w-full md:w-1/2 p-10 bg-gray-900">
                      <h2 className="text-white text-3xl font-bold mb-4">Click The Button Below To Get Started</h2>
                      <div className="flex justify-center">
                          <Link to="/Auth" className="bg-white text-purple-700 text-4xl text-center py-2 w-36 mt-6 rounded-3xl hover:bg-gray-200 transition">
                              Click Me
                          </Link>
                      </div>
                  </div>
              </div>
          </div></>
  );
};

export default App;
