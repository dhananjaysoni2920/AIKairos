
import React from "react";
import "../css/Settings.css"
import botLogo from "../Assets/Settings/bot.png"
import axios from "axios";

function Settings(){

    function logOut(){
        axios.get("http://localhost:4000/app/logout")
        
        window.location.reload();
    }

    return(
        <div className="Settings_main-div">
        <div className="Settings_top-pane">
            <div className="Settings_profile-user">
                <a href="/dashboard"><button className="Settings_profile-pic"></button></a>
                <label>Hello, Shivani</label>
            </div>
            <div className="Settings_alarmsettings">
                <button className="Settings_icon-button"><img className="Settings_alarmsettings-icon" src="https://img.icons8.com/carbon-copy/100/000000/settings.png"></img></button>
                <button className="Settings_icon-button"><img className="Settings_alarmsettings-icon" src="https://img.icons8.com/wired/64/000000/alarm.png"></img></button>
            </div>
        </div>
        <div className="Settings_settings-container">
            <div className="Settings_settings-p">
                <p>Help & Support</p>
                <a href="/profilesettings">
                    <p>Profile Settings</p>
                </a>
                <p>Payment</p>
                <a onClick={logOut} href="/">
                    <p>Log Out</p>
                </a>
            </div>
            
            <div className="Settings_white-box">
                <h2 className="Settings_helpbox-heading">Need some Help?</h2>
                <img src={botLogo} className="Settings_helpbox-image" />
                <table className="Settings_help-table">
                    <tr><td>
                        <button className="Settings_help-buttons">Raise a ticket</button>
                    </td></tr>
                    <tr><td>
                        <button className="Settings_help-buttons">FAQs</button>
                    </td></tr>
                    <tr><td>
                        <button className="Settings_help-buttons">Feedback</button>
                    </td></tr>
                </table>
                <div className="Settings_white-box-p">
                    <p>Didn't find what you were looking for?</p>
                    <p>Email us at helpdesk@aikairos.com</p>
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default Settings;