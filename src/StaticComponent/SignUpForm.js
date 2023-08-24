import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/index.css'
import { Link } from 'react-router-dom';



function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    email: '',
    password: ''
  });

  const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('http://localhost:8080/users/saveUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                
                if (response.status === 200) {
                    if (result.status === "error") {
                        alert("Email is already registered. Try with a different email.");
                    } else {
                        console.log(result);
                        alert("Registration Successful");
                        history.push("/dashboard"); // Navigate to the dashboard page after registration
                    }
                } else {
                    console.log('Request failed. Returned status of ' + response.status);
                }
            } catch (error) {
                console.error('Error:', error);
            }
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
        const requiredFields = ['name', 'contact', 'address', 'email', 'password'];
        return requiredFields.every(field => formData[field].trim() !== '');
    }

  return (

    <div>
      <br/>
      <div style={{backgroundColor:"white"}}>

    <center>

        <h1>Registeration Form</h1>
        <br></br>

        <form onSubmit={handleSubmit}>

            <div className='form-group'>
                <label>Name:</label>
                <input className="form-control" type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className='form-group'>
                <label> Contact:</label> 
                <input className="form-control" type="text" name="contact" value={formData.contact} onChange={handleChange} required />
            </div>

            <div className='form-group'>
                <label>Address:</label>
                <input className="form-control" type="text" name="address" value={formData.address} onChange={handleChange} required />
            </div>

            <div className='form-group'>
                <label>Email:</label>
                <input className="form-control" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className='form-group'>
                <label>Password:</label>
                <input className="form-control" type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <br></br>
            <center>
              <Link id='signup-link' onClick={handleSubmit}>Register</Link>
            </center>

        </form>
    </center>
    </div>
    </div>
    
  );
}

export default SignUpForm;
