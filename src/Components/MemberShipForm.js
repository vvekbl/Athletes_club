import { useState } from "react";
import * as Yup from 'yup';

const schema = Yup.object().shape({
  gender: Yup.string().required(),
  height : Yup.number().required(),
  weight : Yup.number().required(),
  user: Yup.object().shape({
    user_id: Yup.number().required(),
  }),
  activity: Yup.object().shape({
    activity_id: Yup.number().required(),
  }),
  membershipPlan: Yup.object().shape({
    membershipPlanId: Yup.number().required(),
  }),
});


function MemberShip() {
    
    const [formData, setFormData] = useState({
        gender: '',
        joinDate: null,
        height: 0.0,
        weight: 0.0,
        user:{
            user_id:0
        },
        activity:{
            activity_id: 0
        },
        membershipPlan:{
            membershipPlanId:0
        },
      });

      const handleSubmit = (event) => {
        event.preventDefault();
        schema.validate(formData, { abortEarly: false })
        .then(() => {
        console.log('Validation passed');
        const xhr = new XMLHttpRequest();
          const url = 'http://localhost:8080/gymmembers/save';
          xhr.open('POST', url);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function() {
            if (xhr.status === 200) {
              console.log(xhr.response);
              alert("You became member");
            } else {
              console.log('Request failed. Returned status of ' + xhr.status);
            }
          };
          xhr.send(JSON.stringify(formData));
        })
      .catch((errors) => {
        alert(errors);
      });
      };
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };
    
      const handleDateChange = (event) => {
        setFormData({
          ...formData,
          joinDate: event.target.value
        });
      };      
    

      const handleUserChange = (event) => {
        setFormData({
            ...formData, user : {
                ...formData.user,
                [event.target.name]: event.target.value
            } 
          });
      }

      const handleActivityChange = (event) => {
        setFormData({
            ...formData, activity : {
                ...formData.activity,
                [event.target.name]: event.target.value
            } 
          });
      }

      const handleMembershipChange = (event) => {
        setFormData({
            ...formData, membershipPlan : {
                ...formData.membershipPlan,
                [event.target.name]: event.target.value
            } 
          });
      }

      return (

        <center>
    
            <h1>MemberShip Form</h1>
            <br></br>
    
            <form onSubmit={handleSubmit}>
    
                <label>Gender : </label>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male" onChange={handleChange}/>
                <label class="form-check-label" for="inlineRadio1">Male</label>
                </div>

                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female" onChange={handleChange}/>
                <label class="form-check-label" for="inlineRadio2">Frmale</label>
                </div>

                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" id="inlineRadio3" value="other" onChange={handleChange}/>
                <label class="form-check-label" for="inlineRadio3">Other</label>
                </div>

                <label>
                    Join Date:
                    <input type="date" name="joinDate" value={formData.joinDate} onChange={handleDateChange} dateFormat="yyyy-MM-dd"/>
                </label>
    
                <div className='form-group'>
                    <label> Height:</label> 
                    <input className="form-control" type="number" name="height" value={formData.height} onChange={handleChange} required />
                </div>
    
                <div className='form-group'>
                    <label> Weight:</label> 
                    <input className="form-control" type="number" name="weight" value={formData.weight} onChange={handleChange} required />
                </div>

                <div className='form-group'>
                    <label>User Id:</label>
                    <input className="form-control" type="text" name="user_id" value={formData.user.user_id} onChange={handleUserChange} required />
                    <small> * You can see it from your profile</small>
                </div>
    
                <div className='form-group'>
                    <label>Activity Id:</label>
                    <input className="form-control" type="text" name="activity_id" value={formData.activity.activity_id} onChange={handleActivityChange} required />
                    <small>You can see it from your profile</small>
                </div>

                <div className='form-group'>
                    <label>MembershipPlan Id:</label>
                    <input className="form-control" type="text" name="membershipPlanId" value={formData.membershipPlan.membershipPlanId} onChange={handleMembershipChange} required />
                    <small>You can see it from your profile</small>
                </div>
                
                <br></br>
                <center>
                    <a id='membership-link' href='/users' onClick={handleSubmit}>Submit</a>
                </center>
    
            </form>
        </center>
        
      );
}

export default MemberShip