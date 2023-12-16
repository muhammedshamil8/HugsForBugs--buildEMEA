import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const navigate = useNavigate()
  return (
    <div>AdminDashboard<br />
      <Link to="/adminProfile">click here to go adminProfile</Link>
    </div>
  )
}

export default AdminDashboard