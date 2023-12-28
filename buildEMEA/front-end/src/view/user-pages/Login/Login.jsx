import { Input } from 'postcss'
import React from 'react'
import { useNavigate } from 'react-router-dom'


import '../../../styles/User-css/login.css';



function Login() {
  return (
    <><div className='box'>
      <div>
      <h1 className='head'>SIGN IN</h1>
      <h6 className='caption' >Log in with your credentials</h6>

      <form className='form'>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" /><br></br>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" /><br></br>
        <button type="submit">Sign In</button>
      </form>



    </div>
      </div></>
  )
}
export default Login