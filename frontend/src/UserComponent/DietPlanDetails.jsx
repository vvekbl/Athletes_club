import { useState,useEffect } from "react";

function DietPlanDetails() {
    
    var[dietPlans, setDietPlans] = useState([]);

    useEffect(() => {
        const helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
        if (helper.readyState === 4 && helper.status === 200) {
            const result = JSON.parse(helper.responseText);
            setDietPlans(result);
        }
        };
        helper.open("GET", "http://localhost:8080/dietplans");
        helper.send();
    }, []);

    return (
        <div>
            <br></br>
            <center>
                <h1>DietPlans</h1>
            </center>
            <br></br>
            <br></br>
            <div className="table-responsive">
                <table className="table table-dark table-striped">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Plan Id</th>
                    <th scope="col">Plan Name</th>
                    <th scope="col">Breakfast</th>
                    <th scope="col">Launch</th>
                    <th scope="col">PreWorkout</th>
                    <th scope="col">Dinner</th>
                    </tr>
                </thead>
                <tbody>
                    {dietPlans.map((dietPlan) => (
                    <tr key={dietPlan.planId}>
                        <td>{dietPlan.planId}</td>
                        <td>{dietPlan.planname}</td>
                        <td>{dietPlan.breakfast}</td>
                        <td>{dietPlan.lunch}</td>
                        <td>{dietPlan.preworkout}</td>
                        <td>{dietPlan.dinner}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
}


export default DietPlanDetails;