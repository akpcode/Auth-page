// src/components/Hero.tsx
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Nav from './Nav';

const Hero: React.FC = () => {
  const [location, setLocation] = useState('Lagos, Island'); // Default location
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to FindWorkspace with the selected location as a URL parameter
    navigate(`/findworkspace?location=${encodeURIComponent(location)}`);
  };

  return (
    <>
      <Nav />
      <section
        className="relative h-screen bg-cover bg-center pt-20"
        style={{ backgroundImage: `url('/hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <div className="bg-white bg-opacity-90 p-10 rounded-xl text-center max-w-lg">
            <h1 className="text-3xl font-bold mb-6">
              Discover Workspace Where You & Your Team Can Work & Be Productive
            </h1>
            <div className="flex items-center bg-white border border-gray-300 rounded-full mb-6">
              <div className="flex items-center pl-4">
                <span className="material-icons text-gray-500">location_on</span>
                <select
                  className="bg-transparent focus:outline-none text-lg p-4"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option>Lagos, Island</option>
                  <option>Lagos, Mainland</option>
                  <option>Abuja, Gwagwalada</option>
                  <option>Ibadan, Iwo-Road</option>
                  <option>Anambra, Onitsha</option>
                  <option>Kano, Bari</option>
                </select>
              </div>
            </div>
            <button
              onClick={handleSearch}
              className="bg-purple-600 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-purple-950"
            >
              Get Started
            </button>
          </div>
          <p className="mt-6 text-gray-100 max-w-md mx-auto">
            Your Dream Workspace at the Tip of your hands! Enjoy well-equipped workspaces in different corners of the Country.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
