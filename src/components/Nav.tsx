import { MdShop2 } from "react-icons/md";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white opacity-05 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppings] text-purple-950"  >
          <span className="text-3xl mr-1 pt-2"><MdShop2 /></span> <Link to="/">Sanya's Space</Link>
         </div>
          
      </div>
    </div>
  )
}

export default Nav;
