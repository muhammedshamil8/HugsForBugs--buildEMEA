import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/User-css/dashboard.css';
import ImageDashboard from '../../../images/User-bg/unon xmas 2.jpg';

function Dashboard() {
  return (
    <div className=' h-full flex flex-col gap-24'>
    <div className="w-full p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">IQAC</h1>
      <p className="text-xl">
        ( Internal Quality Assurance Cell )
      </p>
    </div>
    <section className="w-full min-h-40   p-2  grid grid-cols-2">
      <div className="w-full flex justify-around items-center  rounded-md">
        <div></div>
        <img src={ImageDashboard} alt="iqac dashboard" className=" rounded-xl max-w-64" />
      </div>
      <div className="w-full p-4 ">
        <p className='max-w-xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
        boris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        </p>
       
      </div>
    </section>
    <section className="w-full min-h-40 mt-10 p-2  grid grid-cols-2">
      <div className="w-full p-2 ">
        {/* free space */}
      </div>
      <div className="w-full p-4 text-right">
        <h1 className="text-4xl font-bold mb-4">
          Haulath K

        </h1>
        <p className="text-md">
          Quadinator Of IQAC - present
        </p>
      </div>
    </section>
  </div>
  )
}

export default Dashboard

