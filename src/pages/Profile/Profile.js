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


        <div className="m-10 ml-40">
          <div className="flex justify-between items-center">

            <FormInput placeholder="First Name" className="w-full mx-w-lg">
              <div className="flex flex-wrap mx-3 mb6"></div>
              <input className="flex"> </input>


            </FormInput>
            <FormInput placeholder="Surname" className="w-full mx-w-lg ">
              <div className="flex flex-wrap mx-3 mb6"></div>
              <input className="flex"> </input>
            </FormInput>

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
              <FormInput placeholder="Gender" required="ture" className="w-5">
                <div className="flex flex-wrap mx-3 mb6"></div>
                <input className="flex"> </input>



              </FormInput>
              <div className="mt-2">
                <div className="flex justify-between items-center">

                  <FormInput placeholder="Day" required="ture" className="w-5">
                  <div className="flex flex-wrap mx-3 mb6 "></div>
                  <input className="flex"> </input>
                  </FormInput>

                <FormInput placeholder="Month" required="ture" className="w-5">
                  <div className="flex flex-wrap mx-3 mb6"></div>
                  <input className="flex"> </input>
                </FormInput>
                <FormInput placeholder="Year" required="ture" className="w-5">
                  <div className="flex flex-wrap mx-3 mb6"></div>
                  <input className="flex"> </input>
                </FormInput>
              </div>
            </div>
            <div className="mt-2 mr-96">
              <div className="flex justify-between items-center">
                <FormInput placeholder="Height" required="ture" className="w-5">
                  <div className="flex flex-wrap mx-3 mb6"></div>
                  <input className="flex"> </input>
                </FormInput>
                <FormInput placeholder="Weight" required="ture" className="w-5">
                  <div className="flex flex-wrap mx-3 mb6"></div>
                  <input className="flex"> </input>
                </FormInput>
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
