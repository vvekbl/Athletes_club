import { useState, useEffect } from "react";
import axios from 'axios';

function Activities1() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/activities")
      .then((response) => {
        if (response.status === 200) {
          const result = response.data;
          setActivities(result);
        }
      })
      .catch((error) => {
        console.error("Error fetching activities:", error);
      });
  }, []);

  return (
    <div>
      <br></br>
      <center>
        <h1>Activities</h1>
      </center>
      <br></br>
      <br></br>
      <div className="table-responsive">
        <table className="table table-dark table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ActivityId</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.activity_id}>
                <td>{activity.activity_id}</td>
                <td>{activity.activity_name}</td>
                <td>{activity.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Activities1;
