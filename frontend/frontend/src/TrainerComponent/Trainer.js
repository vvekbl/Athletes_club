import { BrowserRouter,Route,Switch } from "react-router-dom"
// import Members from "../Components/Members"
import TrainMembers from "../Components/TrainMembers"
import MemberShip from "../Components/MemberShipForm"
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
import TrainerNavbar from "../Navbar/TrainerNavbar"
import TrainerProfile from "./TrainerProfile"
import AssignWorkoutPlan from "./AssignWorkoutPlan"
import AssignDietPlan from "./AssignDietPlan"



function TrainerUI() {
    
    return (
        <div>
            <BrowserRouter>
                <TrainerNavbar/>
                <Switch>
                <Route  path="/assignWorkoutPlan" component={AssignWorkoutPlan}/>
                <Route  path="/assignDietPlan" component={AssignDietPlan}/>
                <Route  path="/profile" component={TrainerProfile}/>
                {/* <Route  path="/members" component={Members}/> */}
                <Route  path="/trainmembers" component={TrainMembers}/>
                <Route path="/membershipform" component={MemberShip}/>
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
                </Switch>
            </BrowserRouter>
            
        </div>
    )

}

export default TrainerUI