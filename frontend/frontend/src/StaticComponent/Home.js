import '../CSS/index.css'

import React from "react";
//  import 'bootstrap/dist/css/bootstrap.css";
import Fit from "../images/Fit.jpg";
import Aesthetic from "../images/Aesthetic.jpg";
import Bulky from "../images/Bulky.jpeg";
import Land from "../images/Land.jpg";
// import {Row,Col,Image} from 'react-bootstrap'

import { Link } from 'react-router-dom';
import Myfooter from "./MyFooter";

function Home() {
  const centeredStyle = {
    textAlign: "center",
    height:100,
    color: "red",
    padding:"20"
  };
  
  return (
    <div>
        
      <div style={{ backgroundColor: "#6577B3" }}>

      <div style={{ backgroundColor: "white" }}>
      <div style={{ color: "white" }}>
        <center>
          <h1 style={{ color: "black" }}>Athlete's Club</h1>
        </center>
        <br></br>
      </div>

      </div>
      <div>
         <img src={Land} className="card-img-top-home" alt="Image2" />{" "}
      </div>

      <div>
        <hr />
      </div>

      <div className="container overflow-hidden text-center">
        <div className="row gx-5">
          <div style={{ display: "flex" }}>
            <div className="col" style={{ flex: 1, color: "Grey" }}>
              <div className="p-3" style={{ flex: 1, color: "Grey" }}>
                <h2 style={{ color: "green" }}>Description</h2>
                <div>
                  <p style={{ color: "black" }}>
                  We, at Athlete's Club, pride ourselves in giving you
                  excellent customer service, best equipment and best
                  atmosphere! Work out hard and have more fun !!
                  </p>
                  
                </div>
              </div>
            </div>

            <div
              className="container text-center"
              style={{ flex: 1, color: "Black" }}
            >
              <div className="row">
                <div className="col">
                  <div className="card">
                    {/* <img src={Aesthetic} className="card-img-top" alt="Image2" /> */}
                    <div className="card-body" style={{ backgroundColor: "bisque" }}>
                      <h5 className="card-title" >Enquiry Timings</h5>
                      <p className="card-text">
                        Monday- Sunday <br />
                        6am- 10pm
                      </p>
                      <div>
                            <Link to="/blogs" target="_blank">Blogs</Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <hr />
      </div>

      <div style={{ display: "flex" }}>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="card">
                <img src={Aesthetic} className="card-img-top" alt="Image2" />
                <div className="card-body">
                  <h5 className="card-title">Fit</h5>
                  <p className="card-text" >
                    High on cardio and low food intakes
                  </p>
                  <a
                    href="https://www.nia.nih.gov/health/four-types-exercise-can-improve-your-health-and-physical-ability"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="card">
                <img src={Fit} className="card-img-top" alt="Image2" />
                <div className="card-body">
                  <h5 className="card-title">Aesthetic</h5>
                  <p className="card-text">
                    Regular exercises, activities and proper food intake
                  </p>
                  <a
                    href="https://steelsupplements.com/blogs/steel-blog/the-best-aesthetic-physique-training-program#:~:text=What%20Does%20Aesthetic%20Mean%3F,way%20that%20is%20visually%20appealing."
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="card">
                <img src={Bulky} className="card-img-top" alt="Image3" />
                <div className="card-body">
                  <h5 className="card-title">Bulky</h5>
                  <p className="card-text">
                    Rich protein foods andadvance level workouts
                  </p>
                  <a
                    href="https://www.healthline.com/nutrition/bulking#:~:text=Bulking%20is%20a%20phase%20of%20bodybuilding&text=Bulking%20is%20the%20muscle%2Dgaining,while%20weight%20training%20(%201%20)."
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <hr />
      </div>

      <div style={centeredStyle}>
        <h4>Motivation is the key for fitness</h4>
      </div>

      <div style={{ display: "flex" }}>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="card">
                {/* <img src={Aesthetic} className="card-img-top" alt="Image2" /> */}
                <div
                  className="card-body"
                  style={{ backgroundColor: "grey", height: 100 }}
                >
                  <h5 className="card-title"></h5>
                  <p className="card-text">
                    “Strength does not come from physical capacity. It comes
                    from an indomitable will.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="card">
                {/* <img src={Fit} className="card-img-top" alt="Image2" /> */}
                <div
                  className="card-body"
                  style={{ backgroundColor: "Grey", height: 100 }}
                >
                  <p className="card-text">
                    “Success usually comes to those who are too busy to be
                    looking for it.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="card">
                <div
                  className="card-body"
                  style={{ backgroundColor: "Grey", height: 100 }}
                >
                  <p className="card-text">
                    “If you want something you’ve never had, you must be willing
                    to do something you’ve never done.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      

      <div>
        <hr />
      </div>

      

      <div style={{ backgroundColor: "black" }}>
        -
      </div>

      <Myfooter />
    </div>
    </div>
    
  );
}

export default Home;
