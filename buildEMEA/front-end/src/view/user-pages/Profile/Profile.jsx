import React from 'react';
import '../../../styles/User-css/profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <div className='avatar'>

      </div>
      <div className='flex-col'>
        <div  className="info-box">
          <label>Username</label>
          <p >shamil1010</p>
        </div>
        <div  className="info-box">
          <label>Email</label>
          <p >shamil2005@gmail.com</p>
        </div>
        <div  className="info-box">
          <label>Category</label>
          <p ></p>
        </div >
        <div  className="info-box">
          <label>Category Name</label>
          <p >Number</p>
        </div>
      </div>

      <div className="contact-box">
        <h2 >Contact Admin</h2>
      </div>
    </div>
  );
}

export default Profile;
