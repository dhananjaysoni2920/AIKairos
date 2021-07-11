import React, {useContext} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AuthContext from "./components/context/authcontext";
import Bookings from "./components/webpages/Bookings";
import Dashboard from "./components/webpages/Dashboard";
import Insights from "./components/webpages/insights";
import LoginPage from './components/webpages/LoginPage';
import ProfileSettings from "./components/webpages/ProfileSettings";
import Settings from "./components/webpages/Settings";
import SignupPage from './components/webpages/SignupPage';
import SuccessfulRegistration from './components/webpages/SuccessfulRegistration'

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
                        <Route exact path="/dashboard" component={Dashboard}/>
                        <Route exact path="/login" component={Dashboard}/>
                        <Route exact path="/" component={Dashboard}/>
                        <Route exact path="/register" component={Dashboard}/>
                        <Route exact path="/profilesettings" component={ProfileSettings} />
                        <Route exact path="/settings" component={Settings} />
                        <Route exact path="/insights" component={Insights} />
                        <Route exact path="/bookings" component={Bookings}/>
                    </>
                )}
                
            </Switch>
                    
        </BrowserRouter>
    )
}

export default Router;