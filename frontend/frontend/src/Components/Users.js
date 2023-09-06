import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [allUsers, setAllUsers] = useState([]);
  const [updateUser, setUpdateUser] = useState({
    user_id: 0,
    name: "",
    contact: "",
    address: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("http://localhost:8080/users")
      .then((response) => setAllUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  };

  const handleDelete=(userId)=> {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios.delete(`http://localhost:8080/users/${userId}`)
        .then(() => {
          // Filter out the deleted user from the allUsers array
          const filteredUsers = allUsers.filter((user) => user.user_id !== userId);
          setAllUsers(filteredUsers);
          alert("User deleted successfully");
        })
        .catch((error) => {
          console.error("Failed to delete user:", error);
        });
    }
  }

  const handleUpdate = (user) => {
    setUpdateUser(user);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/users/${updateUser.user_id}`, updateUser, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          fetchUsers();
          setUpdateUser({
            user_id: 0,
            name: "",
            contact: "",
            address: "",
            email: "",
            role: "",
          });
        } else {
          console.error("Error updating user");
        }
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  return (
    <div>
      <br />
      <center>
        <h1>User List</h1>
      </center>
      <Link to="/createUser">Add New User</Link>
      <br />
      <br />
      <div className="table-responsive">
        <table className="table table-dark table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">UserId</th>
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user) => (
              <tr key={user.user_id}>
                <td>{user.user_id}</td>
                <td>{user.name}</td>
                <td>{user.contact}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {/* <button
                    
                    onClick={() => handleDelete(user.user_id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button> */}
                  <button
                    onClick={() => handleUpdate(user)}
                    className="btn btn-warning"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>Update User</h2>
      <form onSubmit={handleUpdateSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={updateUser.name}
            onChange={(e) =>
              setUpdateUser({
                ...updateUser,
                name: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Contact:</label>
          <input
            className="form-control"
            type="text"
            name="contact"
            value={updateUser.contact}
            onChange={(e) =>
              setUpdateUser({
                ...updateUser,
                contact: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            className="form-control"
            type="text"
            name="address"
            value={updateUser.address}
            onChange={(e) =>
              setUpdateUser({
                ...updateUser,
                address: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-control"
            type="text"
            name="email"
            value={updateUser.email}
            onChange={(e) =>
              setUpdateUser({
                ...updateUser,
                email: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Role:</label>
          <input
            className="form-control"
            type="text"
            name="role"
            value={updateUser.role}
            onChange={(e) =>
              setUpdateUser({
                ...updateUser,
                role: e.target.value,
              })
            }
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Update
        </button>
      </form>
    </div>
  );
}

export default Users;
