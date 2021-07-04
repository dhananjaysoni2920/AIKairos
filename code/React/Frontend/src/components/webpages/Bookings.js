import React from "react"
import "../css/Bookings.css"
function Bookings(){
    return(
        <div>
            <div class="container">
                <div class="main">
                    <div>
                        <h1 class="date" > Select a date</h1>
                        <div class="date-picker">
                            <div class="selected-date"></div>
                    
                            <div class="dates">
                                <div class="month">
                                    <div class="arrows prev-mth">&lt;</div>
                                    <div class="mth"></div>
                                    <div class="arrows next-mth">&gt;</div>
                                </div>
                    
                                <div class="days"></div>
                            </div>
                        </div>
                        </div>
        </div>
        </div>
        </div>
    )
}

export default Bookings