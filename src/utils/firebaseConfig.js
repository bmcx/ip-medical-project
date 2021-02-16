import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyDnAhbWo5cnXvuc9gMwnGUThRs5TBxEwow",
  authDomain: "ip-medical-project.firebaseapp.com",
  projectId: "ip-medical-project",
  storageBucket: "ip-medical-project.appspot.com",
  messagingSenderId: "690041320896",
  appId: "1:690041320896:web:c35fbc24aa8883077b8425",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;
