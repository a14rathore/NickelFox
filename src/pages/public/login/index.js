import React, { useState } from "react";
import AppDispatcher from "@redux/dispatchers/appDispatcher";
import style from "../signup/signUp.module.css"


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
    if (LocalStoragedata[logindata.UserName] && LocalStoragedata[logindata.UserName].Password === logindata.Password) {
      alert("user Logged in")
      AppDispatcher.updateUserTokens();

    } else {
      alert("Please SignUp First");
    }

  }

  return (
    <div>
      <form className={style.form} onSubmit={getDataFromLocalStorage}>
        <h1>Login Here</h1>
        <div className={style.filled_div}>
          <label>UserName(Email)</label>
          <input type="email" required placeholder="UserName" value={logindata.UserName} onChange={inputHandler}></input>
          <label>Password</label>
          <input type="password" required placeholder="Password" value={logindata.Password} onChange={inputHandler}></input>
          <button className={style.Btn} type="onSubmit">Login</button>
          <a className={style.Btn} href="/auth/signup">SignUp</a>
        </div>

      </form>
    </div >
  );
};

export default Login;
