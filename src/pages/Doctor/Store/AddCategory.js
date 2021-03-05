import React from "react";


export const AddCategory = () => {
  return (
    <div>
      <div className="rounded-x1 p-8 ">
        <form action="#" method="POST">
          <div>
            <label>Category Name</label>

            <input
              type="text"
              name="categoryname"
              id="categoryname"
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
export default AddCategory;
