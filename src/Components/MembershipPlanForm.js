import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function MemberShipPlanForm() {
    
    var [formData,setFormData] = useState({
        planName : "",
        duration : 0,
        amount : 0,
    })

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
          const xhr = new XMLHttpRequest();
          const url = 'http://localhost:8080/MembershipPlans/save';
          xhr.open('POST', url);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function() {
            if (xhr.status === 200) {
              alert('MemberShipPlan Added');
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
        const requiredFields = ['planName', 'duration','amount'];
        return requiredFields.every(field => formData[field].trim() !== '');
      }


    return (
        <div>
            <center>
                <h1>Add New MemberShipPlan</h1>
                <br></br>

                <form onSubmit={handleSubmit}>

                    <div className='form-group'>
                        <label>Plan Name:</label>
                        <input className="form-control" type="text" name="planName" value={formData.planName} onChange={handleChange} required />
                    </div>

                    <div className='form-group'>
                        <label> Duration: </label>
                        <input className="form-control" type="number" name="duration" value={formData.duration} onChange={handleChange} required />
                    </div>

                    <div className='form-group'>
                        <label> Amount: </label>
                        <input className="form-control" type="number" name="amount" value={formData.amount} onChange={handleChange} required />
                    </div>

                    <br></br>
                    <center>
                        <Link id='memplan-link' onClick={handleSubmit}>Submit</Link>
                    </center>

                </form>
            </center>

        </div>
    )

}
export default MemberShipPlanForm