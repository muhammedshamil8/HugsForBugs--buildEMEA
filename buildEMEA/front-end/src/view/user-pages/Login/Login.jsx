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

      <form className='signin-form'>
        <div className='form-group'><label htmlFor="username">Username</label>
        <input type="text" id="username" /></div><br></br>

        <div className='form-group'><label htmlFor="category">category</label>
      <select className='dropdown' name="dropdown">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
  
      </select>
       
        
</div><br></br>

        <div className='form-group'><label htmlFor="password">Password</label>
        <input type="password" id="password" /></div><br></br>

        <div className='form-group'><button type="submit">Sign In</button></div>
      </form>



    </div>
      </div></>
  )
}
export default Login