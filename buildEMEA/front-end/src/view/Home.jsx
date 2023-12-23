import React from 'react';
import HomeImg from '../images/home.svg';
import Logo from '../assets/IqacLogo.svg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <img src={HomeImg} alt="Home" className="absolute inset-0 w-full h-full object-cover z-[-1]" />

      {/* Logo */}
      <Link to='/' className="absolute top-0 left-16">
        <img src={Logo} alt="Logo" />
      </Link>


      {/* grid */}
      <div className="grid grid-cols-2 gap-2 h-full z-2">
        <div></div>

        {/* Content */}
        <div className="text-white flex flex-col w-80 justify-center m-auto items-center">
          <div className="font-medium text-wrap text-xl w-80 m-10 leading-7">
            Welcome to the Website!.
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed deius mod tempor incidid
            un t ut labore et doloremagn
            a aliqua.
          </div>
          <Link to='/login' className="text-center bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 text-white px-4 py-4 rounded-md mt-1 w-full focus:ring focus:outline-none transition-colors duration-300">
            Get Started
          </Link>

          <hr className='my-5 mx-10 border-t border-blue-800 w-full' />

        </div>
      </div>
    </div>
  );
}

export default Home;
