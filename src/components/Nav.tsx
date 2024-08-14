import { MdShop2 } from "react-icons/md";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-20">
      <div className="md:flex items-center justify-between bg-white opacity-05 py-4 md:px-10 px-7">
        <div className="font-bold text-3xl cursor-pointer flex items-center font-[Poppings] text-purple-950"  >
          <span className="text-3xl mr-1 pt-2"><MdShop2 /></span> <Link to="/">Sanya's Space</Link>
         </div>
         <div className="flex space-x-8">
        <a href="#" className="text-xl text-purple-950 hover:text-black">Search</a>
        <a href="#" className="text-xl text-purple-950 hover:text-black">Communities</a>
        <a href="#" className="text-xl text-purple-950 hover:text-black">Workspaces</a>
        <a href="#" className="text-xl text-purple-950 hover:text-black">Ideas</a>
        <a href="#" className="text-xl text-purple-950 hover:text-black">About Us</a>
      </div>
      </div>
    </div>
  )
}

export default Nav;
