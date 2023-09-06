import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function AddTrainer() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Client-side validation
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          'http://localhost:8080/users/saveAsTrainer',
          formData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.status === 200) {
          console.log(response.data);
          alert('Trainer Added');
          history.push('/addTrain/');
        } else {
          console.log('Request failed. Returned status of ' + response.status);
        }
      } catch (error) {
        console.error('Error adding trainer:', error);
      }
    } else {
      // Display validation errors
      setErrors(validationErrors);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    const { name, contact, address, email, password } = formData;

    // Regular expression for password validation
    const passwordPattern = /^[A-Za-z0-9@#]+$/;

    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!contact.trim()) {
      errors.contact = 'Contact is required';
    }

    if (!address.trim()) {
      errors.address = 'Address is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password should be at least 6 characters long';
    } else if (!passwordPattern.test(password)) {
      errors.password =
        'Password should contain only alphabets, numbers, "@" or "#"';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                className={`form-control ${
                  errors.name ? 'is-invalid' : errors.name === '' ? 'is-valid' : ''
                }`}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <div className="invalid-feedback">{errors.name}</div>
            </div>

            <div className="form-group">
              <label>Contact:</label>
              <input
                className={`form-control ${
                  errors.contact ? 'is-invalid' : errors.contact === '' ? 'is-valid' : ''
                }`}
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
              <div className="invalid-feedback">{errors.contact}</div>
            </div>

            <div className="form-group">
              <label>Address:</label>
              <input
                className={`form-control ${
                  errors.address ? 'is-invalid' : errors.address === '' ? 'is-valid' : ''
                }`}
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              <div className="invalid-feedback">{errors.address}</div>
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                className={`form-control ${
                  errors.email ? 'is-invalid' : errors.email === '' ? 'is-valid' : ''
                }`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="invalid-feedback">{errors.email}</div>
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                className={`form-control ${
                  errors.password ? 'is-invalid' : errors.password === '' ? 'is-valid' : ''
                }`}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="invalid-feedback">{errors.password}</div>
            </div>

            <div className="text-center">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTrainer;
