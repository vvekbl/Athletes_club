import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/index.css'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { Navigate } from 'react-router';

function AddTrainer() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    email: '',
    password: ''
  });

  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const xhr = new XMLHttpRequest();
      const url = 'http://localhost:8080/users/saveAsTrainer';
      xhr.open('POST', url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function() {
        if (xhr.status === 200) {
          console.log(xhr.response);
          Navigate("/")
          alert("Trainer Added")
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
    const requiredFields = ['name', 'contact', 'address', 'email', 'password'];
    
    return requiredFields.every(field => formData[field].trim() !== '');
    
  }

  return (

    <center>

        <h1>Registration Form</h1>
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
    
  );
}

export default AddTrainer;
