import React from 'react'
import { Outlet ,Link} from 'react-router-dom';
import Logo from '../../../assets/Logo.svg';
import BGIMAGE from '../../../images/User-bg/User-buildEMEA.jpg';

function AuthLayout() {
  return (
    <div className=''>
      {/* Logo */}
      <Link to='/'>
     
        <img src={Logo} className='absolute top-0 left-16'/>
      </Link>
      {/* Bacground image */}
      <img src={BGIMAGE} className='absolute inset-0 w-full h-full object-cover z-[-1]'/>

      

      <main className="flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout