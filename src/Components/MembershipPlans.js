import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function MemberShipPlans() {
    
    var[membershipPlans, setMembershipPlans] = useState([]);

    useEffect(() => {
        const helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
        if (helper.readyState === 4 && helper.status === 200) {
            const result = JSON.parse(helper.responseText);
            setMembershipPlans(result);
        }
        };
        helper.open("GET", "http://localhost:8080/MembershipPlans");
        helper.send();
    }, []);

    return (
        <div>
            <br></br>
            <center>
                <h1>MemberShipPlans</h1>
            </center>
                <Link to="/membershipPlanForm">Add New MemberShipPlan</Link>
            <br></br>
            <br></br>
            <div className="table-responsive">
                <table className="table table-dark table-striped">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">MemberShipPlanId</th>
                    <th scope="col">MemberShipPlan Name</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {membershipPlans.map((membershipPlan) => (
                    <tr key={membershipPlan.membershipPlanId}>
                        <td>{membershipPlan.membershipPlanId}</td>
                        <td>{membershipPlan.planName}</td>
                        <td>{membershipPlan.duration}</td>
                        <td>{membershipPlan.amount}</td>  
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );

}

export default MemberShipPlans