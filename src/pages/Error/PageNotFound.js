import { Link, useHistory } from "react-router-dom";
import FormInput from "../../common/components/FormInput";

const PageNotFound = () => {
  const history = useHistory();
  return (
    <div class="bg-blue-50">
      <div class="s m-16">       
            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              
              <a href="PageNotFound.js" aria-current="page" class="z-10 bg-blue-300 rounded-lg mx-2  text-indigo-600 hover:bg-blue-500 hover:text-white relative inline-flex items-center px-6 py-2 border text-xl font-medium">
                Personal info
              </a>
              <a href="securityupdate.js" class="bg-blue-300 border-gray-300 text-indigo-600 rounded-lg mx-4 hover:bg-blue-500 hover:text-white relative inline-flex items-center px-10 py-2 border text-xl font-medium">
                Security
              </a>
            </nav>
      </div>

      <div class="my-10 mx-10">
        <label className="">Name : </label>
        <div>
            <select className="h-7 mt-2 mr-1  focus:border-blue-500 
                    focus:ring-blue-300 focus:ring-2 bg-white text-gray-700 border border-gray-300 
                    focus:outline-none rounded-lg  transition-all 
                    ease-out duration-300"  >

              <option value="Rev">Rev.</option>
              <option value="Dr">Dr.</option>
              <option value="Mr">Mr.</option>
              <option value="Master">Master</option>
              <option value="Mrs">Mrs.</option>
              <option value="Miss">Miss.</option>
            </select>
        </div>

        <div class="w-1/2">
            <FormInput placeholder="First Name" className="w-full mx-w-lg bg-blue-200" >
              <div className="flex flex-wrap mx-3 mb6 "></div>
              <input className="flex"> </input>
            </FormInput>
        </div>
     
        <div class="w-1/2">
            <FormInput placeholder="Last Name" className="w-full mx-w-lg ">
              <div className="flex flex-wrap mx-3 mb6"></div>
              <input className="flex"> </input>
            </FormInput>
        </div>
      </div>

      <div class="my-10 w-1/2  mx-10">
        <label className="">Address : </label>
          <FormInput placeholder="Adreess" className=" mx-w-lg">
              <div className="flex flex-wrap mx-3 mb6"></div>
              <input className="flex"> </input>
          </FormInput>
          <FormInput placeholder="Optional 1" className=" mx-w-lg">
              <div className="flex flex-wrap mx-3 mb6"></div>
              <input className="flex"> </input>
          </FormInput>
          <FormInput placeholder="Optional 2" className=" mx-w-lg">
              <div className="flex flex-wrap mx-3 mb6"></div>
              <input className="flex"> </input>
          </FormInput>
      </div>

      <div class="my-10 w-1/2 mx-10">
        <label className="">E-mail address : </label>
          <FormInput placeholder="E-mail address" className="w-full mx-w-lg">
              <div className="flex flex-wrap mx-3 mb6"></div>
              <input className="flex"> </input>
          </FormInput>
      </div>

      <div class="my-10 w-1/2 mx-10">
        <label className="">Contact number : </label>
          <FormInput placeholder="Contact No." className="w-full mx-w-lg">
              <div className="flex flex-wrap mx-3 mb6"></div>
              <input className="flex"> </input>
          </FormInput>
      </div>

      <div class="my-10 w-1/2 mx-10">
        <label className="">Occupation :</label>
          <FormInput placeholder="Occupation" required="ture" className="w-full mx-w-lg">
              <div className="flex flex-wrap mx-3 mb6"></div>
              <input className="flex"> </input>
          </FormInput>
      </div>

      <div class="my-10 w-1/2 mx-10"> 
        <label className="">Gender : </label>
          <FormInput placeholder="Gender" required="ture" className="w-5">
              <div className="flex flex-wrap mx-3 mb6"></div>
              <input className="flex"> </input>
          </FormInput>
      </div>

      <div className="mr-16 my-10 mx-10">
          <div className="flex justify-between items-center">
            <div className="w-1/3">

              <label className="">Date of Birth : </label><input className=" focus:border-blue-500 
              focus:ring-blue-300 focus:ring-2 bg-white text-gray-700 border border-gray-300 
              focus:outline-none rounded-lg py-1 px-4 block w-full transition-all 
              ease-out duration-300" type="date" value="2021.03.03" />

            </div>
          </div> 
      </div>
      <div class="float-right mx-36">
          <a href="DoctorHome.js" aria-current="page" class="z-10 bg-indigo-50 hover:bg-gray-50 hover:bg-blue-500 hover:text-white rounded-lg border-indigo-500 text-indigo-600 relative inline-flex items-center px-10 py-2 border text-sm font-medium">
            Update
          </a>
      </div>
    </div>
  );
};
export default PageNotFound;

