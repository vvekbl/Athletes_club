import { useState } from "react";
import { Link,useHistory } from "react-router-dom";


function ActivityForm() {

    var [activity,setActivity] = useState({
        activity_name : "",
        description : ""
    })

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
          const xhr = new XMLHttpRequest();
          const url = 'http://localhost:8080/activities/save';
          xhr.open('POST', url);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function() {
            if (xhr.status === 200) {
              alert('Activity Added');
              console.log(xhr.response);
              history.push('/activities');
            } else {
              console.log('Request failed. Returned status of ' + xhr.status);
            }
          };
          xhr.send(JSON.stringify(activity));
        } else {
          alert('Please fill in all required fields');
        }
      };

      const handleChange = (event) => {
        setActivity({
          ...activity,
          [event.target.name]: event.target.value
        });
      };
    
      const validateForm = () => {
        const requiredFields = ['activity_name', 'description'];
        return requiredFields.every(field => activity[field].trim() !== '');
      }


    return (
        <div>
            <center>
                <h1>Add New Activity</h1>
                <br></br>

                <form onSubmit={handleSubmit}>

                    <div className='form-group'>
                        <label>Name:</label>
                        <input className="form-control" type="text" name="activity_name" value={activity.activity_name} onChange={handleChange} required />
                    </div>

                    <div className='form-group'>
                        <label> Description:</label> 
                        <textarea className="form-control" type="text" name="description" value={activity.description} onChange={handleChange} required />
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

export default ActivityForm;