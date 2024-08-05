import { MdShop2 } from "react-icons/md";

const Nav = () => {
   let Links= [
    {name:"Reset Password", link:"ForgotPassword"},
    {name:"Generate OTP", link:"/"},
   ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppings] text-purple-950"  >
          <span className="text-3xl mr-1 pt-2"><MdShop2 /></span> Sanya's Space
         </div>
          <ul className="md:flex md:items-center">
            {
              Links.map((link)=>(
                <li key={link.name} className="md:ml-8 text 3xl">
                  <a href={link.link} className="text-purple-950 hover:text-gray-400 duration-300">{link.name}</a>
                </li>
              ))
            }
          </ul>
      </div>
    </div>
  )
}

export default Nav;
