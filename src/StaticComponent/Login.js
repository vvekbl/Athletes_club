import { useState,useEffect } from "react";
import { Link,useHistory } from 'react-router-dom';


function Login() {
    
    var [login,setLogin] = useState({
        email : "",
        password : ""
    })

    const history = useHistory();

    useEffect(( ) => {
      if(sessionStorage.getItem('user-info')) {
        history.push("/add")
      }
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
          const xhr = new XMLHttpRequest();
          const url = 'http://localhost:8080/login';
          xhr.open('POST', url);
          xhr.setRequestHeader('Content-Type','application/json');
          xhr.onload = function() {
            if (xhr.status === 200) {
              console.log(xhr.response);
              const result = JSON.parse(xhr.response);
              if (result.status ==="error"){
                alert("Invalid Credentials")
              }
              if(result.role==="Admin") {
                localStorage.setItem('admin_name',result.name)
                localStorage.setItem('admin_email',result.email)
                localStorage.setItem('admin_contact',result.contact)
                localStorage.setItem('admin_address',result.address)
                localStorage.setItem('admin_role',result.role)
                history.push('/admin')
              }
              else if(result.role==="Trainer") {
                localStorage.setItem('trainer_name',result.name)
                localStorage.setItem('trainer_email',result.email)
                localStorage.setItem('trainer_contact',result.contact)
                localStorage.setItem('trainer_address',result.address)
                localStorage.setItem('trainer_role',result.role)
                history.push('/trainer')
              }
              else if(result.role==="User") {
                localStorage.setItem('user_name',result.name)
                localStorage.setItem('user_email',result.email)
                localStorage.setItem('user_contact',result.contact)
                localStorage.setItem('user_address',result.address)
                localStorage.setItem('user_role',result.role)
                history.push('/user')
               
              }

            } else {
              console.log('Request failed. Returned status of ' + xhr.status);
              alert("Invalid Credentials")
            }
          };
          xhr.send(JSON.stringify(login));
        } else {
          alert('Invalid Credentials');
        }
      };

      const handleChange = (event) => {
        setLogin({
          ...login,
          [event.target.name]: event.target.value
        });
      };
    
      const validateForm = () => {
        const requiredFields = ['email', 'password'];
        return requiredFields.every(field => login[field].trim() !== '');
      }

    
    return  (
      <div > 
       
            <center>
                <h1>Login</h1>
                <br></br>

                <form onSubmit={handleSubmit}>

                    <div className='form-group'>
                        <label>Username</label>
                        <input className="form-control" type="text" name="email" value={login.email} onChange={handleChange} required />
                        <small>Enter your email address</small>
                    </div>

                    <div className='form-group'>
                        <label> Password </label> 
                        <input className="form-control" type="password" name="password" value={login.password} onChange={handleChange} required />
                    </div>

                    <br></br>
                    <center>
                        <Link id='signup-link' onClick={handleSubmit}>Login</Link>
                    </center>

                </form>
            </center>

        </div>
        
    )
}

export default Login