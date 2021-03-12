import { CalendarContainer } from "react-datepicker"
import CalendarMonth from "./CalenderMonth";
import React from 'react';
import { __RouterContext } from "react-router";
import 'react-calendar/dist/Calendar.css';





export const Appointments = () => {

    return (
        <div className="flex bg-gray-100 ">

            <div className="flex-1 px-4 py-2 
             rounded-lg  ">

                <div className="ml-4">
                    <a href="" className="flex item-center no-underline">
                        <div className="flex-shrink-0">
                            <img className="h-16 w-16 rounded-full border-2 border-white" src="logo192.png"></img>
                        </div>
                    </a>

                    <div className="">User Name
                    <div>User Id
                
                    </div>

                </div>
                </div>
                <table class="border-separate  mt-4">
          <thead>
            <tr>
              <th className="border  ">Medicine</th>
              <th className="border ">Before meal</th>
              <th className="border ">After Meal</th>
              <th className="border">Dosage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border w-1/5"><input className="w-96" type="text"></input></td>
              <td className="border w-20"><input className="ml-12" type="checkbox" ></input></td>
              <td className="border w-20"><input className="ml-12" type="checkbox"></input></td>
              <td className="border w-px"><select className="ml-12">
                <option>1</option>
                <option>2</option>
              </select></td>
            </tr>
            <tr>
              <td className="border w-96"><input className="w-96" type="text"></input></td>
              <td className="border"><input className="ml-12" type="checkbox" ></input></td>
              <td className="border"><input className="ml-12" type="checkbox"></input></td>
              <td className="border w-24 ml-4"><select className="ml-12">
                <option>1</option>
                <option >2</option>
              </select></td>
            </tr>
            <tr>
              <td className="border w-96"><input className="w-96" type="text"></input></td>
              <td className="border"><input className="ml-12" type="checkbox" ></input></td>
              <td className="border"><input className="ml-12" type="checkbox"></input></td>
              <td className="border "><select className="ml-12">
                <option >1</option>
                <option >2</option>
              </select></td>
            </tr>
          </tbody>
        </table>
               


            </div>



<div >
            <button className="bg-blue-500 hover:bg-blue-400 rounded-full p-2 mt-2 
             text-white ml-24 mb-2" >+Add Appointment</button>
            <div className="flex flex-row justify-end   
              rounded-lg  hover:bg-blue-600">
                 <div>
                   <div>
                       <CalendarMonth></CalendarMonth>
                   </div>
                </div>


              </div>
            
                </div>



            </div>
        


    )
}

export default Appointments;
