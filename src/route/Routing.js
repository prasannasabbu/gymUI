import React from "react";
import {  Routes,Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Membership from "../pages/membership/Membership";
import Login from "../components/signIn/Login";
import Signup from "../components/signup/Signup";

const Routing=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/membership" element={<Membership/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
        
        </>
    )
}
export default Routing;