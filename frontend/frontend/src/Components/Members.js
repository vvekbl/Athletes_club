import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios

function Members() {
  const [members, setMembers] = useState([]);
  const [updateMember, setUpdateMember] = useState({
    memberId: 0,
    gender: "",
    joinDate: "",
    height: 0,
    weight: 0,
    membershipPlanId: 0,
    activityId: 0,
    workoutPlanId: 0,
    dietPlanId: 0,
  });

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = () => {
    axios
      .get("http://localhost:8080/gymmembers") // Use Axios for GET request
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching members:", error);
      });
  };

  const handleDelete = (memberId) => {
    axios
      .delete(`http://localhost:8080/gymmembers/delete/${memberId}`) // Use Axios for DELETE request
      .then((response) => {
        if (response.status === 200) {
          fetchMembers();
        } else {
          console.error("Error deleting member");
        }
      })
      .catch((error) => {
        console.error("Error deleting member:", error);
      });
  };

  const handleUpdate = (member) => {
    setUpdateMember(member);
  };

  const handleUpdateSubmit = (e) => {
     e.preventDefault();
    axios
      .put(`http://localhost:8080/gymmembers/update/${updateMember.memberId}`, updateMember, {
        headers: {
          "Content-Type": "application/json",
        },
      }) // Use Axios for PUT request
      .then((response) => {
        if (response.status === 200) {
          fetchMembers();
          setUpdateMember({
            memberId: 0,
          
            gender: "",
            joinDate: "",
            height: 0,
            weight: 0,
            membershipPlanId: 0,
            activity_id: 0,
            workoutid: 0,
            dietPlanId: 0,
          });
        } else {
          console.error("Error updating member");
        }
      })
      .catch((error) => {
        console.error("Error updating member:", error);
      });
  };

  return (
    <div>
      <br />
      <center>
        <h1>Gym Members</h1>
      </center>
      <Link to="/membershipform">Add New Member</Link>
      <br />
      <br />
      <div className="table-responsive">
        <table className="table table-dark table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">MemberId</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">joinDate</th>
              <th scope="col">height</th>
              <th scope="col">weight</th>
              <th scope="col">MembershipPlanId</th>
              <th scope="col">ActivityId</th>
              <th scope="col">workoutPlanId</th>
              <th scope="col">DietPlanId</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.memberId}>
                <td>{member.memberId}</td>
                <td>{member.user.name}</td>
                <td>{member.gender}</td>
                <td>{member.joinDate}</td>
                <td>{member.height}</td>
                <td>{member.weight}</td>
                {member.membershipPlan?.membershipPlanId ? (
                  <td>{member.membershipPlan?.membershipPlanId}</td>
                ) : (
                  <td>Not assigned</td>
                )}
                {member.activity?.activity_id ? (
                  <td>{member.activity.activity_id}</td>
                ) : (
                  <td>Not assigned</td>
                )}
                {member.workoutPlan?.workoutid ? (
                  <td>{member.workoutPlan.workoutid}</td>
                ) : (
                  <td>Not assigned</td>
                )}
                {member.dietPlan?.planId ? (
                  <td>{member.dietPlan.planId}</td>
                ) : (
                  <td>Not assigned</td>
                )}
                <td>
                  <button
                    onClick={() => handleDelete(member.memberId)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(member)}
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
      <h2>Update Member</h2>
      <form onSubmit={handleUpdateSubmit}>
        <div className="form-group">
          <label>Gender:</label>
          <input
            className="form-control"
            type="text"
            name="gender"
            value={updateMember.gender}
            onChange={(e) =>
              setUpdateMember({
                ...updateMember,
                gender: e.target.value,
              })
            }
            required
          />
        </div>

        

        <div className="form-group">
          <label>Join Date:</label>
          <input
            className="form-control"
            type="text"
            name="joinDate"
            value={updateMember.joinDate}
            onChange={(e) =>
              setUpdateMember({
                ...updateMember,
                joinDate: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Height:</label>
          <input
            className="form-control"
            type="text"
            name="height"
            value={updateMember.height}
            onChange={(e) =>
              setUpdateMember({
                ...updateMember,
                height: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Weight:</label>
          <input
            className="form-control"
            type="text"
            name="weight"
            value={updateMember.weight}
            onChange={(e) =>
              setUpdateMember({
                ...updateMember,
                weight: e.target.value,
              })
            }
            required
          />
        </div>

        {/* Include fields for MembershipPlanId, ActivityId, WorkoutPlanId, and DietPlanId here */}
        {/* Replace the input fields below with your actual field names */}
        <div className="form-group">
          <label>MembershipPlanId:</label>
          <input
            className="form-control"
            type="text"
            name="membershipPlanId"
            value={updateMember.membershipPlanId}
            onChange={(e) =>
              setUpdateMember({
                ...updateMember,
                membershipPlanId: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>ActivityId:</label>
          <input
            className="form-control"
            type="text"
            name="activityId"
            value={updateMember.activityId}
            onChange={(e) =>
              setUpdateMember({
                ...updateMember,
                activityId: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>WorkoutPlanId:</label>
          <input
            className="form-control"
            type="text"
            name="workoutPlanId"
            value={updateMember.workoutPlanId}
            onChange={(e) =>
              setUpdateMember({
                ...updateMember,
                workoutPlanId: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>DietPlanId:</label>
          <input
            className="form-control"
            type="text"
            name="dietPlanId"
            value={updateMember.dietPlanId}
            onChange={(e) =>
              setUpdateMember({
                ...updateMember,
                dietPlanId: e.target.value,
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

export default Members;
