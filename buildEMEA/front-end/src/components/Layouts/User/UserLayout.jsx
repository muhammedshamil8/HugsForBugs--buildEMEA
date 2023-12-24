import React from 'react';
import { NavLink, Link, Outlet, Navigate } from 'react-router-dom';

// icons importing and images
import AddReportIcon from '../../../assets/icons/addreport.svg';
import ContactIcon from '../../../assets/icons/contact.svg';
import FaqIcon from '../../../assets/icons/faq.svg';
import HomeIcon from '../../../assets/icons/Home.svg';
import ProfileIcon from '../../../assets/icons/profile.svg';
import '../../../styles/User-css/user.css';
import '../../../styles/general-css/general.css';
import BGIMAGE from '../../../images/User-bg/iqac-userBG.jpg';
import Logo from '../../../assets/Logo.svg';
import Avatar from '../../../assets/avatar.svg';

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
      <header className='
  fixed
  top-0 
  h-20
  bg-white/10
  ml-44
  w-full
  flex
  items-center
  justify-end
  backdrop-blur-md 
  header'
>
  <div className='flex items-center mr-44 p-10 h-full'>
    {/* username */}
    <div>
      <p className='mr-4 text-white'>Saleel@123</p>
    </div>

    {/* Avatar */}
    <div className='bg-white rounded-2xl w-10 overflow-hidden'>
      <img src={Avatar} alt='avatar'/>
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
        sidebar
      '>

        <div
          className='
          h-20
        '>
          <Link to='/'>
            <img src={Logo} alt="Logo" 
              className='
              h-full
              cursor-pointer
              mt-1
            '/>
          </Link>
        </div>

        <nav
          className='
          flex-1
          w-full
          p-3
        '>
          <ul 
            className='
            flex
            flex-col
            mt-10
            gap-4
            items-center
            text-white
          '>
            <NavLink to='/dashboard' className='hover:text-gray-300' activeClassName='active-link'><img src={HomeIcon} className='icon' />Dashboard</NavLink>
            <NavLink to='/addreport' className='hover:text-gray-300' activeClassName='active-link'><img src={AddReportIcon} className='icon' />Add report</NavLink>
            <NavLink to='/profile' className='hover:text-gray-300' activeClassName='active-link'><img src={ProfileIcon} className='icon' />Profile</NavLink>
            <NavLink to='/contact' className='hover:text-gray-300' activeClassName='active-link'><img src={ContactIcon} className='icon' />Contact</NavLink>
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
          <Link to='/faq'
            className='
            cursor-pointer
            flex
            gap-2
            items-center
            text-white
            hover:text-gray-300
            font-semibold
          '>
            <img src={FaqIcon} className='icon' />
            FAQ</Link>
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