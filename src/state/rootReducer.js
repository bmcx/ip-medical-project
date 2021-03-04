import authReducer from "./auth/authReducer";
import chatReducer from "./chat/chatReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
