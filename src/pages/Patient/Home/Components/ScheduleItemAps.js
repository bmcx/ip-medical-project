import { firestoreConnect, isLoaded } from "react-redux-firebase";

import { IconSpinner } from "../../../../common/components/Icons";
import { compose } from "redux";
import { connect } from "react-redux";
import { getFirestore } from "redux-firestore";
import moment from "moment";

const ScheduleItemAps = (props) => {
  const { aps, loaded, id, myId } = props;
  const firestore = getFirestore();

  const onDeleteAp = async (ap) => {
    const ans = window.confirm("Are you sure you want to delete?");
    if (ans) {
      await firestore
        .collection("users")
        .doc(ap.doctor)
        .collection("availability")
        .doc(id)
        .update({
          bookedBy: firestore.FieldValue.arrayRemove(myId),
        });
      firestore.collection("appointments").doc(ap.id).delete();
    }
  };

  if (!loaded)
    return (
      <div className="w-full flex flex-row justify-center items-center">
        <div className="w-8 h-8 text-blue-500 mb-2 mt-8">
          <IconSpinner />
        </div>
      </div>
    );
  return (
    <div>
      {aps &&
        aps.map((ap) => {
          //   const booked = ap.bookedBy?.includes(myId) ?? false;
          return (
            <div
              key={ap.id}
              onClick={() => {
                // if (!booked) {
                //   onCreateBooking(ap.timeFrom?.toDate(), ap.id);
                // } else {
                //   onDeleteBooking(ap.id);
                // }
              }}
              className="ml-2 bg-gray-100 rounded-md hover:bg-gray-200 ease-out duration-200 cursor-pointer px-4 py-2 flex flex-row justify-between"
            >
              <div>Appointment is available, Status: {ap.status}</div>
              <div
                onClick={() => onDeleteAp(ap)}
                className="cursor-pointer hover:underline text-blue-500 select-none"
              >
                Delete
              </div>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    aps: state.firestore.ordered[`ap_${props.id}`] ?? [],
    loaded: isLoaded(state.firestore.ordered[`ap_${props.id}`]),
    myId: state.firebase.auth.uid ?? "",
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "appointments",
        where: ["availability", "==", props.id],
        storeAs: `ap_${props.id}`,
      },
    ];
  })
)(ScheduleItemAps);
