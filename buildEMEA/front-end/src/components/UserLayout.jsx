import React from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';
import '../styles/user.css';
import '../styles/general.css';
import BGIMAGE from '../images/iqac-userBG.jpg';
import Logo from '../assets/IqacLogo.svg';

function UserLayout() {
  const token = localStorage.getItem('token');

  // if (!token) {
  //   return <Navigate to="/login"/>
  // }


  return (
    <div>
      {/* background image */}
      <img src={BGIMAGE}
        className='
        absolute 
        inset-0 
        w-full 
        h-full 
        object-cover 
        z-[-1]   
        background' />

      {/* header */}
      <header
        className='
        fixed
        top-0 
        h-20
      bg-white/10
        w-full 
        ml-32 
        backdrop-blur-md 
        header'>

        <div>
          <p></p>
          <div>
            <img />
          </div>
        </div>
      </header>

      {/* side bar */}
      <aside
        className='
      fixed 
      left-0 
      top-0 
      w-32 
      h-full
    bg-white/10
    border-r-white 
      backdrop-blur-md 
      sidebar'>

        <div 
        className='
        '>
          <Link to='/'>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <nav 
        className='
        flex
        flex-col
        p-2
        '>
          <ul>
            <li>Dashboard</li>
            <li>Dashboard</li>
            <li>Dashboard</li>
            <li>Dashboard</li>
          </ul>
        </nav>

        <footer 
        className='
        '>
          <p>FAQ</p>
        </footer>
      </aside>

      {/* child pages */}
      <main
        className="
        p-8 
        ml-32
        mt-20
      text-black ">

        <Outlet />
      </main>

    </div>
  );
}

export default UserLayout;
