import React, {useContext} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AuthContext from "./components/context/authcontext";
import dashboard from "./components/dashboard";
import LoginPage from './components/LoginPage';
import ProfileSettings from "./components/ProfileSettings";
import Settings from "./components/Settings";
import SignupPage from './components/SignupPage';
import SuccessfulRegistration from './components/SuccessfulRegistration'

function Router(){

    const {loggedIn} = useContext(AuthContext);
    console.log(loggedIn);
    return(
        <BrowserRouter>

            <Switch>
               
                {loggedIn ===false &&(
                    <> 
                        <Route path="/" component={LoginPage} />
                        <Route exact path="/register" component={SignupPage}/>
                        <Route exact path="/successfulregistration" component={SuccessfulRegistration}/>
                    </>
                )}
                
                {loggedIn === true && (
                    <> 
                        <Route path="/" component={dashboard}/>
                        <Route exact path="/profilesettings" component={ProfileSettings} />
                        <Route exact path="/settings" component={Settings} />
                    </>
                )}
                
            </Switch>
                    
        </BrowserRouter>
    )
}

export default Router;