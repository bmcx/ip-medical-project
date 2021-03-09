import { CalendarContainer } from "react-datepicker"
import CalendarMonth from "./CalenderMonth";
import React from 'react';
import { __RouterContext } from "react-router";
import 'react-calendar/dist/Calendar.css';




export const Appointments = () => {

    return (

        <div className="ml-2 bg-color-gray ">
            <div className="flex rounded-x1 p-2 ml-2">
                <div className="m-5  ml-4 sm:flex ">
                    <a href="" className="flex item-center no-underline">
                        <div className="flex-shrink-0">
                            <img className="h-16 w-16 rounded-full border-2 border-white" src="logo192.png"></img>
                        </div>
                    </a>

                </div>


            </div>
            <div className="ml-6">User Name
                    <div>User Id

                    </div>
            </div>
            <div className="ml-14 mt-6">Current Prescription
            <table>
                <tr></tr>
            </table>
            </div>
            <div className="flex flex-row justify-end mr-20">

                <button className="bg-blue-500 hover:bg-blue-400 rounded-full p-2  text-white ">
                    + Add Appointment</button>
            </div>

            <div className="flex flex-row justify-end  ">


                <CalendarMonth >
                    <CalendarContainer></CalendarContainer>


                </CalendarMonth>
            </div>




        </div>

    )
}

export default Appointments;
