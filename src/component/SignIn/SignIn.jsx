import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignIn } from "../../redux/action/signInAction";
import { Link } from "react-router-dom";
import logo from "../../assest/Logo-Instagram.png";
import fbWhite from "../../assest/facebookwhite.svg";
import playStoreLogo from "../../assest/googlePlayStore.png"
import microsoftLogo from "../../assest/micro.png"
import "./SignIn.css";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [entryStatus, setEntryStatus] = useState({
    name: false,
    email: false,
    password: false,
  });
  // const dispatch = useDispatch();

  // console.log(stateData);

  function sign(e) {
    e.preventDefault();

    if (name.trim() === "") {
      console.log("name error")
      return setEntryStatus({
        ...entryStatus,
        name: true,
      });
    }
    else if (!email.includes("@") || email.trim() === "") {
      console.log("email error")
      return setEntryStatus({
        ...entryStatus,
        email: true,
        name: false
      });
    } else if (password !== confPassword || password === "") {
      console.log("password error")
      return setEntryStatus({
        ...entryStatus,
        password: true,
        email: false,
        name: false
      });
    } else {
      setEntryStatus({
        ...entryStatus,
        name: false,
        email: false,
        password: false,
      });
    }

    console.log("running sign");
    // dispatch(fetchSignIn(name, email, password));
  }

  return (
    <div className="SignIn">
      <div className="signIn-inner-container">
        <div className="signin-logo-container">
          <img src={logo} className="logo" />
          <p className="welcome-tag">
            Sign up to see photos and videos from your friends.
          </p>
        </div>
        <div className="fb-tag-logo-signin">
          <img src={fbWhite} alt="facebook logo" className="fb-logo" />
          <p>Log in with Facebook</p>
        </div>
        <div className="sign-line-container">
          <hr className="line" />
          <p className="or">OR</p>
        </div>
        <form className="sign-container" onSubmit={sign}>
          <input
            className="input-container input"
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input-container input"
            type="email"
            placeholder="Email or Mobile Number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-container input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="input-container input2"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfPassword(e.target.value)}
          />
          <button type="submit" className="login-btn">
            Sign up
          </button>
        </form>
        <div className="display-error">
          {entryStatus.name ? (
            <p className="err">Fill the use </p>
          ) : entryStatus.email ? (
            <p className="err">Fill the user Email</p>
          ) : entryStatus.password ? (
            <p className="err">Password not matching</p>
          ) : (
            " "
          )}
        </div>
      </div>
      <div className='dont-have-acc'>
        <p>Have an account? {<Link to="/" className='signin-link' >Login up</Link>}</p>
      </div>
      <div className='playstore'>
        <p>Get the app.</p>
        <div className='playstore-log'>
          <img src={playStoreLogo} alt='google play' className='google-log' />
          <img src={microsoftLogo} alt='micro soft' className='micro-log' />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
