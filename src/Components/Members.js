import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Members() {

    var[members, setMembers] = useState([]);

    useEffect(() => {
        const helper = new XMLHttpRequest();
            helper.onreadystatechange = () => {
                if (helper.readyState === 4 && helper.status === 200) {
                    const result = JSON.parse(helper.responseText);
                    setMembers(result);
                }
            };
            helper.open("GET", "http://localhost:8080/gymmembers");
            helper.send();
    }, []);
        
            

    return (
        <div>
            <br></br>
            <center>
                <h1>Gym Members</h1>
            </center>
                <Link to="/membershipform">Add New Member</Link>
            <br></br>
            <br></br>
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
                        ):(
                            <td>Not assigned</td>
                        )}
                        {member.activity?.activity_id ? (
                            <td>{member.activity.activity_id}</td>
                        ):(
                            <td>Not assigned</td>
                        )}
                        {member.workoutPlan?.workoutid ? (
                            <td>{member.workoutPlan.workoutid}</td>
                        ):(
                            <td>Not assigned</td>
                        )}
                        {member.dietPlan?.plainId ? (
                            <td>{member.dietPlan.plainId}</td>
                        ):(
                            <td>Not assigned</td>
                        )}
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default Members;