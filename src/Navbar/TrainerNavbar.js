
import { Link} from 'react-router-dom';

function TrainerNavbar() {



    return (
            
            <div className="trainNav">
                <br></br>
                <nav>
                    <ul>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/members">Members</Link>
                        </li>
                        <li>
                            <Link to='/activities'>Activities</Link>
                        </li>
                        <li>
                            <Link to='/membershiPlans'>MembershipPlans</Link>
                        </li>
                        <li>
                            <Link to='/dietplans'>DietPlans</Link>
                        </li>
                        <li>
                            <Link to='/workoutexercises'>Exercises</Link>
                        </li>
                        <li>
                            <Link to='/workouts'>Workouts</Link>
                        </li>
                        <li>
                            <Link to='/assignWorkoutPlan'>AssignWorkoutPlan</Link>
                        </li>
                        <li>
                            <Link to='/assignDietPlan'>AssignDietPlan</Link>
                        </li>
                        <li>
                            <Link to="#"></Link>
                        </li>
                    </ul>
                </nav>
            </div>
    ) 
}

export default TrainerNavbar;