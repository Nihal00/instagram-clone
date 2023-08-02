import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchLogin } from "../../redux/action/logInAction"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.signIn.data)
  const err = useSelector((state) => state.signIn.error)
  console.log(datas, err)


  function log(){
    if(!email || !password){
      console.log("empty")
      return
    }
    dispatch(fetchLogin(email, password))
  }

  return (
    <div>
      <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={log}>Log In</button>
    </div>
  )
}

export default Login
