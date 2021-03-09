import FormInput from "../../common/components/FormInput";
import { connect } from "react-redux";
import { isLoaded } from "react-redux-firebase";

const Profile = (props) => {
  const { loaded, profile, uid } = props;
  return (
    <div className="ml-10 mt-5">
      Your profile
      <div className="flex rounded-x1 p-8 ml-20">
        <div className="m-5 mt-4 ml-10 sm:flex ">
          <div className="flex-shrink-0">
            <img
              alt="avatar"
              className="h-28 w-28 rounded-full border-2 border-white"
              src={profile?.photo}
            ></img>
          </div>
        </div>

        <div className="m-10 ml-20 select-none">
          <div className="flex justify-between items-center space-x-2">
            {/* <select
              className="h-7 mt-2 mr-1  focus:border-blue-500 
                    focus:ring-blue-300 focus:ring-2 bg-white text-gray-700 border border-gray-300 
                    focus:outline-none rounded-lg  transition-all 
                    ease-out duration-300"
            >
              <option value="Rev">Rev.</option>
              <option value="Dr">Dr.</option>
              <option value="Mr">Mr.</option>
              <option value="Master">Master</option>
              <option value="Mrs">Mrs.</option>
              <option value="Miss">Miss.</option>
            </select> */}
            <div className="w-full">
              <FormInput
                labelText="First Name"
                placeholder="First Name"
                className="w-full mx-w-lg"
                defaultValue={profile?.firstName}
              />
            </div>
            <div className="w-full">
              <FormInput
                labelText="Last Name"
                placeholder="Last Name"
                className="w-full mx-w-lg "
                defaultValue={profile?.lastName}
              />
            </div>
          </div>
          <div className="mt-4">
            <FormInput
              labelText="National Identity Card Number"
              placeholder="NIC"
              className=" mx-w-lg"
              defaultValue={profile?.nic}
              maxLength="14"
            />
            <div className="mt-4">
              <FormInput
                labelText="Contact Number"
                placeholder="Contact Number"
                className="w-full mx-w-lg"
                defaultValue={profile?.phone}
                maxLength="10"
              />
              {/* <div className="w-24">
                <FormInput
                  placeholder="Gender"
                  required="ture"
                  className="w-5"
                />
              </div> */}
            </div>
            <div className="mt-4">
              <div className="flex flex-col ">
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="dob"
                >
                  Date of Birth
                </label>
                <input
                  id="dob"
                  className=" focus:border-blue-500 
                    focus:ring-blue-300 focus:ring-2 bg-white text-gray-700 border border-gray-300 
                    focus:outline-none rounded-lg py-1 px-4 block w-full transition-all 
                    ease-out duration-300"
                  type="date"
                  value={profile?.dob.toDate().toLocaleDateString("en-CA")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    loaded: isLoaded(state.firebase?.profile),
    uid: state.firebase?.auth?.uid,
    profile: state.firebase?.profile,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    // updateProfile: (uid, data) => dispatch(updateProfile(uid, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
