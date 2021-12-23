import React, { useEffect, useState } from "react";
import './signUp.css';

const SignUp = () => {
  const [data, setdata] = useState({
    Name: "",
    Email: "",
    "phone No": "",
    Password: "",
    RePassword: "",
  });
  const localStorageData = localStorage.getItem("list")
  const [array, setArray] = useState(localStorageData ? JSON.parse(localStorageData) : []);
  const onChangeHandler = (e) => {

    const { placeholder, value } = e.target;
    setdata((pre) => {
      return {
        ...pre,
        [placeholder]: value,
      }
    });

  }
  const setDataToLocalStoragre = (e) => {
    e.preventDefault();
    (data.Name && data.Password && data.RePassword && data["phone No"] && data.Email) ?
      (
        setArray([...array, data]),
        setdata({
          Name: "",
          Email: "",
          "phone No": "",
          Password: "",
          RePassword: "",
        })
      )
      : alert("cant be Empty")
  }
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(array))
  })
  return (
    <>
      <form className="form">
        <h1>SignUp here</h1>
        <div className="filled_div">
          <label className="label">Name</label>
          <input type="text" placeholder="Name" value={data.Name} onChange={onChangeHandler} />
          <label className="label">Email</label>
          <input type="email" placeholder="Email" value={data.Email} onChange={onChangeHandler} />
          <label className="label">Phone No</label>
          <input type="tel" placeholder="phone No" value={data["phone No"]} onChange={onChangeHandler} />
          <label className="label">Password</label>
          <input type="password" placeholder="Password" value={data.Password} onChange={onChangeHandler} />
          <label className="label">Re-Password</label>
          <input type="password" placeholder="RePassword" value={data.RePassword} onChange={onChangeHandler} />
          {data.Password !== data.RePassword ? <p>Password doesn&apos;t match</p> : ""}
          <button className="Btn" onClick={setDataToLocalStoragre}>SignUp</button>

        </div>

      </form>
    </>

  )

};

export default SignUp;
