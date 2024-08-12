import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  
  var ucourses = [{ id: 1, description: "Cutomer" },
    { id: 2, description: "Trainer" }]

const nav= useNavigate();
const[item,setItem]=useState({
    email:" ",
    password:" "
});

const inputchangehandler = (event) => {
  const { type, name, value } = event.target;
  setItem({ ...item, [name]: value })
}



const addDetails=(event)=>{
  console.log(item);
    event.preventDefault();           //to prevent page loading
     console.log(item);
    axios.post(`http://localhost:8080/gymservices/users/login`,item).then((res)=>{
        // window.alert("details added successfully");
        // nav("/homepage1");
       // console.log(item.password);
       // const token= res.data;
       // console.log(res.data);
       // localStorage.setItem("token",res.data.token);
        //setAuthToken(token);
        // if(selectedOption=="Customer") {
           nav("/");
        // }
        // else if(selectedOption=="Vendor"){
        //  // nav("/homepage2");
        // }
        // else{
        //   //nav("/admin");
        // }
        
    }).catch((err)=>{})
}
// const handleSubmit=(e)=>{
//   e.preventDefault();
//   setEmail("");
//   setPassword("");

//   localStorage.setItem("email",email)
//   localStorage.setItem("password",password);
// }
  return (
    <>
    <div>
    <div className="addUser">
      <h3>Sign in</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
            onChange={inputchangehandler} value={item.email}
          />
          <label >Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter your Password"
            onChange={inputchangehandler} value={item.password}
          />

<div className="col-md-4">
          <label for="inputState" className="form-label">Role</label>
          <select id="inputState" name="roleId" className="form-select"  onChange={inputchangehandler}>
          <option >Select Your role</option>
          {
                  ucourses.map((val, index) => {
                    return <option key={index} value={val.id} >{val.description}</option>
                  })
                }
          </select>
        </div>


          <button type="submit" class="btn btn-success mt-4" onSubmit={addDetails} >
            Login
          </button>
        </div>
      </form>
      <div className="login text-center mt-1">
        <span>Don't have Account? </span>
        <Link to="/signup" className="login-link">
          Sign Up
        </Link>
        {/* <Link to="/signup" type="submit" class="btn btn-success">
          Sign Up
        </Link> */}
      </div>
    </div>
    </div>
    </>
  );
};

export default Login;