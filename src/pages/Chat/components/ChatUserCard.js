import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

const ChatUserCard = (props) => {
  const { user, lastMessage = {}, active = false, onClick } = props;
  return (
    <div
      onClick={() => onClick(user)}
      className={`flex flex-col p-4 shadow-sm rounded-lg w-64 select-none ${
        active ? "bg-gray-100" : "bg-white"
      } hover:bg-gray-100 cursor-pointer duration-300 ease-out`}
    >
      <div className="flex flex-row space-x-2 items-center relative ">
        <div className="w-10 h-10 bg-gray-500 rounded-full flex-shrink-0 overflow-hidden">
          <img src={user?.photo} alt="" className="min-h-full w-max" />
        </div>
        <div className="flex flex-col overflow-hidden ">
          <div className="flex flow-row justify-between ">
            <p className="text-xs text-gray-700 whitespace-nowrap">{`${user?.firstName} ${user?.lastName}`}</p>
            <p
              className={`text-xs text-gray-400 absolute top-0 right-0 ${
                active ? "bg-gray-100" : "bg-white"
              } pl-1`}
            >
              {moment(lastMessage?.at.toDate()).fromNow()}
            </p>
          </div>
          <p className="font-bold text-gray-800 whitespace-nowrap">
            {lastMessage?.type === "TXT"
              ? lastMessage?.body
              : lastMessage?.type === "IMG"
              ? "Sent an image"
              : "Sent a file"}
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    user: state.firestore.data[`u${props.uid}`],
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "users",
        doc: props.uid,
        storeAs: `u${props.uid}`,
      },
    ];
  })
)(ChatUserCard);
