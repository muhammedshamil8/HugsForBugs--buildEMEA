import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/admin-css/profile.css';
import Avatar from '../../../images/avatar.png';
import axiosClient from '../../../axios-client.js';
import { useStateContext } from '../../../context/ContextProvider';
function AdminProfile() {
  const navigate = useNavigate();
  const { user, token, notification, role,  } = useStateContext();




  return (
    <div className='h-screen pt-40'>
      <div className='admin-profile-container py-16'>
        <div className='admin-avatar'>
          <img src={Avatar} alt='Avatar' />
        </div>
        <div className='flex-col mt-6'>
          <div className='info-box-admin'>
            <label>Username</label>
            <p>{user && user.name}</p>
          </div>
          <div className='info-box-admin'>
            <label>Email</label>
            <p>{user && user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
