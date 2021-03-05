import React from "react";


export const AddMedicine = () => {
  return (
    <div>
      <div className="rounded-x1 p-8 ">
        <form action="#" method="POST">
          <div>
            <label>Medicine Name</label>

            <input
              type="text"
              name="medicinename"
              id="medicinename"
              className=" ml-5 mt-5 rounded-lg border border-gray-300"
            ></input>
          </div>

          <div>
              <label>
                  Category
              </label>
              <select className="h-7 mt-5 ml-5  focus:border-blue-500 
                    focus:ring-blue-300 focus:ring-2 bg-white text-gray-700 border border-gray-300 
                    focus:outline-none rounded-lg  transition-all 
                    ease-out duration-300"  >

              <option value="xyz" id="xyz">XYZ</option>
              <option value="allergenics" id="allergenics">Allergenics</option>
            </select>
          </div>

          <div>
            <label>Quantity</label>

            <input
              type="number"
              name="quantity"
              id="quantity"
              className=" ml-5 mt-5 rounded-lg border border-gray-300"
            ></input>
          </div>

          <div>
            <label>Price Per.Unit</label>

            <input
              type="number"
              name="price"
              id="price"
              className=" ml-5 mt-5 rounded-lg border border-gray-300"
            ></input>
          </div>

          <div>
            <label>Discription</label>

            <input
              type="text"
              name="discription"
              id="discription"
              className=" ml-5 mt-5 rounded-lg border border-gray-300"
            ></input>
          </div>
          <div className=" py-5">
            <button type="submit" className="cursor-pointer hover:bg-blue-400 bg-blue-500  py-1.5 px-1 text-white font-bold rounded-lg select-none">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddMedicine;
