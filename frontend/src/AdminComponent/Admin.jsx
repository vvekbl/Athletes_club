import AdminNavbar from "../Navbar/AdminNavbar"
import { BrowserRouter,Route,Switch } from "react-router-dom"
import Users from '../Components/Users'
import Members from "../Components/Members"
import Payments from "../Components/Payments"
import SignUpForm from "../StaticComponent/SignUpForm"
import MemberShip from "../Components/MemberShipForm"
import PaymentForm from "../Components/MakePayment"
import MemberShipPlans from "../Components/MembershipPlans"
import MemberShipPlanForm from "../Components/MembershipPlanForm"
import DietPlans from "../Components/DietPlans"
import DietPlanForm from "../Components/DietPlanForm"
import WorkoutExercises from "../Components/WorkoutExercises"
import WorkoutExerciseForm from "../Components/WorkoutExerciseForm"
import WorkoutPlans from "../Components/WorkoutPlans"
import WorkoutPlanForm from "../Components/WorkoutPlanForm"
import Activities from "../Components/Activities"
import ActivityForm from "../Components/ActivityForm"
import UpdateUserForm from "./UpdateUserForm"
import AdminProfile from "./AdminProfile"
import AddTrainer from "./AddTrainer"

function AdminUI() {
    
    return (
        <div>
            <BrowserRouter>
                <AdminNavbar/>
                <Switch>
                <Route  path="/profile" component={AdminProfile}/>
                <Route  path="/users" component={Users}/> 
                <Route path="/createUser" component={SignUpForm} />
                <Route  path="/members" component={Members}/>
                <Route path="/membershipform" component={MemberShip}/>
                <Route  path="/payments" component={Payments}/>
                <Route path="/makepayment" component={PaymentForm} />
                <Route path="/membershiPlans" component={MemberShipPlans} />
                <Route path="/memberShipPlanForm" component={MemberShipPlanForm} />
                <Route path="/dietPlans" component={DietPlans} />
                <Route path="/dietPlanForm" component={DietPlanForm} />
                <Route path="/workoutexercises" component={WorkoutExercises} />
                <Route path="/exerciseForm" component={WorkoutExerciseForm} />
                <Route path="/workouts" component={WorkoutPlans} />
                <Route path="/workoutPlanForm" component={WorkoutPlanForm} />
                <Route path="/activities" component={Activities} />
                <Route path="/newactivity" component={ActivityForm} />
                <Route path="/updateUser" component={UpdateUserForm} />
                <Route path="/addTrain" component={AddTrainer} />
                </Switch>
            </BrowserRouter>
            
        </div>
    )

}

export default AdminUI