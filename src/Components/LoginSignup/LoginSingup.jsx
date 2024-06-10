import React, { useState } from 'react';
import './LoginSignup.css';

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      
      {action === "Sign Up" && (
        <div className='input-group'>
          <FaUser className='icon' />
          <input type='text' placeholder='Username' className='input-field' />
        </div>
      )}

      <div className='input-group'>
        <MdEmail className='icon' />
        <input type='email' placeholder='Email' className='input-field' />
      </div>

      <div className='input-group'>
        <TbPasswordUser className='icon' />
        <input type='password' placeholder='Password' className='input-field' />
      </div>

      <div className="forgot-password">Forget Password? <span>Click Here!</span></div>
      <div className="submit-container">
        <button
          className={`submit ${action === "Sign Up" ? "active" : ""}`}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </button>
        <button
          className={`submit ${action === "Login" ? "active" : ""}`}
          onClick={() => setAction("Login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginSignup;

