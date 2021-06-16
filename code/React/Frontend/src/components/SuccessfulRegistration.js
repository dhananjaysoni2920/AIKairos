import React from 'react'
import './css/SuccessfulRegistration.css'
import { Link } from 'react-router-dom';


class SuccessfulRegistration extends React.Component{

    render(){
        return(
            <div className="container">

                <div className="myform-div">
                    
                        <div className="logintitle">
                            <h1>Done</h1>
                            <hr id="loginhr" />
                        </div>

                        <div><p>You have been successfully registered.</p></div>
                    
                        <div className="signin-button">
                            <Link to="/">
                            <button >Log In</button>
                            </Link>
                        </div>
                        
                </div>
            </div>
        )
    }

}


export default SuccessfulRegistration
