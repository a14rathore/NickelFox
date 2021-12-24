import React, { useState } from "react";


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


  return (
    <div>
      <form className="form">
        <h1>Login Here</h1>
        <div className="filled_div">
          <label>UserName(Email)</label>
          <input type="email" placeholder="UserName" value={logindata.UserName} onChange={inputHandler}></input>
          <label>Password</label>
          <input type="password" placeholder="Password" value={logindata.Password} onChange={inputHandler}></input>
          <button className="Btn">Login</button>
        </div>

      </form>
    </div>
  );
};

export default Login;
