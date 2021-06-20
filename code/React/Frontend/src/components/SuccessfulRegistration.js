import React from 'react'
import './css/SuccessfulRegistration.css'
import { Link } from 'react-router-dom';


class SuccessfulRegistration extends React.Component{

    render(){
        return(
            <div className="SuccessfulRegistration_container">

                <div className="SuccessfulRegistration_myform-div">
                    
                        <div className="SuccessfulRegistration_logintitle">
                            <h1>Done</h1>
                            <hr id="loginhr" />
                        </div>

                        <div><p>You have been successfully registered.</p></div>
                    
                        <div className="SuccessfulRegistration_signin-button">
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
