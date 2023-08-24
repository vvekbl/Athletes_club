import { useState,useEffect } from "react";


function Exercises() {
    
    var[workoutExercises, setWorkoutExercises] = useState([]);

    useEffect(() => {
        const helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
        if (helper.readyState === 4 && helper.status === 200) {
            const result = JSON.parse(helper.responseText);
            setWorkoutExercises(result);
        }
        };
        helper.open("GET", "http://localhost:8080/exercises");
        helper.send();
    }, []);

    return (
        <div>
            <br></br>
            <center>
                <h1>Workout Exercises</h1>
            </center>
            <br></br>
            <br></br>
            <div className="table-responsive">
                <table className="table table-dark table-striped">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Exercise Id</th>
                    <th scope="col">Exercise Name</th>
                    <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {workoutExercises.map((workoutExercise) => (
                    <tr key={workoutExercise.workout_exercise_id}>
                        <td>{workoutExercise.workout_exercise_id}</td>
                        <td>{workoutExercise.workout_exercise_name}</td>
                        <td>{workoutExercise.description}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );

}

export default Exercises