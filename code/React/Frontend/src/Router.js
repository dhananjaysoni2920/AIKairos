import React, {useContext} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AuthContext from "./components/context/authcontext";
import dashboard from "./components/dashboard";
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import SuccessfulRegistration from './components/SuccessfulRegistration'

function Router(){

    const {loggedIn} = useContext(AuthContext);
    console.log(loggedIn);
    return(
        <BrowserRouter>

            <Switch>
                <Route exact path="/register" component={SignupPage}/>
                <Route exact path="/successfulregistration" component={SuccessfulRegistration}/>
                <Route exact path="/" component={LoginPage} />
                {loggedIn ===false &&(
                    <> 
                        <Route exact path="/dashboard" component={LoginPage} />
                    </>
                )}
                
                {loggedIn === true && (
                    <> 
                        <Route exact path="/dashboard" component={dashboard} />
                    </>
                )}
                
            </Switch>
                    
        </BrowserRouter>
    )
}

export default Router;