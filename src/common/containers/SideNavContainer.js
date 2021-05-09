import {
  IconBagOutline,
  IconCalendarOutline,
  IconChatOutline,
  IconGlobeOutline,
  IconHomeOutline,
  IconLogo,
  IconNavProfile,
  IconSendOutline,
  IconSettingsOutline,
  IconUsersOutline,
  IconClipboard,
 
} from "../components/Icons";
import { Link, Route, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { showAuthModal, signOutAction } from "../../state/auth/authActions";

import NavTooltip from "../components/NavTooltip";
import { connect } from "react-redux";
import { isEmpty } from "react-redux-firebase";

const commonRoutes = [
  {
    path: "/home",
    label: "Home",
    icon: <IconHomeOutline strokeWidth={2} colorClass="text-white" />,
  },
];

const doctorRoutes = [
  {
    path: "/chat",
    label: "Chat",
    icon: <IconChatOutline strokeWidth={2} colorClass="text-white" />,
  },
  {
    path: "/schedule",
    label: "Schedule",
    icon: <IconCalendarOutline strokeWidth={2} colorClass="text-white" />,
  },
  {
    path: "/patients",
    label: "Patient Appointments",
    icon: <IconUsersOutline strokeWidth={2} colorClass="text-white" />,
  },
  {
    path: "/store",
    label: "Store",
    icon: <IconBagOutline strokeWidth={2} colorClass="text-white" />,
  },
  {
    path: "/settings",
    label: "Settings",
    icon: <IconSettingsOutline strokeWidth={2} colorClass="text-white" />,
  },
];
const patientRoutes = [
  {
    path: "/chat",
    label: "Chat",
    icon: <IconChatOutline strokeWidth={2} colorClass="text-white" />,
 },
 {
   path:"/prescription",
   lable:"Prescription",
   icon:<IconClipboard strokeWidth={2} colorClass="text-white"/>,
 },
];

const SideNav = (props) => {
  const getRoutesForUser = () => {
    if (props.profile?.role === "DOCTOR")
      return [...commonRoutes, ...doctorRoutes];
    if (props.profile?.role === "PATIENT")
      return [...commonRoutes, ...patientRoutes];
    return commonRoutes;
  };
  return (
    <div className="z-10 w-20 bg-blue-500 rounded-r-2xl mr-2 px-4 py-6 flex flex-col ">
      <div className="flex-grow-0 w-10 h-10 ease-out duration-300">
        <IconLogo colorClass="text-white" />
      </div>
      <nav className="my-10 flex-grow">
        <ul className="flex flex-col space-y-5 items-center">
          {getRoutesForUser().map((route) => (
            <NavTooltip tooltipText={route.label} key={route.path}>
              <SideNavItem to={route.path}>
                {(isActive) => (
                  <div
                    className={`flex flex-row bg-white ${
                      isActive
                        ? "bg-opacity-20"
                        : "bg-opacity-0 hover:bg-opacity-20"
                    } p-2 rounded-md ease-out duration-300 `}
                  >
                    {route.icon}
                  </div>
                )}
              </SideNavItem>
            </NavTooltip>
          ))}
        </ul>
      </nav>

      <ProfileNav {...props} />

      <div className="flex-grow-0 ">
        <IconGlobeOutline strokeWidth={2} colorClass="text-gray-100" />
      </div>
    </div>
  );
};

const ProfileNav = ({ auth, profile, showAuthModal, signOut }) => {
  const history = useHistory();
  const signedIn = !isEmpty(auth);
  const [showTip, setShowTip] = useState(true);

  const handleIconClick = () => {
    if (signedIn) {
      history.push("/profile");
    } else {
      showAuthModal();
    }
    setShowTip(false);
  };

  const handleSignOut = () => {
    signOut();
    history.push("/");
  };

  return (
    <div className="relative flex-grow-0 flex flex-col items-center mb-6 ">
      {showTip && !signedIn ? (
        <div
          className="absolute w-48 whitespace-no-wrap bg-blue-500 text-white text-sm px-4 py-2 rounded-xl flex items-center transition-all duration-150 "
          style={{ left: "3.5rem" }}
        >
          <button
            onClick={() => setShowTip(false)}
            className="absolute bg-gray-500 w-6 h-6 right-1 rounded-lg flex items-center hover:shadow-md justify-center transition-all ease-out duration-400 focus:outline-none"
          >
            🗙
          </button>
          <div
            className="bg-blue-500 h-3 w-3 absolute"
            style={{ left: "-6px", transform: "rotate(45deg)" }}
          />
          <div>
            <button
              onClick={handleIconClick}
              className="underline animate-pulse hover:text-gray-300 outline-none ease-out duration-150"
            >
              Sign in
            </button>{" "}
            to get started
          </div>
        </div>
      ) : null}

      <button
        onClick={handleIconClick}
        className="w-10 h-10 opacity-80 hover:opacity-100 overflow-hidden focus:outline-none rounded-full shadow-md hover:shadow-lg ease-out duration-300"
      >
        {signedIn ? (
          <img src={profile.photo} alt="" className="min-h-full w-max" />
        ) : (
          <IconNavProfile />
        )}
      </button>
      {signedIn ? (
        <button
          onClick={handleSignOut}
          className="focus:outline-none text-xs py-1 mt-1 hover:opacity-100 opacity-80 hover:underline text-white"
        >
          Sign out
        </button>
      ) : null}
    </div>
  );
};

const SideNavItem = ({ to, children, className, activeClassName, ...rest }) => {
  const path = typeof to === "object" ? to.pathname : to;
  return (
    <li>
      <Route
        path={path}
        children={(p) => {
          const isActive = to === p?.location?.pathname;
          return (
            <Link {...rest} to={to}>
              {typeof children === "function" ? children(isActive) : children}
            </Link>
          );
        }}
      />
    </li>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.firestore.ordered.users ?? [],
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showAuthModal: () => dispatch(showAuthModal()),
    signOut: () => dispatch(signOutAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
