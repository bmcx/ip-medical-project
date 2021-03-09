import {Prescription} from "./Prescription"
import { Link, Switch } from "react-router-dom";
import { Route, __RouterContext } from "react-router";
import { useContext } from "react";
import { useTransition } from "react-spring";


export const History = ({ match: { url } }) => {
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
    return(
        <div>
                
            <Link to={`${url}/prescription`} className="ml-10">
                Prescription
              </Link>
              <Switch>
              <Route path={`${url}/prescription`} component={Prescription} />
              </Switch>
        </div>

    );
}
export default History;
