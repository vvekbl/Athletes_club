import { useState,useEffect } from "react";



function WorkoutPlanDetails() {
    
    var[workoutPlans, setWorkoutPlans] = useState([]);

    useEffect(() => {
        const helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
        if (helper.readyState === 4 && helper.status === 200) {
            const result = JSON.parse(helper.responseText);
            setWorkoutPlans(result);
        }
        };
        helper.open("GET", "http://localhost:8080/workouts");
        helper.send();
    }, []);

    return (
        <div>
            <br></br>
            <center>
                <h1>Workout Plans</h1>
            </center>
            <br></br>
            <br></br>
            <div className="table-responsive">
                <table className="table table-dark table-striped">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">WorkoutPlan Id</th>
                    <th scope="col">Workout Name</th>
                    <th scope="col">Set1</th>
                    <th scope="col">Set2</th>
                    <th scope="col">Set3</th>
                    </tr>
                </thead>
                <tbody>
                    {workoutPlans.map((workoutPlan) => (
                    <tr key={workoutPlan.workoutid}>
                        <td>{workoutPlan.workoutid}</td>
                        <td>{workoutPlan.workoutname}</td>
                        <td>{workoutPlan.set1}</td>
                        <td>{workoutPlan.set2}</td>
                        <td>{workoutPlan.set3}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );

}

export default WorkoutPlanDetails;