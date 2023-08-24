import { useState } from "react";
import { Link,useHistory } from "react-router-dom";

function DietPlanForm() {

    var [dietPlan,setDietPlan] = useState({
        planname : "",
        breakfast : "",
        launch : "",
        preworkout : "",
        dinner : ""
    })

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
          const xhr = new XMLHttpRequest();
          const url = 'http://localhost:8080/dietplans/save';
          xhr.open('POST', url);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function() {
            if (xhr.status === 200) {
              alert('DietPlan Added');
              console.log(xhr.response);
              history.push('/dietPlans');
            } else {
              console.log('Request failed. Returned status of ' + xhr.status);
            }
          };
          xhr.send(JSON.stringify(dietPlan));
        } else {
          alert('Please fill in all required fields');
        }
      };

      const handleChange = (event) => {
        setDietPlan({
          ...dietPlan,
          [event.target.name]: event.target.value
        });
      };
    
      const validateForm = () => {
        const requiredFields = ['planname', 'breakfast','launch','preworkout','dinner'];
        return requiredFields.every(field => dietPlan[field].trim() !== '');
      }


    return (
        <div>
            <center>
                <h1>Add New DietPlan</h1>
                <br></br>

                <form onSubmit={handleSubmit}>

                    <div className='form-group'>
                        <label>Plan Name</label>
                        <input className="form-control" type="text" name="planname" value={dietPlan.planname} onChange={handleChange} required />
                    </div>

                    <div className='form-group'>
                        <label>Breakfast</label>
                        <input className="form-control" type="text" name="breakfast" value={dietPlan.breakfast} onChange={handleChange} required />
                    </div>

                    <div className='form-group'>
                        <label>Launch</label>
                        <input className="form-control" type="text" name="launch" value={dietPlan.launch} onChange={handleChange} required />
                    </div>
                    
                    <div className='form-group'>
                        <label>PreWorkout </label>
                        <input className="form-control" type="text" name="preworkout" value={dietPlan.preworkout} onChange={handleChange} required />
                    </div>

                    <div className='form-group'>
                        <label>Dinner</label>
                        <input className="form-control" type="text" name="dinner" value={dietPlan.dinner} onChange={handleChange} required />
                    </div>

                    <br></br>
                    <center>
                        <Link id='dietplan-link' href='/users' onClick={handleSubmit}>Submit</Link>
                    </center>

                </form>
            </center>

        </div>
    )
}

export default DietPlanForm;