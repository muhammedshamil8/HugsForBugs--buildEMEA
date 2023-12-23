import React from 'react';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
  if (!token) {
    return <Navigate to="/login"/>
  }
  return (
    <div className="bg-gray-800 text-white">
      <nav className="flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Admin Panel</div>

        <ul className="flex space-x-4">
          <li className="hover:text-gray-300">Home</li>
          <li className="hover:text-gray-300">Dashboard</li>
          <li className="hover:text-gray-300">Settings</li>
        </ul>
      </nav>

      <header className="p-8 bg-red-800 text-center">
        <h1 className="text-3xl font-bold">Welcome to the Admin Panel</h1>
      </header>

      <main className="p-8 bg-white text-black">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
