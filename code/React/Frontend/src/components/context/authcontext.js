import React, {useState, createContext, useEffect } from "react";
import axios from "axios";


const AuthContext = createContext();

function AuthContextProvider(props){

    const [loggedIn, setLoggedIn] = useState(undefined); //Default value will always be undefined

    async function getLoggedIn(){
        const loggedInRes = await axios.get("http://localhost:4000/app/loggedIn")
        setLoggedIn(loggedInRes.data);
    }

    useEffect(() => {
        getLoggedIn();
    }, []);

    return <AuthContext.Provider value = {{loggedIn, getLoggedIn}}>

        {props.children}
    </AuthContext.Provider>;
}

export {AuthContextProvider};
export default AuthContext;