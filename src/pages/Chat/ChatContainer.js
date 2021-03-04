import { IconSendOutline, IconSpinner } from "../../common/components/Icons";
import { firestoreConnect, isLoaded } from "react-redux-firebase";

import ChatMessageContainer from "./components/ChatMessageContainer";
import ChatUserCard from "./components/ChatUserCard";
import FormInputControlled from "../../common/components/FormInputControlled";
import { compose } from "redux";
import { connect } from "react-redux";
import moment from "moment";
import { sendMessage } from "../../state/chat/chatActions";
import { toast } from "react-toastify";
import { useState } from "react";

const ChatContainer = (props) => {
  const { chats, role, sendMessage } = props;
  const [query, setQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");

  const sendMsg = async () => {
    if (!message || message.length === 0)
      return toast.warn("Message cannot be empty");
    sendMessage(selectedChat, {
      body: message,
      by: role,
      type: "TXT",
    });
    setMessage("");
  };

  if (!isLoaded(chats))
    return (
      <div className="w-full h-full flex flex-row justify-center items-center">
        <div className="w-8 h-8 text-blue-500 mb-2 mt-8">
          <IconSpinner />
        </div>
      </div>
    );

  return (
    <div className="w-full h-full flex flex-col relative">
      <div className="px-4 py-10 absolute w-full flex flex-row justify-between space-x-10 items-center border-b h-12">
        <div className="w-64 mx-1">
          <FormInputControlled
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chats"
          />
        </div>
        {!selectedUser ? (
          <div className="flex-1 flex flex-row space-x-2 items-center"></div>
        ) : (
          <div className="flex-1 flex flex-row space-x-2 items-center">
            <div className="w-8 h-8 bg-gray-500 rounded-full flex-shrink-0 overflow-hidden">
              <img
                src={selectedUser?.photo}
                alt=""
                className="min-h-full w-max"
              />
            </div>
            <div className="flex flex-col overflow-hidden">
              <p className="font-bold whitespace-nowrap text-gray-700">
                {`${selectedUser?.firstName} ${selectedUser?.lastName}`}
              </p>
              <p className="text-xs text-gray-400">{moment().fromNow()}</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-row h-full pt-24">
        <div className="pl-4 flex flex-col flex-shrink-0 ">
          <div className="flex-1 flex flex-col space-y-4 overflow-y-auto p-1">
            {chats &&
              chats.map((chat) => (
                <ChatUserCard
                  key={chat.id}
                  onClick={(e) => {
                    setSelectedUser(e);
                    setSelectedChat(chat.id);
                  }}
                  active={selectedChat === chat.id}
                  lastMessage={{
                    at: chat.lastMessageAt,
                    by: chat.lastMessageBy,
                    type: chat.lastMessageType,
                    body: chat.lastMessageBody,
                  }}
                  uid={role === "DOCTOR" ? chat.patientUid : chat.doctorUid}
                />
              ))}
          </div>
        </div>
        <div className="px-4 flex flex-col flex-1">
          {selectedChat ? (
            <div className="flex-1 flex flex-col space-y-4 overflow-y-auto p-2 ">
              <ChatMessageContainer chatId={selectedChat} />

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMsg();
                }}
                className="flex-shrink-0 flex flex-row items-center space-x-2 pb-4"
              >
                <FormInputControlled
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  placeholder="Type a message"
                  required={true}
                />
                <button
                  type="submit"
                  className="w-8 h-8 bg-blue-500 rounded-lg text-white flex flex-row justify-center items-center"
                >
                  <IconSendOutline />
                </button>
              </form>
            </div>
          ) : (
            <div className="flex-1 flex flex-col space-y-4 overflow-y-auto p-2">
              <div className="flex-1 flex flex-row overflow-hidden justify-center items-center bg-gray-100 rounded-lg ">
                Select a chat to view messages
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    chats: state.firestore.ordered.chats ?? [],
    // loaded: isLoaded(state.firestore.data.selected_class_card),
    uid: state.firebase?.auth?.uid,
    role: state.firebase?.profile?.role,
    // role: state.firebase.profile.token.claims.role,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    sendMessage: (chatId, data) => dispatch(sendMessage(chatId, data)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    if (props.uid && props.role)
      return [
        {
          collection: "chats",
          where: [
            props.role === "DOCTOR" ? "doctorUid" : "patientUid",
            "==",
            props.uid,
          ],
        },
      ];
    return [];
  })
)(ChatContainer);
