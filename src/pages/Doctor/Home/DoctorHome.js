import { Link, Switch } from "react-router-dom";
import { Route, __RouterContext } from "react-router";

import { Appointments } from "./Components/Appointments";
import { Diagnosis } from "./Components/Diagnosis";
import { Home } from "./Components/Home";
import { animated } from "react-spring";
import { useContext } from "react";
import { useTransition } from "react-spring";

const DoctorHome = ({ match: { url } }) => {
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
      Doctor Home
      <div className="m-5">
        <div className=" mt-2 border border-blue-500 rounded-lg  ">
          <nav className="ml-10 ">
            <Link
              to={`${url}/home`}
              className="ml-10"
            >
              History
            </Link>
            <Link to={`${url}/diagnosis`} className="ml-10">
              Diagnosis
            </Link>
          { /* <Link to={`${url}/appointments`} className="ml-10">
              Appointments
  </Link>*/}
          </nav>

          <Switch>
            <Route exact path={url} component={Appointments} />
            <Route path={`${url}/home`} component={Home} />
           {/* <Route path={`${url}/appointments`} component={Appointments} />*/}
            <Route path={`${url}/diagnosis`} component={Diagnosis} />
            
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default DoctorHome;
