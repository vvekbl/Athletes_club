import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ActivityList() {
  const [activities, setActivities] = useState([]);
  const [updateActivity, setUpdateActivity] = useState({
    activity_id: 0,
    activity_name: "",
    description: "",
  });

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = () => {
    fetch("http://localhost:8080/activities")
      .then((response) => response.json())
      .then((data) => setActivities(data))
      .catch((error) => console.error("Error fetching activities:", error));
  };

  const handleDelete = (activityId) => {
    fetch(`http://localhost:8080/activities/delete/${activityId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 200) {
          fetchActivities(); // Refresh the activities list after deletion
        } else {
          console.error("Error deleting activity");
        }
      })
      .catch((error) => console.error("Error deleting activity:", error));
  };

  const handleUpdate = (activity) => {
    setUpdateActivity(activity);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/activities/update/${updateActivity.activity_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateActivity),
    })
      .then((response) => {
        if (response.status === 200) {
          fetchActivities(); // Refresh the activities list after update
          setUpdateActivity({
            activity_id: 0,
            activity_name: "",
            description: "",
          });
        } else {
          console.error("Error updating activity");
        }
      })
      .catch((error) => console.error("Error updating activity:", error));
  };

  return (
    <div>
      <br />
      <center>
        <h1>Activities</h1>
      </center>
      <Link to="/newactivity">Add New Activity</Link>
      <br />
      <br />
      <div className="table-responsive">
        <table className="table table-dark table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ActivityId</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.activity_id}>
                <td>{activity.activity_id}</td>
                <td>{activity.activity_name}</td>
                <td>{activity.description}</td>
                <td>
                  <button
                    onClick={() => handleDelete(activity.activity_id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(activity)}
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
      <h2>Update Activity</h2>
      <form onSubmit={handleUpdateSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="form-control"
            type="text"
            name="activity_name"
            value={updateActivity.activity_name}
            onChange={(e) =>
              setUpdateActivity({
                ...updateActivity,
                activity_name: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control"
            type="text"
            name="description"
            value={updateActivity.description}
            onChange={(e) =>
              setUpdateActivity({
                ...updateActivity,
                description: e.target.value,
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

export default ActivityList;
