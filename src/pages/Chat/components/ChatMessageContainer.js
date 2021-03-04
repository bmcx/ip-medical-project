import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

const ChatMessageContainer = (props) => {
  const { messages, role } = props;

  return (
    <div className="flex-1 flex flex-col-reverse overflow-y-auto bg-gray-100 rounded-lg ">
      {messages &&
        messages.map((message) =>
          message.by === role ? (
            <ChatMessageRight key={message.id} message={message} />
          ) : (
            <ChatMessageLeft key={message.id} message={message} />
          )
        )}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    messages: state.firestore.ordered[`m${props.chatId}`],
    role: state.firebase?.profile?.role,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "chats",
        doc: props.chatId,
        subcollections: [
          {
            collection: "messages",
            orderBy: ["createdAt", "desc"],
          },
        ],
        storeAs: `m${props.chatId}`,
      },
    ];
  })
)(ChatMessageContainer);

const ChatMessageLeft = ({ message, type }) => {
  return (
    <div className="flex flex-row mb-1">
      <div className=" flex flex-col bg-blue-500 text-white py-1 flex-grow-0 rounded-r-xl rounded-bl-xl px-2 max-w-6xl">
        <div>{message?.body}</div>
        <div className=" text-2xs">
          {moment(message?.createdAt?.toDate()).format("hh:mm A")}
        </div>
      </div>
    </div>
  );
};
const ChatMessageRight = ({ message, type }) => {
  return (
    <div className="flex flex-row mb-1 justify-end">
      <div className="flex flex-col items-end bg-gray-200 py-1 flex-grow-0 rounded-l-xl rounded-br-xl px-2 max-w-6xl">
        <div>{message?.body}</div>
        <div className=" text-2xs">
          {moment(message?.createdAt?.toDate()).format("hh:mm A")}
        </div>
      </div>
    </div>
  );
};
