import Prescription from "../Prescription/Prescription";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { getFirestore } from "redux-firestore";
import moment from "moment";
import { useState } from "react";








const SinglePatient = (props) => {
  const {profile,loaded} = props;
  const[userPhoto,setUserPhoto] = useState("");
  const[userName,setUserName] = useState("");
  
  const firestore =getFirestore();

  const getPateintData = async (ref) => {
    let patientRef = await ref.get();
    let patient = patientRef.data();
    setUserPhoto(patient.photo);
    setUserName(`${patient.fistName} ${patient.lastName}`);
  };

  
  
  
  return (
    <div>selected id:{props.match.params.id}
    <div> {profile && 
    profile.map((profile) => {
      getPateintData(profile.patient);
      return (
        <div 
        key ={profile.id}>
          <div> <img
          src={userPhoto}
          class="h-8 w-8 rounded-full object-cover"
          alt=""/>
          </div>
          <span>{userName}</span>
         
        </div>
      )
   
    })}
      
      
    
    </div>
    <div>
    
    </div>
    <div>
        <Prescription />
      </div>
    </div>



  );

};
const mapStateToProps = (state, props) => {
  return {
   user:state.firestore.data[`u${props.match.params.id}`],
   profile: state.firestore.ordered.profile ?? [],
   loaded: isLoaded(state.firestore.ordered.profile),
   myId: state.firebase.auth.uid ?? "",
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "users",
        doc: props.match.params.id,
        //where: ["patient", "==", "User"],
        //orderBy: "firstName",
        storeAs:`u${props.match.params.id}`,
      },
    ];
  })

)(SinglePatient);
