import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignIn from "../src/component/SignIn/SignIn";
import Login from "../src/component/LoginPage/Login"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
