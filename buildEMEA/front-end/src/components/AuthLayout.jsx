import React from 'react'
import { Outlet } from 'react-router-dom';
import Logo from '../assets/IqacLogo.svg';
import BGIMAGE from '../assets/User-buildEMEA.jpg';

function AuthLayout() {
  return (
    <div className=''>
      {/* Logo */}
      <div>
        <img src={Logo} className='absolute top-0 left-16'/>
      </div>
      {/* Bacground image */}
      <img src={BGIMAGE} className='absolute inset-0 w-full h-full object-cover z-[-1]'/>

      

      <main className="flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout