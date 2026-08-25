import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './StaticComponent/Home';
import Contact from './StaticComponent/Contact';
import About from './StaticComponent/About';
import Blogs from './StaticComponent/Blogs';
import Login from './StaticComponent/Login';
import Navbar from './Navbar/Navbar';
import AdminUI from './AdminComponent/Admin';
import SignUpForm from './StaticComponent/SignUpForm';
import TrainerUI from './TrainerComponent/Trainer';
import UserUI from './UserComponent/User';
import Gallery from './StaticComponent/Gallery';

function App() {
  return (

        
        <BrowserRouter> 
        
        <Navbar/>
        
        
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/blogs" component={Blogs}/>
          <Route path="/login" component={Login}/>
          <Route path="/admin" component={AdminUI}/>
          <Route path="/trainer" component={TrainerUI}/>
          <Route path="/user" component={UserUI}/>
          <Route path="/createuser" component={SignUpForm}/>
          

        </Switch>
        
        </BrowserRouter>
         
        
  );
}

export default App;
