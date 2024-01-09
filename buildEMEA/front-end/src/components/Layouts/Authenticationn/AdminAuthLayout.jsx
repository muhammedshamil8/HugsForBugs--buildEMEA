import React from 'react';
import { useNavigate , Navigate } from 'react-router-dom';
import { useStateContext } from "../../../context/ContextProvider";
import { Outlet ,Link} from 'react-router-dom';
import Logo from '../../../assets/Logo.svg';
import BGIMAGE from '../../../images/Admin-bg/admin-buildEMEA.png';

function AuthLayout() {
  const { user, token , role} = useStateContext();
  const navigate = useNavigate();


  if (token) {
    if (role === "user") {
     return <Navigate to='/dashboard' />;
    } else if (role === "admin") {
      return <Navigate to='/admindashboard' />;
    }
    }
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