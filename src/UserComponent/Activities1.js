import { useState } from "react";
import { useEffect } from "react";

function Activities1() {
    
    var[activities, setActivities] = useState([]);

    useEffect(() => {
        const helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
        if (helper.readyState === 4 && helper.status === 200) {
            const result = JSON.parse(helper.responseText);
            setActivities(result);
        }
        };
        helper.open("GET", "http://localhost:8080/activities");
        helper.send();
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