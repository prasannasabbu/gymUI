import React from "react";
import "./Membership.css";
// import icon1 from "../assests/icon.png"
import icon1 from "../../assests/gym-icon1.png";
import icon2 from "../../assests/gym-icon2.jpg";
import icon3 from "../../assests/gym-icon3.jpg";
import icon4 from "../../assests/gym-icon4.jpg";
const Bestoffers=()=>{
    return(
        <>
        <div className="container-fluid bestoffers">
            <div className="container">
                <div className="row gx-0 p-4align-items-center">
                 <div className="col-md-7 mt-5">
                    <h1 className="main_heading pe-md-5 me-md-5">The <span>Best Programs</span> We Offers For You</h1>
                 </div>
                 <div className="col-md-5 mt-5">
                    <p className="main-para">
                        We <span>offer</span> a wide range of comprehensive <span>fitness</span> programs designed to cater 
                        to individuals of all fitness levels.Our aim to help your achieve 
                        specific <span>goals & maximize</span> results.
                    </p>
                 </div>
                </div>
                {/*********************** */}
                <div className="row gx-0 mt-4">
                    <div className="col-md-3 px-2 mt-5">
                        <div className="bestoffers_col1">
                            <img src={icon1} className="img-fluid pd-2"/>
                            <h4>Strength Training</h4>
                            <p>Our trainers will design that a progressive workout 
                                plans that proper achieve gains strength.
                            </p>
                                                     <button>Learn More</button>
                        </div>
                    </div>
                    <div className="col-md-3 px-2 mt-5">
                        <div className="bestoffers_col1">
                            <img src={icon2} className="img-fluid pd-2"/>
                            <h4>Basic Yoga</h4>
                            <p>This program combines yoga with cardio & strength 
                                training to help lose weight & fitness.
                            </p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="col-md-3 px-2 mt-5">
                        <div className="bestoffers_col1">
                            <img src={icon3} className="img-fluid pd-2"/>
                            <h4>Body Building</h4>
                            <p>For those looking to increase strength Building
                                lean muscles,increase bone and ligament
                                strength.
                            </p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="col-md-3 px-2 mt-5">
                        <div className="bestoffers_col1">
                            <img src={icon4} className="img-fluid pd-2"/>
                            <h4>Weight Loss</h4>
                            <p>Our weight loss programs are 
                                designed to help you make 
                                sustainable lifestyle changes from healthy diet plans.
                            </p>
                            <button>Learn More</button>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        </>
    )
}
export default Bestoffers;