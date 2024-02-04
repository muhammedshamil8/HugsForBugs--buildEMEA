import { React, useEffect, useState } from 'react';
import { NavLink, Link, Outlet, useNavigate, Navigate } from 'react-router-dom';
import { useStateContext } from "../../../context/ContextProvider";
import axiosClient from "../../../axios-client.js";
import { Button, Drawer, Dropdown, Space, Menu, Card } from 'antd';
import { DownOutlined, SmileOutlined, LoginOutlined } from '@ant-design/icons';
import { motion } from "framer-motion"

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
    return <Navigate to="/login" />
  } else if (role !== 'user') {
    return <Navigate to="/login" />
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
    navigate('/login');
  }

  useEffect(() => {
    fetchUser();
  }, [])


  const [dropdownVisible, setDropdownVisible] = useState(false);

  // ... (other code)

  const onDropdownVisibleChange = (open) => {
    setDropdownVisible(open);
  };

  const menu = (
    <Menu style={{ backgroundColor: '#FFFFFF' }}>
      <div style={{ width: 250 }} className='p-4' >
        <div className="flex flex-col justify-center items-center pb-6">
          <img src={Avatar} alt='avatar' />
          <h5 className="font-medium text-xl mt-2">{user.name}</h5>
        </div>
        {/* <Menu.Item key={1} style={{ backgroundColor: '#FFFFFF' }}> */}

        <Button onClick={() => navigate('/profile')} size="large" className="w-full" >
          Profile
        </Button>
        {/* </Menu.Item> */}

        {/* <Menu.Item key={2} style={{ backgroundColor: '#FFFFFF' }}> */}
        <Button size="large" danger className="w-full mt-2" onClick={onLogout} >
          Log Out
        </Button>
        {/* </Menu.Item> */}
      </div>
    </Menu>
  );

  function fetchUser() {

    axiosClient.get('/logged-user')
      .then(({ data }) => {
        setUser(data)
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
    <div className='body'>
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
  justify-end
  backdrop-blur-md 
  z-50
  header'
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
        <div className='flex items-center mr-44 p-10 h-full'>
          {/* username */}
          {/* <div>
            <p className='mr-4 text-white'>{user.name}</p>
          </div> */}

          {/* Avatar */}
          <div>

            <Dropdown
              overlay={menu}
              open={dropdownVisible}
              onOpenChange={onDropdownVisibleChange}
            >
              <div
                className='bg-white rounded-2xl w-10 overflow-hidden cursor-pointer'
                onClick={() => setDropdownVisible(!dropdownVisible)}
              >
                <img src={Avatar} alt='avatar' />
              </div>
            </Dropdown>

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
            <NavLink to='/dashboard' className='hover:text-gray-300' ><img src={HomeIcon} className='icon' />Dashboard</NavLink>
            <NavLink to='/addreport' className='hover:text-gray-300' ><img src={AddReportIcon} className='icon' />Add report</NavLink>
            <NavLink to='/profile' className='hover:text-gray-300' ><img src={ProfileIcon} className='icon' />Profile</NavLink>
            <NavLink to='/contact' className='hover:text-gray-300' ><img src={ContactIcon} className='icon' />Contact</NavLink>
            {/* <button onClick={onLogout} className='hover:text-gray-300 flex justify-start p-2  gap-4 items-center w-full'><LoginOutlined />Log out</button> */}
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
        px-8 
        pt-4
        ml-44
        z-10
        mt-20
        scroll-smooth
      text-white ">

        <Outlet className="" />
      </main>


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
              <NavLink to='/dashboard'
                onClick={onClose} className='hover:text-gray-300' ><img src={HomeIcon} className='icon' />Dashboard</NavLink>
              <NavLink to='/addreport'
                onClick={onClose} className='hover:text-gray-300' ><img src={AddReportIcon} className='icon' />Add Report</NavLink>

              <NavLink to='/contact'
                onClick={onClose}
                className='hover:text-gray-300' ><img src={ContactIcon} className='icon' />Contact</NavLink>
              <NavLink to='/profile'
                onClick={onClose}
                className='hover:text-gray-300' ><img src={ProfileIcon} className='icon' />Profile</NavLink>
              <button onClick={onLogout} className='hover:text-gray-300 flex justify-start p-2  gap-4 items-center w-full'><LoginOutlined />Log out</button>
            </ul>
          </nav>


        </aside>
      </Drawer>
    </div>
  );
}

export default UserLayout;
