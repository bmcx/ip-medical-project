import { CalendarContainer } from "react-datepicker"
import CalendarMonth from "./Components/CalenderMonth";
import React from 'react';
import { __RouterContext }  from "react-router";
import 'react-calendar/dist/Calendar.css';


export const PatientHome = () => {
    
    return (
        <div className="ml-96">
            <button className="bg-blue-500 hover:bg-blue-400 rounded-full p-2 m-2">+ Add Appointment</button>
            <CalendarMonth className="w-6 place-itmes-end ml-96">
            
               
            </CalendarMonth>
           
        </div>
    )
}

export default PatientHome
