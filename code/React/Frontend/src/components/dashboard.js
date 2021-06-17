import axios from "axios";
import React from "react";

function dashboard(){

    function logOut(){
        axios.get("http://localhost:4000/app/logout")
        window.location.reload();
    }

    return(
        <div>
            <h1>You are logged in</h1>
            <button onClick = {logOut}>Logout</button>
        </div>
    )
}

export default dashboard;