import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function WorkoutExerciseForm() {
    
    var [formData,setFormData] = useState({
        workout_exercise_name : "",
        description : ""
    })

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
          const xhr = new XMLHttpRequest();
          const url = 'http://localhost:8080/exercise/save';
          xhr.open('POST', url);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function() {
            if (xhr.status === 200) {
              alert('Exercise Added');
              console.log(xhr.response);
              history.push('/membershipPlans');
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
        const requiredFields = ['workout_exercise_name', 'description'];
        return requiredFields.every(field => formData[field].trim() !== '');
      }


    return (
        <div>
            <center>
                <h1>Add New Workout Exercise</h1>
                <br></br>

                <form onSubmit={handleSubmit}>

                    <div className='form-group'>
                        <label>Exercise Name:</label>
                        <input className="form-control" type="text" name="workout_exercise_name" value={formData.workout_exercise_name} onChange={handleChange} required />
                    </div>

                    <div className='form-group'>
                        <label> Description: </label>
                        <input className="form-control" type="text" name="description" value={formData.description} onChange={handleChange} required />
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

export default WorkoutExerciseForm