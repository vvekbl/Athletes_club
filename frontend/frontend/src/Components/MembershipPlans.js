import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function MemberShipPlans() {
  const [membershipPlans, setMembershipPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [updatedPlan, setUpdatedPlan] = useState({
    membershipPlanId: 0,
    planName: "",
    duration: "",
    amount: 0,
  });

  useEffect(() => {
    fetchMembershipPlans();
  }, []);

  const fetchMembershipPlans = async () => {
    try {
      const response = await axios.get("http://localhost:8080/MembershipPlans");
      if (response.status === 200) {
        setMembershipPlans(response.data);
      } else {
        console.error("Error fetching membership plans:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching membership plans:", error);
    }
  };

  const handleDelete = async (membershipPlanId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/MembershipPlans/delete/${membershipPlanId}`);
      if (response.status === 200) {
        fetchMembershipPlans(); // Refresh the membership plans list after deletion
      } else {
        console.error("Error deleting membership plan");
      }
    } catch (error) {
      console.error("Error deleting membership plan:", error);
    }
  };

  const handleUpdate = (membershipPlan) => {
    setSelectedPlan(membershipPlan);
    setUpdatedPlan({
      membershipPlanId: membershipPlan.membershipPlanId,
      planName: membershipPlan.planName,
      duration: membershipPlan.duration,
      amount: membershipPlan.amount,
    });
  };

  const handleUpdateSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/MembershipPlans/update/${selectedPlan.membershipPlanId}`,
        updatedPlan
      );
      if (response.status === 200) {
        fetchMembershipPlans(); // Refresh the membership plans list after update
        setSelectedPlan(null); // Clear selected plan
      } else {
        console.error("Error updating membership plan");
      }
    } catch (error) {
      console.error("Error updating membership plan:", error);
    }
  };

  return (
    <div>
      <br />
      <center>
        <h1>Membership Plans</h1>
      </center>
      <Link to="/membershipPlanForm">Add New Membership Plan</Link>
      <br />
      <br />
      <div className="table-responsive">
        <table className="table table-dark table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">MembershipPlanId</th>
              <th scope="col">MembershipPlan Name</th>
              <th scope="col">Duration</th>
              <th scope="col">Amount</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {membershipPlans.map((membershipPlan) => (
              <tr key={membershipPlan.membershipPlanId}>
                <td>{membershipPlan.membershipPlanId}</td>
                <td>{membershipPlan.planName}</td>
                <td>{membershipPlan.duration}</td>
                <td>{membershipPlan.amount}</td>
                <td>
                  <button
                    onClick={() => handleDelete(membershipPlan.membershipPlanId)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(membershipPlan)}
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

      {/* Update Membership Plan Form */}
      {selectedPlan && (
        <div>
          <h2>Update Membership Plan</h2>
          <div className="form-group">
            <label>Plan Name:</label>
            <input
              type="text"
              className="form-control"
              value={updatedPlan.planName}
              onChange={(e) => setUpdatedPlan({ ...updatedPlan, planName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Duration:</label>
            <input
              type="text"
              className="form-control"
              value={updatedPlan.duration}
              onChange={(e) => setUpdatedPlan({ ...updatedPlan, duration: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Amount:</label>
            <input
              type="text"
              className="form-control"
              value={updatedPlan.amount}
              onChange={(e) => setUpdatedPlan({ ...updatedPlan, amount: e.target.value })}
            />
          </div>
          <button onClick={handleUpdateSubmit} className="btn btn-primary">
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}

export default MemberShipPlans;
