import React from 'react';
import '../CSS/about.css'
import jayant from '../images/jayant.jpg'
import apeksha from '../images/apeksha.jpg'
import tejas from '../images/tejas.jpg'

import vivek from '../images/vivek.jpg'


function About() {
    
    return (
        
          <div>
            <br></br>
            <div style={{backgroundColor:'white'}}>
           <div class="about-section">
  <h1>About Us</h1>
  <h3 style={{textAlign:'left',font:'revert-layer'}}>" I’ve Always Believed That If You Put In The Work, The Results Will Come. " – MICHAEL JORDAN.</h3>
  <p style={{textAlign:'left'}}>Being physically and mentally fit is necessary to live a happy, long life. 
  Exercise is one of the best ways to keep a person healthy. 
  Hence, it is always best to find a workout routine no matter how busy you are. 
  With the numerous diseases that spread today, many individuals realized the essence of workout. 
  Specifically, having a workout routine will give an individual the greatest physical, mental, and social benefits. 
  Accordingly, exercise will help you increase energy levels, reduce chronic disease risk, lose weight, and help improve brain health and memory. 
  With such benefits, you probably will love to do workout routines soon. Luckily, you don’t need to do it yourself as various personal trainers, or professional fitness coaches provide the help you need. 
  And joining fitness classes is just at your fingertips. 
  
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