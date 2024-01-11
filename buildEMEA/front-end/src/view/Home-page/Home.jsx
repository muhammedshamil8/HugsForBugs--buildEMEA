import React, { useEffect, useState } from 'react';
import HomeImg from '../../assets/home-bg.svg';
import Logo from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';

function Home() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Add the 'active' class after a short delay to trigger the fade-in effect
    const timeoutId = setTimeout(() => {
      setShowOverlay(true);
    }, 1000); // Adjust the delay as needed

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <img src={HomeImg} alt="Home" className="absolute inset-0 w-full h-full object-cover z-[-1]" />

      {/* fade loading Effect */}
      <div className='overlay'>
      </div>

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
            Welcome to  IQAC (Internal Quality Assurance Cell).
            Where innovation fuels data driven insights for academic excellence and quality assurance. Be part of the journey !
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
