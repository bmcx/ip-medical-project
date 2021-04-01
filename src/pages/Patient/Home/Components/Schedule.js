import React, { useState } from "react";
import { firestoreConnect, isLoaded } from "react-redux-firebase";

import { IconSpinner } from "../../../../common/components/Icons";
import ScheduleItemAps from "./ScheduleItemAps";
import { compose } from "redux";
import { connect } from "react-redux";
import { getFirestore } from "redux-firestore";
import moment from "moment";

const Schedule = (props) => {
  const { availability, loaded, id, myId } = props;
  const firestore = getFirestore();

  const onCreateBooking = async (dateTime, avId) => {
    await firestore.collection("appointments").add({
      doctor: id,
      patient: firestore.collection("users").doc(myId),
      dateTime: dateTime,
      status: "PENDING",
      availability: avId,
    });
    firestore
      .collection("users")
      .doc(id)
      .collection("availability")
      .doc(avId)
      .update({
        bookedBy: firestore.FieldValue.arrayUnion(myId),
      });
  };
  const onDeleteBooking = async () => {
    alert("You have already have an appointment in this slot");
  };

  if (!loaded)
    return (
      <div className="w-full h-full flex flex-row justify-center items-center">
        <div className="w-8 h-8 text-blue-500 mb-2 mt-8">
          <IconSpinner />
        </div>
      </div>
    );

  return (
    <div class="flex flex-col space-y-2 mt-2">
      {availability &&
        availability.map((av) => {
          const booked = av.bookedBy?.includes(myId) ?? false;
          return (
            <div>
              <div
                key={av.id}
                onClick={() => {
                  if (!booked) {
                    onCreateBooking(av.timeFrom?.toDate(), av.id);
                  } else {
                    onDeleteBooking(av.id);
                  }
                }}
                className="bg-gray-200 rounded-md hover:bg-gray-300 ease-out duration-200 cursor-pointer px-4 py-2 mb-1 flex flex-row justify-between"
              >
                <div>
                  {moment(av.timeFrom?.toDate()).format("DD MMM YYYY ")}
                </div>
                <div>{booked ? "Booked" : "Can be booked"}</div>
              </div>
              <ScheduleItemAps id={av.id} />
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    availability: state.firestore.ordered.availability ?? [],
    loaded: isLoaded(state.firestore.ordered.availability),
    myId: state.firebase.auth.uid ?? "",
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "users",
        doc: props.id,
        subcollections: [{ collection: "availability" }],
        storeAs: "availability",
      },
    ];
  })
)(Schedule);
