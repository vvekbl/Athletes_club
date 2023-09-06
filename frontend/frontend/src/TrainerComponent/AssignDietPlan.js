import * as Yup from 'yup';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const schema = Yup.object().shape({
    memberId : Yup.number().required(),
    dietPlan:Yup.object().shape({
        planId: Yup.number().required(),
    })
  });

function AssignDietPlan() {
    

    var [member,setMember] = useState({
        memberId:0,
        dietPlan:{
            planId:0
        }
    })


    const handleDietPlanChange = (event) => {
        setMember({
            ...member, dietPlan : {
                ...member.dietPlan,
                [event.target.name]: event.target.value
            } 
          });
      }


    const handleSubmit = (event) => {
        event.preventDefault();
        schema.validate(member, { abortEarly: false })
        .then(() => {
        console.log('Validation passed');
        const xhr = new XMLHttpRequest();
          const url = 'http://localhost:8080/gymmembers/assignDietPlan';
          xhr.open('POST', url);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function() {
            if (xhr.status === 200) {
              console.log(xhr.response);
              alert("You assigned DietPlan to Member");
            } else {
              console.log('Request failed. Returned status of ' + xhr.status);
            }
          };
          xhr.send(JSON.stringify(member));
        })
      .catch((errors) => {
        alert(errors);
      });
      };

      const handleChange = (event) => {
        setMember({
          ...member,
          [event.target.name]: event.target.value
        });
      };
    
      


    return (
        <div>
         
          <div style={{backgroundColor:"white"}}>
          <br></br>
            <center>
                <h1>Assign DietPlan</h1>
                <br></br>

                <form onSubmit={handleSubmit}>

                    <div className='form-group'>
                        <label>Member ID:</label>
                        <input className="form-control" type="number" name="memberId" value={member.memberId} onChange={handleChange} required />
                    </div>

                    <div className='form-group'>
                        <label> DietPlan ID:</label> 
                        <textarea className="form-control" type="number" name="planId" value={member.dietPlan.planId} onChange={handleDietPlanChange} required />
                    </div>

                    <br></br>
                    <center>
                        <Link id='activity-link' href='/users' onClick={handleSubmit}>Submit</Link>
                    </center>

                </form>
            </center>

        </div>
        </div>
    )

}

export default AssignDietPlan