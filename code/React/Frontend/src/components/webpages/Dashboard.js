import axios from "axios";
import React from "react";
import "../css/dashboard.css"

function Dashboard(){

    

    return(
        <div className="dashboard_main-div">
            <div className="dashboard_top-pane">
                <div className="dashboard_profile-user">
                    <button className="dashboard_profile-pic"></button>
                    <label>Hello, Shivani</label>
                </div>
                <div className="dashboard_alarmsettings">
                    <a href="/settings"><button className="dashboard_icon-button"><img className="dashboard_alarmsettings-icon" src="https://img.icons8.com/carbon-copy/100/000000/settings.png"></img></button></a>
                    <button className="dashboard_icon-button"><img className="dashboard_alarmsettings-icon" src="https://img.icons8.com/wired/64/000000/alarm.png"></img></button>
                </div>
            </div>
            
            <div class="left" height="545pxs">
                <a href="/insights" class="btn-insights"><img src="images/insignts.svg" alt="" height="150px" width="200px"/></a>
                <a href="/bookings" class="btn-bookings"><img src="images/makeads.svg" alt="" height="150px" width="200px"/></a>
                <a href="#" class="btn-graph"><img src="images/graphgroup.svg" alt="" height="230px" width="460px"/></a>
                <a href="#" class="day"><img src="images/Daily.svg" height="22.498px"/></a>
                <a href="#" class="week"><img src="images/week.svg" height="22.498px"/></a>
                <a href="#" class="month"><img src="images/Month.svg" height="22.498px"/></a>
            </div>

            <div class="right">
                <p class="map"><img src="images/map.svg" alt="map" height="657px" width="500px"/></p>
                <a href="#" class="btn-locations"><img src="images/Group1.svg" alt="tag" width="180px"/></a>
            </div>
            
        </div>
    )
}

export default Dashboard;