import FormInput from "../../common/components/FormInput"


const Profile = () => {
  return (
    <div className="ml-10 mt-5"> Edit Profile
      <div className="flex rounded-x1 p-8 ml-20">
        <div className="m-5 mt-4 ml-10 sm:flex ">
          <a href="" className="flex item-center no-underline">
            <div className="flex-shrink-0">
              <img className="h-28 w-28 rounded-full border-2 border-white" src="logo192.png"></img>
            </div>
          </a>
        </div>


        <div className="m-10 ml-20">
          <div className="flex justify-between items-center">
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
            <div className="w-full mr-1">

              <FormInput placeholder="First Name" className="w-full mx-w-lg">
                <div className="flex flex-wrap mx-3 mb6"></div>
                <input className="flex"> </input>


              </FormInput>
            </div>
            <div className="w-full">
              <FormInput placeholder="Surname" className="w-full mx-w-lg ">
                <div className="flex flex-wrap mx-3 mb6"></div>
                <input className="flex"> </input>
              </FormInput>
            </div>

          </div>
          <div>
            <FormInput placeholder="Adreess" className=" mx-w-lg">
              <div className="flex flex-wrap mx-3 mb6"></div>
              <input className="flex"> </input>

            </FormInput>
            <div> <FormInput placeholder="E-mail" className="w-full mx-w-lg">
              <div className="flex flex-wrap mx-3 mb6"></div>
              <input className="flex"> </input>


            </FormInput>
              <FormInput placeholder="Contact Number" className="w-full mx-w-lg">
                <div className="flex flex-wrap mx-3 mb6"></div>
                <input className="flex"> </input>


              </FormInput>

              <FormInput placeholder="Occupation" required="ture" className="w-full mx-w-lg">
                <div className="flex flex-wrap mx-3 mb6"></div>
                <input className="flex"> </input>


              </FormInput>

             
              <div className="  mr-96">
                <div className="flex justify-between items-center">
                  <div className="mr-2">
                    <FormInput placeholder="Height" required="ture" className="w-5">
                      <div className="flex flex-wrap mx-3 mb6"></div>
                      <input className="flex"> </input>
                    </FormInput>
                  </div>
                  <div>
                    <FormInput placeholder="Weight" required="ture" className="w-5">
                      <div className="flex flex-wrap mx-3 mb6"></div>
                      <input className="flex"> </input>
                    </FormInput>
                  </div>
                </div>
              </div>
              <div className="w-24">
                <FormInput placeholder="Gender" required="ture" className="w-5">
                  <div className="flex flex-wrap mx-3 mb6"></div>
                  <input className="flex"> </input>

              

                </FormInput>
              </div>
              <div className="mr-16">
                <div className="flex justify-between items-center">
                  <div className="">

                    <label className="">Date of Birth : </label><input className=" focus:border-blue-500 
                    focus:ring-blue-300 focus:ring-2 bg-white text-gray-700 border border-gray-300 
                    focus:outline-none rounded-lg py-1 px-4 block w-full transition-all 
                    ease-out duration-300" type="date" value="2021.03.03" />

                  </div>
                </div>
              </div>




            </div>
          </div>


        </div>
      </div>
    </div >






  )
};


export default Profile;