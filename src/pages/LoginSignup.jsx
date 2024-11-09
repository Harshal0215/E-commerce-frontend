import React from 'react'
import './loginsignup.css'

export const LoginSignup = () => {
  return (
    <div className='LoginSignup'>
      <div className="login-container">
        <h1>Signup</h1>
        <div className="loginFields">
          <input type="text" placeholder='Name' name="" id="" />
          <input type="email" placeholder='Email' name="" id="" />
          <input type="password" placeholder='password' name="" id="" />

        </div>
        <button>Continue</button>
        <p className="lgl">Already have an account ? <span className='p'>Login</span></p>
        <div className="agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, you agree to our terms and conditions</p>
        </div>
      </div>
    </div>
  )
}
