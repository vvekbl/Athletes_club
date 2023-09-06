import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function Users() {
  const [allUsers, setAllUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // Fetch user data from your Java backend using axios
    axios.get("http://localhost:8080/users")
      .then((response) => {
        setAllUsers(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch user data:", error);
      });
  }, []);

  const update = (user) => {
    history.push({
      pathname: "/updateUser",
      state: { user: user },
    });
  };

  const deleteUser = (userId) => {
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
  };

  return (
    <div>
      <br></br>
      <center>
        <h1>User List</h1>
      </center>
      <Link to="/createUser">Add New User</Link>
      <br></br>
      <br></br>
      <div className="table-responsive">
        <table className="table table-dark table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
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
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => update(user)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.user_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
