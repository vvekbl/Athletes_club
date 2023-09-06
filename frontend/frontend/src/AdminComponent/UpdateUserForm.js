import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/index.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function UpdateUserForm(props) {
  const [updatename, setUpdatename] = useState(props.user.name);
  const [updatecontact, setUpdatecontact] = useState(props.user.contact);
  const [updateaddress, setUpdateaddress] = useState(props.user.address);
  const [updaterole, setUpdaterole] = useState(props.user.role);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedUser = {
      name: updatename,
      contact: updatecontact,
      address: updateaddress,
      role: updaterole,
    };

    axios
      .put(`/http://localhost:8080/users/${props.user.user_id}`, updatedUser, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert('User updated');
          history.push('/users');
        } else {
          console.error('Error:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={updatename} onChange={(e) => setUpdatename(e.target.value)} />
      </label>
      <label>
        Contact:
        <input type="text" value={updatecontact} onChange={(e) => setUpdatecontact(e.target.value)} />
      </label>
      <label>
        Address:
        <input type="text" value={updateaddress} onChange={(e) => setUpdateaddress(e.target.value)} />
      </label>
      <label>
        Role:
        <input type="radio" name="role" value="Admin" onChange={(e) => setUpdaterole(e.target.value)} /> Admin
        <input type="radio" name="role" value="User" onChange={(e) => setUpdaterole(e.target.value)} /> User
        <input type="radio" name="role" value="Trainer" onChange={(e) => setUpdaterole(e.target.value)} /> Trainer
      </label>

      <button type="submit">Update User</button>
    </form>
  );
}

export default UpdateUserForm;
