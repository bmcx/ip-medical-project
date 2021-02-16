import "react-toastify/dist/ReactToastify.min.css";
import "./assets/output.css";
import "./assets/style.css";

import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import { applyMiddleware, compose, createStore } from "redux";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from "redux-firestore";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import firebaseConfig from "./utils/firebaseConfig";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./state/rootReducer";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebaseConfig)
  )
);

const profileSpecificProps = {
  userProfile: "users",
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false,
  enableClaims: true,
};
const rrfProps = {
  firebase,
  config: { ...firebaseConfig, ...profileSpecificProps },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter 
      // basename={'/ip-medical-project/'}
      >
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals(console.log);
