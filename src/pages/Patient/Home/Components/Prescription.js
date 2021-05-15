import React from "react";
import { Link } from "react-router-dom";

export const Prescription = () => {
  return (
    <div className="my-10 mx-8">
      <div className="text-md mb-6 font-bold">Prescription</div>

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
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-400 rounded-full p-2 mt-2 
             text-white ml-24 mb-2"
          >
            Add more
          </button>
        </div>
        <div className="flex flex-row-revers">
          <button> update</button>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
