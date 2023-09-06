import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/SignUpForm.css';
import axios from 'axios';

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Client-side validation
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:8080/users/saveUser', formData);
        const result = response.data;

        if (response.status === 200) {
          if (result.status === 'error') {
            alert('Email is already registered. Try with a different email.');
          } else {
            console.log(result);
            alert('Registration Successful');
            history.push('/login'); // Navigate to the dashboard page after registration
          }
        } else {
          console.log('Request failed. Returned status of ' + response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      // Display validation errors
      setErrors(validationErrors);
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
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^[A-Za-z0-9@#]+$/;
    
    const errors = {};

    if (!requiredFields.every((field) => formData[field].trim() !== '')) {
      errors.required = 'Please fill in all required fields';
    }

    if (formData.contact.trim() !== '' && formData.contact.length !== 10) {
      errors.contact = 'Contact must be 10 digits long';
    }

    if (!emailPattern.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (formData.password.length < 6 || !passwordPattern.test(formData.password)) {
      errors.password =
        'Password should be at least 6 characters long and contain only alphabets, numbers, "@" or "#"';
    }

    return errors;
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Name:</label>
              <input className={`form-control ${errors.name ? 'is-invalid' : ''}`} type='text' name='name' value={formData.name} onChange={handleChange} />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className='form-group'>
              <label>Contact:</label>
              <input className={`form-control ${errors.contact ? 'is-invalid' : ''}`} type='text' name='contact' value={formData.contact} onChange={handleChange} />
              {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}
            </div>

            <div className='form-group'>
              <label>Address:</label>
              <input className={`form-control ${errors.address ? 'is-invalid' : ''}`} type='text' name='address' value={formData.address} onChange={handleChange} />
              {errors.address && <div className="invalid-feedback">{errors.address}</div>}
            </div>

            <div className='form-group'>
              <label>Email:</label>
              <input className={`form-control ${errors.email ? 'is-invalid' : ''}`} type='email' name='email' value={formData.email} onChange={handleChange} />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className='form-group'>
              <label>Password:</label>
              <input className={`form-control ${errors.password ? 'is-invalid' : ''}`} type='password' name='password' value={formData.password} onChange={handleChange} />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="text-center">
              <Link id='signup-link' onClick={handleSubmit}>Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;