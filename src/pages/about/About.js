import React from "react";
import "./About.css";
//import image from "../assests/gym2.jpg"
import image from "../../assests/gym2.jpg";
import partner1 from "../../assests/partner1.jpg";
import partner2 from "../../assests/partner2.png";
import partner3 from "../../assests/partner3.jpg";
const About = () => {
  return (
    <>
      <div className="container-fluid fitness_goal">
        <div className="container">
          <div className="row gx-0">
            <div className="col-md-5">
              <div className="fitness_col1 m-2">
                <h3>970k + More</h3>
                <p>Trusted Companies Partner</p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="fitness_col2 mt-3 ">
                <img src={partner1} className="img-fluid"/>
                <img src={partner2} className="img-fluid"/>
                <img src={partner3} className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/************************* */}
      <div className="container-fluid fitness_goal1">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div className="col-md-6">
              <div className="fitness_col3 mt-3">
                <img src={image} className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 px-5">
              <div className="fitness_col4 mx-5">
                <h1>Get ready to reach your fitness goals</h1>
                <div className="py-3">
                <p className="para">
                  <span>We're committed to bringing you the best workout 
                  experience.</span>
                  <span id="alter-color">Body composition Assessment.</span>
                  <span>Open 7 Days A Week.</span>
                  <span id="alter-color">Complimentary Valet Parking.</span>
                  <span> Clean,Confortable and Safe.</span>
                </p>
                </div>
               <button className="btn1">Get Free Trail Today</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default About;