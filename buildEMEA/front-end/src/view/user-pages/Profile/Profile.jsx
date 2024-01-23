import { React, useState, useEffect } from 'react';
import '../../../styles/User-css/profile.css';
import Avatar from '../../../images/avatar.png';
import axiosClient from "../../../axios-client.js";
import { useStateContext } from "../../../context/ContextProvider";
import { motion } from "framer-motion";
function Profile() {
  const { user, setUser, token, notification, role } = useStateContext();
  const [loading, setLoading] = useState(true);



  // useEffect(() => {
  //     .finally(() => setLoading(false));
  // }, []);

  useEffect(() => {
    fetchUser();
  }, [])

  function fetchUser() {

    axiosClient.get('/logged-user')
      .then(({ data }) => {
        setUser(data)
        // console.log(data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 429) {
          setTimeout(() => {
            fetchUser()
          }, 1000);
        }
      });
  }

  return (
    <div className=' h-screen pt-20'>
      <motion.div 
      initial={{ opacity: 0.2  }}
      whileInView={{ opacity: 1 }}
      >
      {/* <motion.div 
      initial={{ opacity: 0.2 , x: -500 }}
      whileInView={{ opacity: 1,  x: 0 , transition: { duration: 3 },}}
      > */}
        <div className="profile-container">
          <div className='avatar'>
            <img src={Avatar} alt="Avatar" />
          </div>
          <div className='flex-col'>
            <div className="info-box">
              <label>Username</label>
              <p >{user.name}</p>
            </div>
            <div className="info-box">
              <label>Email</label>
              <p >{user.email}</p>
            </div>
            <div className="info-box">
              <label>Category</label>
              <p >{user.category_id && user.category.category || 'Not Have'}</p>
            </div >
            <div className="info-box">
              <label>Category Name</label>
              <p >{user.category_name || 'Not Have'}</p>
            </div>
          </div>

          <div className="contact-box">
            <h2 >Contact Admin</h2>
          </div>
        </div>
      </motion.div>
    </div>

  );
}

export default Profile;
