
import './css/LoginPage.css';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import axios from 'axios';


function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    async function login(e) {
      e.preventDefault();
  
      try {
        const loginData = {
          email,
          password,
        };
  
        
        await axios.post(
          "http://localhost:4000/app/login",
          loginData
          
        );

        window.location.href = "/Settings"
      } catch (err) {
        console.error(err);
      }
    }
    
        return (
      
        <div id="LoginPage_loginpage">
            <div className="LoginPage_container">
            <div className="LoginPage_welcome-div">
                <h1>Welcome, back !</h1>
            </div>

            <div className="LoginPage_form-div">
                <form onSubmit={login}>
                    <div className="LoginPage_logintitle">
                        <h1>Login</h1>
                        <hr id="LoginPage_loginhr"/>
                    </div>

                    <div className="LoginPage_labels-inputs">
                        <div className="LoginPage_input-box">
                            
                            <label>Email</label>
                            <input className="LoginPage_box" 
                            onChange={(e) => setEmail(e.target.value)} 
                            type="email" 
                            placeholder=" ✉️Enter Email Id"
                            value={email}/>
                            
                        </div>

                        <div className="LoginPage_input-box">
                            <label>Password</label>
                            <input className="LoginPage_box" 
                            type="password" 
                            placeholder=" 🔒Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}/>
                        </div>
                    </div>

                    <div><p>Forgot Password?</p></div>

                    <div className="LoginPage_signin-button">
                        <button type="submit">Sign In</button>
                    </div>

                    <hr id="LoginPage_sign-in-up"/>

                    <div className="LoginPage_signup-button">
                        <Link to="/register">
                            <button id="LoginPage_createbutton">Create an Account</button>
                        </Link>
                        
                    </div>

                </form>
            </div>
        </div>
        </div>
      
    
  );
    }

export default LoginPage;
