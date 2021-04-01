import React, { useState } from "react";
import { firestoreConnect, isLoaded } from "react-redux-firebase";

import { IconSpinner } from "../../../common/components/Icons";
import Schedule from "./Components/Schedule";
import { compose } from "redux";
import { connect } from "react-redux";

const PatientHome = (props) => {
  const { doctors, loaded } = props;
  const [selectedDoctor, setSelectedDoctor] = useState();
  if (!loaded)
    return (
      <div className="w-full h-full flex flex-row justify-center items-center">
        <div className="w-8 h-8 text-blue-500 mb-2 mt-8">
          <IconSpinner />
        </div>
      </div>
    );

  return (
    <div className="my-10 mx-8">
      <div className="text-md mb-6 font-bold">Doctors availability</div>
      <div className="flex flex-col">
        <div class="flex flex-row space-x-2 border-b pb-4 mb-4">
          {doctors &&
            doctors.map((doctor) => {
              return (
                <div
                  className={`p-4 select-none cursor-pointer ${
                    selectedDoctor?.id === doctor.id
                      ? "bg-blue-400"
                      : "bg-gray-100"
                  } rounded-md shadow-sm hover:shadow duration-300 ease-out`}
                  onClick={() => {
                    if (selectedDoctor) setSelectedDoctor(null);
                    else setSelectedDoctor(doctor);
                  }}
                >
                  <div className="flex flex-col items-center">
                    <img
                      alt="avatar"
                      className="h-16 w-16 rounded-full border-2 border-white"
                      src={doctor?.photo}
                    />
                    <div
                      className={`mt-2 font-bold duration-300 ease-out ${
                        selectedDoctor?.id === doctor.id
                          ? "text-white"
                          : "text-gray-600"
                      }`}
                    >
                      Dr. {doctor?.firstName} {doctor?.lastName}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {selectedDoctor ? (
          <>
            Available days
            <Schedule id={selectedDoctor.id} />
          </>
        ) : (
          <div className="text-center">Select a doctor</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    doctors: state.firestore.ordered.doctors ?? [],
    loaded: isLoaded(state.firestore.ordered.doctors),
    myId: state.firebase.auth.uid ?? "",
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => {
    return [
      {
        collection: "users",
        where: ["role", "==", "DOCTOR"],
        orderBy: "firstName",
        storeAs: "doctors",
      },
    ];
  })
)(PatientHome);
