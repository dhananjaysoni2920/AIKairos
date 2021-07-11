import React from "react"
import "../css/insights.css"

function Insights(){

    return(
        <div>
            <div className="insights_App">
            <div className="insights_top-pane">
                <div className="insights_profile-user">
                <a href="/dashboard"><button className="insights_profile-pic"></button></a>
                    <label>Hello, Shivani</label>
                </div>
                <div className="insights_alarmsettings">
                    <a href="/settings"><button className="insights_icon-button"><img className="insights_alarmsettings-icon" src="https://img.icons8.com/carbon-copy/100/000000/settings.png"></img></button></a>
                    <button className="insights_icon-button"><img className="insights_alarmsettings-icon" src="https://img.icons8.com/wired/64/000000/alarm.png"></img></button>
                </div>
            </div>
                <div className="insights_container" >
                    <div className="insights_footfall">
                        <img src="/images/footfallpie.svg" className="insights_footpie" />
                        <img src="/images/time.svg" className="insights_timepie" />
                        <img src="/images/ingraph.png" className="insights_graph" />
                        <img src="/images/footfall.svg" className="insights_footfallimg" />
                        <img src="/images/impressions.svg" className="insights_impressionsimg" />
                        <img src="/images/devices.svg" className="insights_devicesimg" />
                        </div>
                </div>
            </div>
        </div>
    )
}


export default Insights;
