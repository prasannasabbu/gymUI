import React, { useState, useEffect }from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

  var ucourses = [{ id: 1, description: "Cutomer" },
    { id: 2, description: "Trainer" }]

    const[gym,setGym]=useState([]);

  const nav = useNavigate();
  const [item, setItem] = useState({
    fullname: " ",
    username: " ",
    password: " ",
    email: " ",
    phone: " ",
    address: " ",
    gender: 0,
    age:0,
    roleId:0,
    gymId:0
  });

  const inputchangehandler = (event) => {
    const { type, name, value } = event.target;
      setItem({ ...item, [name]: value });


  }
  useEffect(() => {
   // event.preventDefault();           //to prevent page loading
   // console.log(item);
     axios.get(`http://localhost:8080/gymservices/users/gym`).then((res) => {
      //window.alert("details added successfully");
    //   nav("/signin");
        setGym(res.data);
        console.log(res.data);

     }).catch((err) => { })
    },[]
    )


  const addUser = (event) => {
    event.preventDefault();           //to prevent page loading
    console.log(item);
    axios.post(`http://localhost:8080/gymservices/users/add`, item).then(() => {
      window.alert("details added successfully");
      nav("/signin");

    }).catch((err) => { })
  }


  return (
     <>   
   <section className="container my-2 w-50 text-light p-2">
    <form className="row g-3 p-3 signup-form" onSubmit={addUser}>
    <h4 className="text-center text-success">Sign Up</h4>
        <div className="col-md-4">
            <label for="validationDefault01" className="form-label">Full name</label>
            <input type="text" name="fullname" className="form-control" id="validationDefault01" value={item.fullname}  onChange={inputchangehandler} required/>
          </div>
          <div className="col-md-4">
            <label for="validationDefaultUsername" className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2">@</span>
              <input type="text" name="username" className="form-control" id="validationDefaultUsername" value={item.username} onChange={inputchangehandler} aria-describedby="inputGroupPrepend2" required/>
            </div>
          </div>
          <div className="col-md-6">
          <label for="inputPassword" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" value={item.password} onChange={inputchangehandler} id="inputPassword"/>
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Email</label>
          <input type="email" name="email" className="form-control" id="inputEmail4" value={item.email}  onChange={inputchangehandler}/>
        </div>
        <div className="col-md-6">
          <label for="inputPhone" className="form-label">PhoneNo</label>
          <input type="tel" name="phone" className="form-control" value={item.phone} id="inputPhone" onChange={inputchangehandler}/>
        </div>
        <div className="col-md-6">
          <label for="inputAge" className="form-label">Age</label>
          <input type="number" name="age" className="form-control" value={item.age} id="inputAge" onChange={inputchangehandler}/>
        </div>
        
        <div className="col-12">
          <label for="inputAddress2" className="form-label">Address</label>
          <input type="text" name="address" className="form-control" id="inputAddress2" value={item.address} onChange={inputchangehandler} placeholder="Apartment, studio, or floor"/>
        </div>
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
        <div className="col-md-4">
        <label for="inputState" className="form-label">Gym</label>
          <select id="inputState" name="gymId" className="form-select"  onChange={inputchangehandler}>
          <option >Select Your Gym</option>
          {
                  gym.map((val, index) => {
                    return <option key={index} value={val.id} >{val.name}</option>
                  })
                }
          </select>
        </div>
        <div className="col-md-4 mt-5">
        <label htmlFor="username"  name="gender" className="text-dark px-1">Gender:</label>
          <input type="radio" id="male" name="gender"  onChange={inputchangehandler} value="male"/>
          <label for="html" className="text-dark px-2">Male</label>
          <input type="radio" id="female" name="gender" onChange={inputchangehandler} value="female"/>
          <label for="css" className="text-dark px-2">Female</label>
        </div>

        <div className="col-12 btn">
          <button type="submit" className="btn btn-success">Register</button>
        </div>
        <div className="col-12 text-center">
        <span className="text-dark">Already have an Account? </span>
        <Link to="/login" className="login-link">
          Login
        </Link>
        </div>
        
      </form>
   </section>
   </>
  );
};

export default Signup;