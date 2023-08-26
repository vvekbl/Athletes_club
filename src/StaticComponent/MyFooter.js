import React from "react";
import styled from "styled-components";
// import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import {FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

const Myfooter = () => {
  const divStyle = {
    backgroundColor: 'rgb(22, 17, 64)',
    color: 'aliceblue'
  };

  const  textcolor = {
  }

  return (
    <div style={ divStyle }>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div style={ textcolor }>
              <h3 style={{ color: "White" }}>Ready to get started?</h3>
              <h3 style={{ color: "White" }}>Talk to us today</h3>
            </div>

            <div className="contact-short-btn">
              <NavLink to="/">
                {/* <Button>Get Started</Button> */}
                <h4 style={{ color: "White" }}>Get Started</h4>
              </NavLink>
            </div>
          </div>
        </section>

        {/* footer section  */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3 style={{ color: "White" }}> Athlete's Club</h3>
              <p style={{ color: "White" }}>Hardest choices require the strongest will</p>
            </div>

            {/* 2nd column */}
            {/* <div className="footer-subscribe">
              <h3 style={{ color: "White" }}>Subscribe to get important updates</h3>
              <form action="#">
                <input
                  type="email"
                  required
                  autoComplete="off"
                  placeholder="Email"
                />
                <input type="submit" value="Subscribe" />
              </form>
            </div> */}

            {/* 3rs column  */}
            <div className="footer-social">
              <h3 style={{ color: "White" }}>Follows Us</h3>
              <div className="footer-social--icons">
                <div>
                  <a href="https://www.facebook.com/gtfitnessclubpune/"
                  target="_blank">
                    <FaFacebookF className="icons" />
                  </a>
                </div>
                <div> 

                <a
                    href="https://www.instagram.com/gt_fitness_club/?hl=en"
                    target="_blank"
                  >
                    <FaInstagram className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://youtu.be/GNxyWmTk_pI"
                    target="_blank"
                  >
                    <FaYoutube className="icons" />
                  </a>
                </div>
              </div>
            </div>

            {/* 4th column  */}
            <div className="footer-contact">
              <h3 style={{ color: "White" }}>Call Us</h3>
              <h3 style={{ color: "White" }}>+91 12345678978</h3>
            </div>
          </div>

          {/* bottom section  */}
          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column">
              <p style={{ color: "White" }}>
                @{new Date().getFullYear()}Athlete's Club. All Rights Reserved
              </p>
              <div>
                <p style={{ color: "White" }}>PRIVACY POLICY</p>
                <p style={{ color: "White" }}>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    border-radius: 1rem;
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }
  footer {
    padding: 14rem 0 9rem 0;
    h3 {
      margin-bottom: 2.4rem;
    }
    p {
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        .icons {
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        height: 0.1px;
      }
    }
  }
  @media (max-width: 95vw) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Myfooter;
