import React from 'react';
import '../CSS/about.css'
import itachi from '../images/itachi.jpg'
import hinata from '../images/hinata.jpeg'
import gara from '../images/gara.jpeg'

import naruto1 from '../images/naruto1.jpeg'


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
    <img src={itachi} alt="itachi"></img>
      
      <div class="container">
        <h2>itachi uchiha</h2>
        <p class="title">CEO & Founder</p>
        
        <p>itachi@gmail.com</p>
        <p>+------------</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src={naruto1} alt="naruto1"></img>
      <div class="container">
        <h2>naruto uzumaki</h2>
        <p class="title">Managing Director</p>

        <p>naruto.uzumaki@gmail.com</p>
        <p>+91 87936 87522</p>
        
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src={gara} alt="gara"></img>
      <div class="container">
        <h2>gara</h2>
        <p class="title">Designer</p>
        
        <p>gara@gmail.com</p>
        <p>+91 ---------</p>
        
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src={hinata} alt="hinata"></img>
      <div class="container">
        <h2>hinata</h2>
        <p class="title">Art Director</p>
        <p>hinata@gmail.com</p>
        <p>+91 -------------</p>
        
      </div>
      

    </div>
    </div>
            </div>
          </div>
          </div>
        
    )
    

}

export default About;