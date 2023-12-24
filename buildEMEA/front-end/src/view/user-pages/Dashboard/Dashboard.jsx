import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/User-css/dashboard.css';
import image from '../../../images/User-bg/unon xmas 2.jpg';
import image1 from '../../../images/User-bg/WhatsApp Image 2023-12-11 at 21.00.17_0492aa1e.jpg'

function Dashboard() {
  return (
    <div>
    <h1 className='H1'>IQAC</h1>
    <h2>(Internal Quality Assurance Cell)</h2>
    <div className='imgp1'>
    <img className='image' src={image} alt="logo" />
    
    <p className='P1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
    boris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
    </div>
    <img className='image1' src={image1} alt="shamil"/>
    <h3 className='H3'>Shamil</h3>
    <h4 classname='H4'>Assistant professor,
    Department of CS</h4>
    </div>
  )
}

export default Dashboard