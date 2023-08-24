import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/index.css'
import { useHistory } from "react-router-dom";

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
      role : updaterole
    };

    const xhr = new XMLHttpRequest();
    const url = `/http://localhost:8080/users/${props.user.user_id}`;
    xhr.open("PUT", url);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
        if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        alert("User updated")
        console.log(data);
        history.push("/users");
    } else {
    console.error("Error:", xhr.statusText);
    }
};

    xhr.onerror = () => {
    console.error("Error:", xhr.statusText);
};

    xhr.send(JSON.stringify(updatedUser));
  }
  

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
        <input type="radio" name="role" value="Admin" onChange={(e) => setUpdaterole(e.target.value)}/> Admin
        <input type="radio" name="role" value="User" onChange={(e) => setUpdaterole(e.target.value)}/> User
        <input type="radio" name="role" value="Trainer" onChange={(e) => setUpdaterole(e.target.value)}/> Trainer
      </label>

      <button type="submit">Update User</button>
    </form>
  );
}




export default UpdateUserForm;
