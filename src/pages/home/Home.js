import React from "react";
import "./Home.css";
//import main from "../assests/image1.jpeg";
import main from "../../assests/gym4.jpg";
//import icon from "../assests/icon.png";
import icon from "../../assests/icon.png";
const Home = () => {
    return (
        <>
            <div className="container-fluid hero">
                <div className="container gx-0">
                    <div className="row gx-0">
                       
                        <div className="col-md-6">
                            <div className="hero_col2">
                                <img src={main} alt="img" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="hero_col1">
                                <h1>GET HEALTY BODY WITH THE <span className="color-text">PERFECT</span> EXERCISES</h1>
                                <p>Get fit fast with Fitness Gym's
                                    certified personal trainer.Enjoy cardio,
                                    strength,and weight training 
                                    with top equipment.
                                    Join now and make 'Impossible'
                                    'I'm possible'!
                                </p>
                                <div className="hero_btns">
                                    <button className="btn1 btn0">Join Now</button>
                                    <button className="play_btn">
                                        <img src={icon} />
                                        watch video</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;