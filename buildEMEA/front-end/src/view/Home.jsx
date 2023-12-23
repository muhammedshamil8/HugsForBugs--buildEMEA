import React from 'react';
import HomeImg from '../images/home.svg';
import Logo from '../assets/IqacLogo.svg';

function Home() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <img src={HomeImg} alt="Home" className="absolute inset-0 w-full h-full object-cover z-[-1]" />

      {/* Logo */}
      <div className="absolute top-10 left-16">
        <div className="text-white text-4xl font-bold">
          <img src={Logo} alt="Logo" />
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-2 gap-2 h-full z-2">
        <div></div>
        <div className="text-white flex flex-col w-80 justify-center m-auto items-center">
          <div className="font-medium text-wrap text-md w-80 m-10">
            Welcome to the Website!.
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed deius mod tempor incidid
            un t ut labore et doloremagn
            a aliqua.
          </div>
          <button className="bg-white text-black px-4 py-4 rounded-md mt-1 w-full">Get Started</button>
          <hr className='my-5 mx-10 border-t border-blue-800 w-full' />
        </div>
      </div>
    </div>
  );
}

export default Home;
