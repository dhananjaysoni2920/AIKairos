import React from "react"
import "../css/Bookings.css"
function Bookings(){
    return(
        <div className="bookings_main-div">
            <div className="bookings_top-pane">
                <div className="bookings_profile-user">
                    <a href="/dashboard"><button className="bookings_profile-pic"></button></a>
                    <label>Hello, Shivani</label>
                </div>
                <div className="bookings_alarmsettings">
                    <a href="/settings"><button className="bookings_icon-button"><img className="bookings_alarmsettings-icon" src="https://img.icons8.com/carbon-copy/100/000000/settings.png"/></button></a>
                    <button className="bookings_icon-button"><img className="bookings_alarmsettings-icon" src="https://img.icons8.com/wired/64/000000/alarm.png"/></button>
                </div>
            </div>
  
 <div className="container">
    <div className="main">
        <div >
            <h1 className="date" > Select a date</h1>
            <div className="date-picker">
                <div className="selected-date"></div>
        
                <div className="dates">
                    <div className="month">
                        <div className="arrows prev-mth">&lt;</div>
                        <div className="mth"></div>
                        <div className="arrows next-mth">&gt;</div>
                    </div>
        
                    <div className="days"></div>
                </div>
            </div>
        
            <script src="main.js"></script>
        </div>
        <div >
        <h1 className="time"> Select a time</h1>
        <div className="time_box">

        </div>
        </div>
        <div >
            <h1 className="location"> Select a location</h1>
            <div className="location_box">
               
            </div>
        </div>
        <div>
            <h1  className="type"> Select a type </h1>
            <div className="type_box">

            </div>
        </div>
        <button type="button" className="clear_form">Clear form</button>
        <button type="button" className="confirm_booking">Confirm booking</button>
        <button type="button" className="booking_history">booking history</button>
    </div>
    <div className="details">

    </div>
 </div>

        
    </div>
        
    )
}

export default Bookings