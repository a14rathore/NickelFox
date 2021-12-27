import React, { useState } from "react";
import AppDispatcher from "@redux/dispatchers/appDispatcher";


const Login = () => {
  const [logindata, setLogindata] = useState({
    UserName: "",
    Password: "",
  })
  const inputHandler = (e) => {
    const { placeholder, value } = e.target;
    setLogindata({
      ...logindata,
      [placeholder]: value,
    })

  }
  const getDataFromLocalStorage = () => {
    const LocalStoragedata = JSON.parse(localStorage.getItem("list"));
    LocalStoragedata.map((ele) => {
      if (ele.Email === logindata.UserName && ele.Password === logindata.Password) {
        alert("login Successful")
        AppDispatcher.updateUserTokens();
        window.location.path = "/u/dashboard"

      }
    })
  }
  const signup = () => {
    alert("signUp");
    window.location.path = "/auth/signup"
  }

  return (
    <div>
      <form className="form">
        <h1>Login Here</h1>
        <div className="filled_div">
          <label>UserName(Email)</label>
          <input type="email" placeholder="UserName" value={logindata.UserName} onChange={inputHandler}></input>
          <label>Password</label>
          <input type="password" placeholder="Password" value={logindata.Password} onChange={inputHandler}></input>
          <button className="Btn" onClick={getDataFromLocalStorage}>Login</button>
          <button className="Btn" onClick={signup}>SignUp</button>
        </div>

      </form>
    </div>
  );
};

export default Login;
