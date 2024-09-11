import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdShop2 } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-20 md:bg-gray-500 pointer-events-auto">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-3xl cursor-pointer flex items-center font-[Poppins] text-purple-950">
          <span className="text-3xl mr-1 pt-2"><MdShop2 /></span> 
          <Link to="/">Sanya's Space</Link>
        </div>

        {/* Hamburger icon for small screens */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black-950 text-3xl focus:outline-none mt-2">
            <AiOutlineMenuUnfold />
          </button>
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-8">
          <Link to="/Hero" className="text-xl text-purple-950 hover:text-black">Search</Link>
          <Link to="/Community" className="text-xl text-purple-950 hover:text-black">Communities</Link>
          <Link to="/Workspace" className="text-xl text-purple-950 hover:text-black">Workspaces</Link>
          <Link to="/Ideas" className="text-xl text-purple-950 hover:text-black">Ideas</Link>
          <Link to="/AboutUs" className="text-xl text-purple-950 hover:text-black">About Us</Link>
        </div>
      </div>

      {/* Dropdown Menu for small screens */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-90 shadow-lg backdrop-filter backdrop-blur-md flex flex-col items-start px-6 py-4 space-y-4">
          <Link to="/Hero" className="text-xl text-purple-950 hover:text-black w-full">Search</Link>
          <Link to="/Community" className="text-xl text-purple-950 hover:text-black w-full">Communities</Link>
          <Link to="/Workspace" className="text-xl text-purple-950 hover:text-black w-full">Workspaces</Link>
          <Link to="/Ideas" className="text-xl text-purple-950 hover:text-black w-full">Ideas</Link>
          <Link to="/AboutUs" className="text-xl text-purple-950 hover:text-black w-full">About Us</Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
