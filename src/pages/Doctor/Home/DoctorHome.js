import { Link, Switch } from "react-router-dom";
import { Route, __RouterContext } from "react-router";

import { Appointments } from "./Components/Appointments";
//import { Diagnosis } from "./Components/Diagnosis";
//import { Home } from "./Components/Home";
import Patients from "../Patients/Patients";
import { animated } from "react-spring";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { useContext } from "react";
import { useTransition } from "react-spring";

const DoctorHome = ({ match: { url }, profile }) => {
  const { location } = useContext(__RouterContext);
  const routeTransitions = useTransition(
    location,
    (location) => location.pathname,
    {
      from: {
        opacity: 0,
        transform: "translate(5%,0)",
        position: "absolute",
        width: "100%",
        height: "100%",
      },
      enter: {
        opacity: 1,
        transform: "translate(0,0)",
        position: "absolute",
        width: "100%",
        height: "100%",
      },
      leave: {
        opacity: 0,
        transform: "translate(-5%,0)",
        position: "absolute",
        width: "100%",
        height: "100%",
      },
    }
  );
  return (
    <div className="m-1">
      <div className="text-xl mt-10 ml-8 font-bold">
        Welcome back Dr. {profile.firstName} {profile.lastName}.
      </div>
      <Patients />
    </div>
  );
};



const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    appointments: state.firestore.ordered.appointments ?? [],
    myId: state.firebase.auth.uid ?? "",
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "appointments",
        where: ["doctor", "==", props.myId],
        orderBy: "dateTime",
      },
    ];
  })
)(DoctorHome);
