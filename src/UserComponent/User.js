import { BrowserRouter,Route,Switch } from "react-router-dom"
import UserNavbar from "../Navbar/UserNavbar"
import MemberShipPlanDetails from "./MembershipPlanDetails"
import Activities1 from "./Activities1"
import Exercises from "./Exercises"
import WorkoutPlanDetails from "./WorkoutPlanDetails"
import DietPlanDetails from "./DietPlanDetails"
import MemberShip from "../Components/MemberShipForm"
import PaymentForm from "../Components/MakePayment"
import UserProfile from "./UserProfile"

function UserUI() {
    
    return (
        <div>
            <BrowserRouter>
                <UserNavbar/>
                <Switch>
                
                <Route path="/profile" component={UserProfile} />
                <Route path="/membershiPlans" component={MemberShipPlanDetails} />
                <Route path="/dietPlans" component={DietPlanDetails} />
                <Route path="/workoutexercises" component={Exercises} />
                <Route path="/workouts" component={WorkoutPlanDetails} />
                <Route path="/activities" component={Activities1} />
                <Route path="/payForMembership" component={PaymentForm} />
                <Route path="/membershipForm" component={MemberShip} />
                </Switch>
            </BrowserRouter>
            
        </div>
    )

}

export default UserUI