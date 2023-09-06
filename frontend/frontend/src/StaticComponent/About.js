import React from 'react';
import '../CSS/about.css'
import jayant from '../images/jayant.jpg'
import apeksha from '../images/apeksha.jpg'
import tejas from '../images/tejas.jpg'

import vivek from '../images/vivek.jpg'


function About() {
    
    return (
          <div>
            {/* <br></br> */}
            <div style={{backgroundColor:'white'}}>
           <div class="about-section">
  <h1>About Us</h1>
  <center><h3 style={{textAlign:'center',font:'revert-layer',marginBottom:"15px"}}>" I’ve Always Believed That If You Put In The Work, The Results Will Come. " 
                                                   </h3></center><h3 style={{textAlign:'right',marginRight:"200px"}}>– MICHAEL JORDAN.</h3>
  <p style={{textAlign:'left'}}>The web based “Athlete’s Club Management System” project is an attempt to simulate basic concepts of Gym Management system. 
  The system enables the member to do the things such as search for workout-plans, diet plans and choose them based on the details of the plans. 
		The system provides a facility that provides details about gym contact details with locations, Gallery, Programs and Blogs. But if user wants to book plan then he/she must login into his/her account.
The system allows the gym-members to search for subscription-plans, workout-plans and diet-plans which are provided by the management. The system displays all the plan’s details such as plan-Id, plan- Name, duration and amount. 
  
</p>

</div>

<center>
<div style={{backgroundColor: '#1D3F6E'}}>
  <h2>OUR TEAM</h2>
  </div>
</center>


<div>
  <div class="column">
    <div class="card">
    <img src={jayant} alt="jayant"></img>
      
      <div class="container">
        <h2>Jayant Uttarwar</h2>
        {/* <p class="title">CEO & Founder</p> */}
        <p></p>
        
        <p>jayantuttarwar8@gmail.com</p>
        {/* <p>+------------</p> */}
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src={vivek} alt="vivek"></img>
      <div class="container">
        <h2>Vivek Londhe</h2>
        {/* <p class="title">Managing Director</p> */}

        <p>vivekb.londhe@gmail.com</p>
        {/* <p>+91 87936 87522</p> */}
        
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src={tejas} alt="tejas"></img>
      <div class="container">
        <h2>Tejas Patil</h2>
        {/* <p class="title">Designer</p> */}
        
        <p>tp111607@gmail.com</p>
        {/* <p>+91 ---------</p> */}
        
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src={apeksha} alt="apeksha"></img>
      <div class="container">
        <h2>Apeksha kamble</h2>
        {/* <p class="title">Art Director</p> */}
        <p>apekshakamble2425@gmail.com</p>
        {/* <p>+91 -------------</p> */}
        
      </div>
      

    </div>
    </div>
            </div>
          </div>
          </div>
        
    )
    

}

export default About;