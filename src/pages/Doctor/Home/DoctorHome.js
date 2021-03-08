import { Link, Switch } from "react-router-dom";
import { Route, __RouterContext } from "react-router";

import { Appointments } from "./Components/Appointments";
import { Category } from "../Store/Category";
import { Diagnosis } from "./Components/Diagnosis";
import { History } from "./Components/History";
import { Home } from "./Components/Home";
import { Schedule } from "./Components/Schedule";
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
            <Link to={`${url}/schedule`} className="ml-10">
              Schedule
            </Link>
          { /* <Link to={`${url}/appointments`} className="ml-10">
              Appointments
  </Link>*/}
            <Link to={`${url}/category`} className="ml-10">
              Store
            </Link>
          </nav>

          <Switch>
            <Route exact path={url} component={Appointments} />
            <Route path={`${url}/home`} component={Home} />
           {/* <Route path={`${url}/appointments`} component={Appointments} />*/}
            <Route path={`${url}/diagnosis`} component={Diagnosis} />
            <Route path={`${url}/schedule`} component={Schedule} />
            
          </Switch>
        </div>
        <Switch><Route path={`${url}/category`} component={Category} /></Switch>
      </div>
    </div>
  );
};

export default DoctorHome;
