import React from "react";
import { Link, Switch } from "react-router-dom";
import { Route, __RouterContext } from "react-router";
import FormInputControlled from "../../../common/components/FormInputControlled";
import { useState } from "react";
import { showAuthModal } from "../../../state/auth/authActions";
import Category from "./Category";
import AddMedicine from "./AddMedicine";

export const Medicine = ({ match: { url } }) => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <div className="px-10 py-10 absolute w-full flex flex-row justify-between space-x-4 items-center  h-12">
        <div className="w-64 mx-1">
          <FormInputControlled
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Medicine"
          />
        </div>
        <div className="px-20 py-10 text-gray-800 relative md:flex justify-between items-center text-center md:text-left">
          <div
            onClick={showAuthModal}
            className=" cursor-pointer hover:bg-blue-400 bg-blue-500  py-1.5 px-5 text-white font-bold rounded-lg select-none"
          >
            <Link to={`${url}/addmedicine`} className="ml-10">
              Add Medicine
            </Link>
          </div>
        </div>
      </div>

      <div className="px-10 py-20 flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <h3 className="px-2">{Category.value}</h3>
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price Per.Unit
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  <div categoryID="xyz">
                    <tr >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Grastek
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              4250
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              2.50
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          {" "}
                          Delete
                        </a>
                      </td>
                    </tr>
                    <tr >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium  text-gray-900">
                              Odactra
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium  text-gray-900">
                              5000
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium  text-gray-900">
                              10.25
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          {" "}
                          Delete
                        </a>
                      </td>
                    </tr>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route path={`${url}/addmedicine`} component={AddMedicine} />
        </Switch>
    </div>
  );
};
export default Medicine;
