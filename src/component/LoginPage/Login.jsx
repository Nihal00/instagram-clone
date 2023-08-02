import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { fetchLogin } from "../../redux/action/logInAction"
import "./Login.css";
import logo from "../../assest/Logo-Instagram.png"
import playStoreLogo from "../../assest/googlePlayStore.png"
import microsoftLogo from "../../assest/micro.png"
import fb from "../../assest/facebook.svg"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.signIn.data)
  const err = useSelector((state) => state.signIn.error)
  console.log(datas, err)


  function log(e) {
    e.preventDefault();

    if (!email || !password) {
      console.log("empty")
      return
    }
    dispatch(fetchLogin(email, password))
  }

  return (
    <>
      <div className='Login'>
        <div className='login-inner-container'>
          <img src={logo} className='logo' />
          <from className="login-container" onSubmit={log}>
            <input className='input-container input1' type='email' placeholder='Phone number username, or email' onChange={(e) => setEmail(e.target.value)} />
            <input className='input-container input2' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <button className='login-btn'>Log in</button>
          </from>
          <div className='line-container'>
            <hr className='line' />
            <p className='or'>OR</p>
          </div>
          <div className='loginWithFB'>
            <div className='fb-tag-logo'>
              <img src={fb} alt='facebook logo' className='fb-logo' />
              <p>Log in with Facebook</p>
            </div>
            <p className='forgot-password'>Forgot password?</p>
          </div>
        </div>
        <div className='dont-have-acc'>
          <p>Don't have an account? {<Link to="/signin" className='signin-link' >Sign up</Link>}</p>
        </div>
        <div className='playstore'>
          <p>Get the app.</p>
          <div className='playstore-log'>
            <img src={playStoreLogo} alt='google play' className='google-log' />
            <img src={microsoftLogo} alt='micro soft' className='micro-log' />
          </div>
        </div>
      </div>
    </>

  )
}

export default Login
