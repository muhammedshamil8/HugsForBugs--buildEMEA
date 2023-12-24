import React from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';
import '../../../styles/User-css/user.css';
import '../../../styles/general-css/general.css';
import BGIMAGE from '../../../images/User-bg/iqac-userBG.jpg';
import Logo from '../../../assets/IqacLogo.svg';

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
        ml-44
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
      w-44
      h-full
    bg-white/10
    border-r-white 
      backdrop-blur-md 
      flex
      flex-col
      justify-between
      items-center
      sidebar'>

        <div
          className='
          h-20
        '>
          <Link to='/'>
            <img src={Logo} alt="Logo" className='
            h-full
            mt-1'/>
          </Link>
        </div>

        <nav
          className='
        flex-1
        w-full
        p-3
        '>
          <ul className='
                flex
                flex-col
                mt-10
                gap-4
                items-center
                text-white
       

          '>
            <li>Dashboard</li>
            <li>Dashboard</li>
            <li>Dashboard</li>
            <li>Dashboard</li>
          </ul>
        </nav>

        <footer
          className='
          bg-black/10
          w-full
          h-16
          p-2
          flex
          justify-center
          items-center
          rounded-t-[20px]
          text-white
        '>
          <p>FAQ</p>
        </footer>
      </aside>

      {/* child pages */}
      <main
        className="
        p-8 
        ml-44
        mt-20
      text-black ">

        <Outlet />
      </main>

    </div>
  );
}

export default UserLayout;
