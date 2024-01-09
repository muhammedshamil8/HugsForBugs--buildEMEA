import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../styles/admin-css/profile.css';
import Avatar from '../../../images/avatar.png'
function AdminProfile() {
  return (
    <div className=' h-screen pt-40'>
      <div className="admin-profile-container py-16">
        <div className='admin-avatar'>
<img src={Avatar} alt="Avatar" />
        </div>
        <div className='flex-col mt-6'>
          <div className="info-box">
            <label>Username</label>
            <p >shamil1010</p>
          </div>
          <div className="info-box">
            <label>Email</label>
            <p >shamil2005@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile