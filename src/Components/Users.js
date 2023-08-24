import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useHistory } from "react-router-dom";



function Users() {
    var [allUsers, setAllUsers] = useState([]);

    // const history = useHistory();

    useEffect(() => {
        const helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
        if (helper.readyState === 4 && helper.status === 200) {
            const result = JSON.parse(helper.responseText);
            setAllUsers(result);
        }
        };
        helper.open("GET", "http://localhost:8080/users");
        helper.send();
    }, []);

    // var update = (user) => {
    //     history.push({
    //       pathname: "/updateUser",
    //       state: { user: user }
    //     });
    // };
            
    // const deleteUser = (userId) => {
    //     if (window.confirm("Are you sure you want to delete this user?")) {
    //       const xhr = new XMLHttpRequest();
    //       xhr.open("DELETE", `http://localhost:8080/users/${userId}`);
    //       xhr.onload = () => {
    //         if (xhr.status === 204) {
    //           // Filter out the deleted user from the allUsers array
    //           const result = JSON.parse(xhr.responseText);
    //           alert(result);
    //           const filteredUsers = allUsers.filter(
    //             (user) => user.user_id !== userId
    //           );
    //           setAllUsers(filteredUsers);
    //         } else {
    //           console.error(`Failed to delete user: ${xhr.status} ${xhr.statusText}`);
    //         }
    //       };
    //       xhr.onerror = () => {
    //         console.error("Failed to delete user");
    //       };
    //       xhr.send();
    //     }
    //   };
      
      

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
                    <th scope="col">UserId</th>
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
                        {/* <td><button type="button" class="btn btn-warning" onClick={() => update(user)}>Update</button></td>
                        <td><button type="button" class="btn btn-danger" onClick={() => deleteUser(user.user_id)}>Delete</button></td> */}
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
    }

export default Users;
