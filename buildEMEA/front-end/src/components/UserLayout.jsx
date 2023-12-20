import React from 'react'
import {Link, Outlet } from 'react-router-dom';
import  '../styles/user.css'


function UserLayout() {
  return (
    <div className="bg-gray-800 text-white">
      <nav className="flex items-center justify-between p-4">
        <div className="text-1xl font-bold">User Layout</div>

        <ul className="flex space-x-4">
        <Link to='/dashboard'>
          <li className="hover:text-gray-300">Home</li>
         </Link>
          <li className="hover:text-gray-300">Dashboard</li>
          <li className="hover:text-gray-300">Settings</li>
        </ul>
      </nav>

      <header className="p-6 bg-red-800 text-center">
        <h1 className="text-3xl font-bold">Welcome to the Website</h1>
      </header>
     

      <main className="p-8 bg-white text-black">
        <Outlet />
      </main>
    </div>
  )
}

export default UserLayout