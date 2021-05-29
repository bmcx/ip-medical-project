import { updateLocale } from "moment";
import React from "react";
import {Router,__RouterContext} from "react-router";
import { Link } from "react-router-dom";
import Prescription from "../../../Doctor/Prescription/Prescription"




export const Prescription_p = () => {
 

 return (  
     <div className="my-10 mx-8">
       <Prescription/>
    {/*  <div className="text-md mb-6 font-bold"> <Prescription/> </div>

     

      <div className="flex flex-col">
        <table class="border-separate mt-4 ">
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
              <td className="border w-1/5">
                <input className="w-96" type="text"></input>
              </td>
              <td className="border w-20">
                <input className=" ml-12" type="checkbox"></input>
              </td>
              <td className="border w-20">
                <input className="ml-12 " type="checkbox"></input>
              </td>
              <td className="border w-px">
                <select className="ml-12">
                  <option>1</option>
                  <option>2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="border w-96">
                <input className="w-96" type="text"></input>
              </td>
              <td className="border">
                <input className="ml-12" type="checkbox"></input>
              </td>
              <td className="border">
                <input className="ml-12" type="checkbox"></input>
              </td>
              <td className="border w-24 ml-4">
                <select className="ml-12">
                  <option>1</option>
                  <option>2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="border w-96">
                <input className="w-96" type="text"></input>
              </td>
              <td className="border">
                <input className="ml-12" type="checkbox"></input>
              </td>
              <td className="border">
                <input className="ml-12" type="checkbox"></input>
              </td>
              <td className="border ">
                <select className="ml-12">
                  <option>1</option>
                  <option>2</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>{" "}
       
 </div>*/}
 </div>
  );
};

export default Prescription_p;
