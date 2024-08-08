import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import google from './assets/google.png';
import github from './assets/github.png';
import { Link } from 'react-router-dom';
import { useState } from "react";


function Auth() {
  const [action, setAction] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', name: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { email: '', password: '', name: '' };

    if (!name && action === 'Sign Up') {
      newErrors.name = 'Name is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.password) {
      console.log({ email, password });
    }
  };

  const navigateToGoogle = () => {
    window.open("https://accounts.google.com/signin", "_blank", "noopener,noreferrer");
  };

  const navigateToGithub = () => {
    window.open("https://github.com/login", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="h-[100vh]">
        <div>
        <Link to="/" className="bg-white text-purple-700 text-4xl text-center py-2 w-36 rounded-3xl hover:bg-gray-200 transition">
            Home
         </Link>       
      </div>
      <div className="flex justify-center items-center h-full bg-gradient-to-br  from-purple-700 to-black">
      
        <div className="lg:w-[450px] bg-white py-20 px-10 rounded-bl-[40px] rounded-se-[40px]">
          <h1 className="text-4xl text-black-900 text-center mb-6 transition-all">{action}</h1>
          <form onSubmit={handleSubmit} className="w-full">
            {action === "Sign Up" && (
              <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded transition-all">
                <IoPerson className="text-gray-700 text-xl" />
                <input
                  type="text"
                  className="bg-transparent border-none outline-none"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
            )}
            <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded">
              <MdEmail className="text-gray-700 text-xl" />
              <input
                type="email"
                className="bg-transparent border-none outline-none"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded">
              <RiLockPasswordFill className="text-gray-700 text-xl" />
              <input
                type="password"
                className="bg-transparent border-none outline-none"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div>
              <p className="text-gray-400 mb-6">Or Continue With</p>
            </div>
            <div className="flex justify-between mb-6">
              <button
                type="button"
                onClick={navigateToGoogle}
                className="w-1/2 py-2 px-4 mr-2 bg-white text-black rounded-lg flex items-center justify-center"
              >
                <img src={google} alt="Google" className="w-6 h-6 mr-2" />
                Google
              </button>
              <button
                type="button"
                onClick={navigateToGithub}
                className="w-1/2 py-2 px-4 mr-2 bg-white text-black rounded-lg flex items-center justify-center"
              >
                <img src={github} alt="Github" className="w-6 h-6 mr-2" />
                Github
              </button>
            </div>
            {action === 'Login' && (
              <div>
                <p>Forgot Password? <Link to="/resetPassword" className="text-purple-500 hover:underline">Click Here</Link></p>
              </div>
            )}
            <div className="flex justify-center gap-10 mt-10">
              <button
                type="submit"
                className={`text-xl text-white py-2 w-36 rounded-3xl ${action === 'Sign Up' ? 'bg-gray-900' : 'bg-gray-200'}`}
                onClick={() => setAction(action === 'Login' ? 'Sign Up' : 'Login')}
                >
                  {/* {action === 'Login' ? 'Sign Up' : 'Login'}               */}
              
                {action}
              </button>
              <button
                type="button"
                className={`text-xl text-white py-2 w-36 rounded-3xl ${action === 'Login' ? 'bg-gray-900' : 'bg-gray-200'}`}
                onClick={() => setAction(action === 'Login' ? 'Sign Up' : 'Login')}
              >
                {action === 'Login' ? 'Sign Up' : 'Login'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
