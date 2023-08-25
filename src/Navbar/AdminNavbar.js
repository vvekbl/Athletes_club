
import { Link} from 'react-router-dom';
import '../CSS/Navbar.css'
function AdminNavbar() {


    return (
            
            <div className="adminNav">
                
                
                <nav>
                    
                    <ul>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/members">Members</Link>
                        </li>
                        <li>
                            <Link to="/payments">Payments</Link>
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
                            <Link to='/addTrain'>Add_Trainer</Link>
                        </li>
                        <li>
                            <Link to="#"></Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
            
    ) 
}

export default AdminNavbar;