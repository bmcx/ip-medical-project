import { firestoreConnect, isLoaded } from "react-redux-firebase";

import { compose } from "redux";
import { connect } from "react-redux";
import { getFirestore } from "redux-firestore";
import moment from "moment";
import { useState } from "react";

const Patients = (props) => {
  const { appointments, loaded } = props;
  const [userPhoto, setUserPhoto] = useState("");
  const [userName, setUserName] = useState("N/A");

  const firestore = getFirestore();

  const onStatusChange = (status, id) => {
    firestore
      .collection("appointments")
      .doc(id)
      .update({
        status: status ?? "PENDING",
      });
  };

  const getPatientData = async (ref) => {
    let patient = (await ref.get()).data();
    setUserPhoto(patient.photo);
    setUserName(`${patient.firstName} ${patient.lastName}`);
  };

  if (!loaded) return <div></div>;
  return (
    <div className="px-8 py-10 ">
      <div className="text-md mb-6 font-bold">Patient Appointments</div>
      <div>
        <table class="min-w-full table-auto  rounded-md overflow-hidden">
          <thead class="justify-between">
            <tr class="bg-gray-800">
              <th class="py-3 px-2 text-left w-16">
                <span class="text-gray-300"></span>
              </th>
              <th class="py-3 px-2 text-left">
                <span class="text-gray-300">Name</span>
              </th>
              <th class="py-3 px-2 text-left">
                <span class="text-gray-300">Date</span>
              </th>

              <th class="py-3 px-2 text-left">
                <span class="text-gray-300">Time</span>
              </th>

              <th class="py-3 px-2 text-left w-16">
                <span class="text-gray-300">Status</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-gray-200">
            {appointments &&
              appointments.map((appointment) => {
                getPatientData(appointment.patient);
                return (
                  <tr
                    key={appointment.id}
                    class="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td class="py-3 px-2 text-left whitespace-nowrap">
                      <img
                        src={userPhoto}
                        class="h-8 w-8 rounded-full object-cover "
                        alt=""
                      />
                    </td>
                    <td class="py-3 px-2 text-left whitespace-nowrap">
                      <span class="font-semibold">{userName}</span>
                    </td>

                    <td class="py-3 px-2 text-left whitespace-nowrap">
                      <span>
                        {moment(appointment.dateTime?.toDate()).format(
                          "DD MM YYYY"
                        )}
                      </span>
                    </td>
                    <td class="py-3 px-2 text-left whitespace-nowrap">
                      <span>
                        {moment(appointment.dateTime?.toDate()).format(
                          "hh:mm A"
                        )}
                      </span>
                    </td>

                    <td class="py-3 px-2 text-left whitespace-nowrap">
                      <select
                        value={appointment.status}
                        onChange={(e) =>
                          onStatusChange(e.target.value, appointment.id)
                        }
                      >
                        <option key="1" value="ACCEPTED">
                          ACCEPTED
                        </option>
                        <option key="2" value="REJECTED">
                          REJECTED
                        </option>
                        <option key="3" value="PENDING">
                          PENDING
                        </option>
                      </select>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    appointments: state.firestore.ordered.appointments ?? [],
    loaded: isLoaded(state.firestore.ordered.appointments),
    myId: state.firebase.auth.uid ?? "",
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    console.log(props);
    return [
      {
        collection: "appointments",
        where: ["doctor", "==", props.myId],
        orderBy: "dateTime",
      },
    ];
  })
)(Patients);
