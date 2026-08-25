import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function WorkoutPlanForm() {
    
    var [formData,setFormData] = useState({
        workoutname : "",
        set1 : "",
        set2 : "",
        set3 : ""
    })

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
          const xhr = new XMLHttpRequest();
          const url = 'http://localhost:8080/workouts/save';
          xhr.open('POST', url);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function() {
            if (xhr.status === 200) {
              alert('Workoutplan Added');
              console.log(xhr.response);
              history.push('/workouts');
            } else {
              console.log('Request failed. Returned status of ' + xhr.status);
            }
          };
          xhr.send(JSON.stringify(formData));
        } else {
          alert('Please fill in all required fields');
        }
      };

      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };
    
      const validateForm = () => {
        const requiredFields = ['workoutname', 'set1', 'set2', 'set3'];
        return requiredFields.every(field => formData[field].trim() !== '');
      }


    return (
        <div>
            <center>
                <h1>Add New Workout Exercise</h1>
                <br></br>

                <form onSubmit={handleSubmit}>

                    <div className='form-group'>
                        <label>Workout Plan Name:</label>
                        <input className="form-control" type="text" name="workoutname" value={formData.workoutname} onChange={handleChange} required />
                    </div>

                    <div className='form-group'>
                        <label> Set1: </label>
                        <input className="form-control" type="text" name="set1" value={formData.set1} onChange={handleChange} required />
                    </div>

                    <div className='form-group'>
                        <label> Set2: </label>
                        <input className="form-control" type="text" name="set2" value={formData.set2} onChange={handleChange} required />
                    </div>

                    <div className='form-group'>
                        <label> Set3: </label>
                        <input className="form-control" type="text" name="set3" value={formData.set3} onChange={handleChange} required />
                    </div>

                    <br></br>
                    <center>
                        <Link id='exercise-link' onClick={handleSubmit}>Submit</Link>
                    </center>

                </form>
            </center>

        </div>
    )

}

export default WorkoutPlanForm