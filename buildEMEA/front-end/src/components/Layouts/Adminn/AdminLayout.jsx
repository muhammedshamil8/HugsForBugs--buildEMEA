import { React, useEffect, useState } from 'react';
import { NavLink, Link, Outlet, useNavigate, Navigate } from 'react-router-dom';
import { useStateContext } from "../../../context/ContextProvider";
import axiosClient from "../../../axios-client.js";
import { Button, Drawer } from 'antd';
// icons importing and images
import AddReportIcon from '../../../assets/icons/addreport.svg';
import ContactIcon from '../../../assets/icons/contact.svg';
import FaqIcon from '../../../assets/icons/faq.svg';
import HomeIcon from '../../../assets/icons/Home.svg';
import ProfileIcon from '../../../assets/icons/profile.svg';
import '../../../styles/admin-css/admin.css';
import '../../../styles/general-css/general.css';
import BGIMAGE from '../../../images/Admin-bg/admin-buildEMEA.png';
import Logo from '../../../assets/Logo.svg';
import Avatar from '../../../assets/avatar.svg';
import { LoginOutlined } from '@ant-design/icons';

function AdminLayout() {
  const { user, token, setUser, setToken, notification, role, setRole } = useStateContext();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const drawerHeaderClassName = 'drawer-header';
  const drawerHeaderClassName2 = 'drawer-body';
  const drawerHeaderClassName3 = 'drawer-wrapper';
  const showDrawer = () => {

    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  if (!token) {
    return <Navigate to="/adminlogin" />
  } else if (role !== 'admin') {
    return <Navigate to="/dashboard" />
  }

  // unauth

  const onLogout = ev => {
    ev.preventDefault()

    axiosClient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
      })
    setUser({})
    setToken(null)
    navigate('/adminlogin')
  }

  useEffect(() => {
    fetchUser();
  }, [])

  function fetchUser() {

    axiosClient.get('/logged-user')
      .then(({ data }) => {
        setUser(data)
        console.log(data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 429) {
          setTimeout(() => {
            fetchUser()
          }, 1000);
        }
      });
    if (user) {
      if (role === 'admin') {
        if (user.role === 'user') {
          setRole(null);
          setToken(null);
          navigate('/403');
        }
      }
    }
  }


  return (
    <div className='admin-body'>
      {/* background image */}
      {/* <img src={BGIMAGE}
        className='
        absolute 
        inset-0 
        w-full 
        h-full 
        object-cover 
        z-[-1]   
        background' /> */}

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
          justify-around
          backdrop-blur-md
          xl:justify-end 
          header
          z-50'
      >
        <div>

          <Button className='responsive-side-bar' onClick={showDrawer}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>

          </Button>
        </div>
        <div>
          <div className='flex items-center  p-10 h-full xl:mr-44 mr-2'>
            {/* username */}
            <div>
              <p className='mr-4 text-white'>{user.name}</p>
            </div>

            {/* Avatar */}
            <div className='bg-white rounded-2xl w-10 overflow-hidden'>
              <img src={Avatar} alt='avatar' />
            </div>
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
      border-r-white/10 
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
            <NavLink to='/admindashboard' className='hover:text-gray-300' ><img src={HomeIcon} className='icon' />Dashboard</NavLink>
            <NavLink to='/category' className='hover:text-gray-300' ><img src={AddReportIcon} className='icon' />Category</NavLink>

            <NavLink to='/users' className='hover:text-gray-300' ><img src={ContactIcon} className='icon' />Users</NavLink>
            <NavLink to='/adminprofile' className='hover:text-gray-300' ><img src={ProfileIcon} className='icon' />Profile</NavLink>
            <button onClick={onLogout} className='hover:text-gray-300 flex justify-start p-2  gap-4 items-center w-full'><LoginOutlined />Log out</button>
          </ul>
        </nav>


      </aside>

      {/* child pages */}

      <main
        className="
        px-8
        pt-4
        ml-44
        mt-20
      text-white 
      overflow-x-visible
      overflow-y-visible
      z-0">

        <Outlet className="overflow-x-scroll"/>
      </main>
      {notification &&
        <div className="notification">
          {notification}
        </div>
      }




      <Drawer title={<Link to='/'>
        <img src={Logo} alt="Logo"
          className='
              w-28
              mx-auto
              cursor-pointer
              mt-1
            '/>
      </Link>} placement="left" onClose={onClose} open={open} classNames={{
        header: drawerHeaderClassName,
        body: drawerHeaderClassName2,
        wrapper: drawerHeaderClassName3,
      }}>

        <aside
          className='
        left-0 
        top-0 
        w-full
        h-full
        bg-white/10
        flex
        flex-col
        justify-start
        items-center
      '>


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
            gap-4
            items-center
            text-white
          '>
              <NavLink to='/admindashboard' className='hover:text-gray-300' ><img src={HomeIcon} className='icon' />Dashboard</NavLink>
              <NavLink to='/category' className='hover:text-gray-300' ><img src={AddReportIcon} className='icon' />Category</NavLink>

              <NavLink to='/users' className='hover:text-gray-300' ><img src={ContactIcon} className='icon' />Users</NavLink>
              <NavLink to='/adminprofile' className='hover:text-gray-300' ><img src={ProfileIcon} className='icon' />Profile</NavLink>
              <button onClick={onLogout} className='hover:text-gray-300 flex justify-start p-2  gap-4 items-center w-full'><LoginOutlined />Log out</button>
            </ul>
          </nav>


        </aside>
      </Drawer>
    </div>
  );
}

export default AdminLayout;
