import React from 'react';
import axios from "axios";
import Router from "./Router"
import {AuthContextProvider} from "./components/context/authcontext"

axios.defaults.withCredentials = true;
class App extends React.Component{


    render(){
        return(
            <AuthContextProvider>
                <Router/>
            </AuthContextProvider>
            
        )
    }
}

export default App
