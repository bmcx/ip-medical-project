import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { animated, useSpring, useTransition } from "react-spring";
import { isEmpty, isLoaded } from "react-redux-firebase";

import AddProfileInfoContainer from "./pages/Auth/AddProfileInfoContainer";
import AuthContainer from "./pages/Auth/AuthContainer";
import DoctorHome from "./pages/Doctor/Home/DoctorHome";
import LandingPage from "./pages/Landing/LandingPage";
import LoadingContainer from "./pages/Loading/LoadingContainer";
import PatientHome from "./pages/Patient/Home/PatientHome";
import SideNav from "./common/containers/SideNavContainer";
import { ToastContainer } from "react-toastify";
import { __RouterContext } from "react-router";
import { connect } from "react-redux";

function App(props) {
  const { auth, profile, authModalVisible } = props;
  const loaded = isLoaded(auth, profile);
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
      },
      enter: {
        opacity: 1,
        transform: "translate(0,0)",
        position: "relative",
        width: "100%",
      },
      leave: {
        opacity: 0,
        transform: "translate(-5%,0)",
        position: "absolute",
        width: "100%",
      },
    }
  );
  const loadingProps = useSpring({
    opacity: loaded ? 0 : 1,
    height: loaded ? "0vh" : "100vh",
    width: "100%",
    overflow: "hidden",
    position: "absolute",
    zIndex: 999,
  });
  const authModalTransitions = useTransition(authModalVisible, null, {
    from: {
      opacity: 0,
      backdropFilter: "blur(0px)",
    },
    enter: {
      opacity: 1,
      backdropFilter: "blur(5px)",
    },
    leave: {
      opacity: 0,
      backdropFilter: "blur(0px)",
    },
  });

  const getHomePage = () => {
    if (!profile) return LandingPage;

    switch (profile?.role) {
      case "DOCTOR":
        return DoctorHome;
      case "PATIENT":
        return PatientHome;
      default:
        return LandingPage;
    }
  };

  return (
    <div className="flex justify-center bg-gray-200 md:py-4 h-screen">
      <ToastContainer position="top-center" toastClassName="rounded-lg" />
      <div className="md:rounded-2xl md:container w-screen bg-gray-50 flex relative overflow-hidden shadow-lg">
        <animated.div style={loadingProps}>
          <LoadingContainer
            authLoaded={isLoaded(auth)}
            profileLoaded={isLoaded(profile)}
          />
        </animated.div>
        {!isEmpty(auth) && !profile.profileCompleted ? (
          <AddProfileInfoContainer auth={auth} />
        ) : null}
        {authModalTransitions.map(
          ({ item, key, props: style }) =>
            item && (
              <animated.div
                key={key}
                style={style}
                className="w-full h-full absolute z-20"
              >
                <AuthContainer />
              </animated.div>
            )
        )}

        {/* {authModalTransitions.map(
        ({ item, key, props: style }) =>
          item && (
            <animated.div
              key={key}
              style={style}
              className="w-screen h-screen absolute z-20"
            >
              <AddNewContainer />
            </animated.div>
          )
      )} */}

        {profile?.role ? <SideNav auth={auth} profile={profile} /> : null}
        {routeTransitions.map(({ item, props, key }) => (
          <animated.div
            key={key}
            style={props}
            className="flex-1 flex-col overflow-y-auto bg-gray-50"
          >
            <Switch location={item}>
              <Route path="/" component={getHomePage()} exact />
              <Route path="*" component={() => <div>Not found</div>} />
            </Switch>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authModalVisible: state.auth.authModalVisible,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(App);
