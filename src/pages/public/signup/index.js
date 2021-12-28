import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './signUp.css';

const SignUp = () => {
  const [data, setdata] = useState({
    Name: "",
    Email: "",
    "phone No": "",
    Password: "",
    RePassword: "",

  });

  const History = useHistory();
  const localStorageData = localStorage.getItem("list")
  const userByEmail = localStorageData ? JSON.parse(localStorageData) : {};


  const onChangeHandler = (e) => {
    const { placeholder, value } = e.target;
    setdata((pre) => {
      return (
        {
          ...pre,
          [placeholder]: value,

        }
      )
    }

    )

  }
  const setDataToLocalStoragre = (e) => {
    e.preventDefault();
    if (!userByEmail[data.Email]) {
      userByEmail[data.Email] = data;
      console.log(data)
      console.log(userByEmail[data.Email]);
      localStorage.setItem("list", JSON.stringify(userByEmail));
      History.push("/auth/login")
    } else {
      alert("Email already Exist")
    }

  }


  return (
    <>
      <form className="form" onSubmit={setDataToLocalStoragre}>
        <h1>SignUp here</h1>
        <div className="filled_div">
          <label className="label">Name</label>
          <input type="text" placeholder="Name" value={data.Name} onChange={onChangeHandler} required />
          <label className="label">Email</label>
          <input type="email" placeholder="Email" value={data.Email} onChange={onChangeHandler} required />
          <label className="label">Phone No</label>
          <input type="tel" placeholder="phone No" value={data["phone No"]} onChange={onChangeHandler} required />
          <label className="label">Password</label>
          <input type="password" placeholder="Password" value={data.Password} onChange={onChangeHandler} required />
          <label className="label">Re-Password</label>
          <input type="password" placeholder="RePassword" value={data.RePassword} onChange={onChangeHandler} required />
          {data.Password !== data.RePassword ? <p>Password doesn&apos;t match</p> : ""}
          <button className="Btn" type="submit" >SignUp</button>

        </div>

      </form>
    </>

  )

};

export default SignUp;
