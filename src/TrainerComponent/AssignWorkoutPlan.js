import * as Yup from 'yup';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const schema = Yup.object().shape({
    memberId : Yup.number().required(),
    workoutPlan: Yup.object().shape({
        workoutid: Yup.number().required(),
    })
  });

function AssignWorkoutPlan() {
    

    var [member,setMember] = useState({
        memberId:0,
        workoutPlan:{
            workoutid:0
        }
    })


    const handleWorkoutPlanChange = (event) => {
        setMember({
            ...member, workoutPlan : {
                ...member.workoutPlan,
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
          const url = 'http://localhost:8080/gymmembers/assignWorkoutPlan';
          xhr.open('POST', url);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function() {
            if (xhr.status === 200) {
              console.log(xhr.response);
              alert("You assigned WorkoutPlan to Member");
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
            <center>
                <h1>Add New Activity</h1>
                <br></br>

                <form onSubmit={handleSubmit}>

                    <div className='form-group'>
                        <label>Member ID:</label>
                        <input className="form-control" type="number" name="memberId" value={member.memberId} onChange={handleChange} required />
                    </div>

                    <div className='form-group'>
                        <label> WorkoutPlan ID:</label> 
                        <textarea className="form-control" type="number" name="workoutid" value={member.workoutPlan.workoutid} onChange={handleWorkoutPlanChange} required />
                    </div>

                    <br></br>
                    <center>
                        <Link id='activity-link' href='/users' onClick={handleSubmit}>Submit</Link>
                    </center>

                </form>
            </center>

        </div>
    )

}

export default AssignWorkoutPlan