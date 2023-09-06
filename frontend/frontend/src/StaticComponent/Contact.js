import React from "react";
import "../CSS/about.css";
import gym from "../images/gym.jpg";
import "../CSS/index.css";
import { Image } from "react-bootstrap";

function Contact() {
  return (
    <div>
      {/* <br></br> */}
      {/* <div style={{backgroundColor:"white"}}> */}
      <div class="about-section" style={{ color: "White" }}>
        <h1>Contact Us</h1>
      </div>
      <div style={{ display: "flex" }}>
        <div class="row" style={{ flex: 1, color: "Grey" }}>
          <div class="column" style={{ alignContent: "space-around" }}>
            <center>
              <h2>ATHLETE'S CLUB</h2>
            </center>
            <div style={{ height: 500 }}>
              <center>
                <Image src={gym} alt="Gym" className="contact"></Image>
              </center>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, color: "Grey" }}>
          <div>
            <center>
              <h1>GET IN TOUCH</h1>
            </center>
            <hr></hr>
            <br></br>

            <h4>
              WE ARE ALWAYS READY TO HEAR FROM YOU<br></br>WE MAKE IT A POINT TO
              RESPOND WITHIN 24 HOURS
            </h4>
            <br></br>
            <br></br>

            <h4 style={{ textAlign: "left" }}>
              Address: GRGV+MCC, 1st Floor, Gurukrupa Complex, Modern College Road, Off FC Road, Shivajinagar, Pune, Maharashtra 411005
            </h4>

            <h4 style={{ textAlign: "left" }}>
              Contact: 020-888 888 , 020-888 789{" "}
            </h4>
            <h4 style={{ textAlign: "left" }}>
              {/* Email: Wecare@silverfitnessclub.in */}
            </h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Contact;
