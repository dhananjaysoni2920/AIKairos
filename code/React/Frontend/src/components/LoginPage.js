
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

        window.location.href = "/dashboard"
      } catch (err) {
        console.error(err);
      }
    }
    
        return (
      
        <div className="container">
            <div className="welcome-div">
                <h1>Welcome, back !</h1>
            </div>

            <div className="form-div">
                <form onSubmit={login}>
                    <div className="logintitle">
                        <h1>Login</h1>
                        <hr id="loginhr"/>
                    </div>

                    <div className="labels-inputs">
                        <div className="input-box">
                            
                            <label>Email</label>
                            <input className="box" 
                            onChange={(e) => setEmail(e.target.value)} 
                            type="email" 
                            placeholder=" ✉️Enter Email Id"
                            value={email}/>
                            
                        </div>

                        <div className="input-box">
                            <label>Password</label>
                            <input className="box" 
                            type="password" 
                            placeholder=" 🔒Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}/>
                        </div>
                    </div>

                    <div><p>Forgot Password?</p></div>

                    <div className="signin-button">
                        <button type="submit">Sign In</button>
                    </div>

                    <hr id="sign-in-up"/>

                    <div className="signup-button">
                        <Link to="/register">
                            <button id="createbutton">Create an Account</button>
                        </Link>
                        
                    </div>

                </form>
            </div>
        </div>
      
    
  );
    }

export default LoginPage;
