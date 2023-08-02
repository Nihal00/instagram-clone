import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchSignIn} from "../../redux/action/signInAction";
import { Link } from "react-router-dom";

const SignIn = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // console.log(stateData);

  function sign(){
    console.log("running sign")
    dispatch(fetchSignIn(name, email, password))
  }

  return (
    <div>
      <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)} />
      <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)}  />
      <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={sign}>Log In</button>

      <Link to="/login">Login</Link>

    </div>
  )
}

export default SignIn
