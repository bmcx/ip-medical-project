import FormInputControlled from "../../../common/components/FormInputControlled";
import { IconSearch } from "../../../common/components/Icons";
import moment from "moment";
import { useState } from "react";

const DoctorChatContainer = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="w-full h-full flex flex-col relative">
      <div className="px-10 py-10 absolute w-full flex flex-row justify-between space-x-4 items-center border-b h-12">
        <div className="w-64 mx-1">
          <FormInputControlled
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a patient"
          />
        </div>
        <div className="flex-1 flex flex-row space-x-2 items-center">
          <div className="w-8 h-8 bg-gray-500 rounded-full flex-shrink-0"></div>
          <div className="flex flex-col overflow-hidden">
            <p className="font-bold whitespace-nowrap text-gray-700">
              John Doe asdasd 23 sadasd
            </p>
            <p className="text-xs text-gray-500">{moment().fromNow()}</p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-6 h-6 text-gray-500">
            <IconSearch />
          </div>
        </div>
      </div>
      <div className="flex flex-row h-full pt-24">
        <div className="pl-10 flex flex-col flex-shrink-0 ">
          <div className="flex-1 flex flex-col space-y-4 overflow-y-auto p-1">
            <ChatUserCard />
            <ChatUserCard />
            <ChatUserCard />
            <ChatUserCard />
            <ChatUserCard />
            <ChatUserCard />
            <ChatUserCard />
            <ChatUserCard />
            <ChatUserCard />
            <ChatUserCard />
            <ChatUserCard />
          </div>
        </div>
        <div className="px-10 flex flex-col flex-1">
          <div className="flex-1 flex flex-col space-y-4 overflow-y-auto p-2 ">
            <div className="flex-1 flex flex-col-reverse overflow-y-auto bg-gray-100 rounded-lg ">
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
              <ChatMessageRight message={"Message"} />
              <ChatMessageLeft message={"Message"} />
            </div>
            <div className="flex-shrink-0 flex flex-row items-center space-x-2 pb-4">
              <FormInputControlled />
              <div className="w-8 h-8 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatMessageLeft = ({ message, type }) => {
  return (
    <div className="flex flex-row mb-1">
      <div className=" flex flex-col bg-blue-500 text-white py-1 flex-grow-0 rounded-r-xl rounded-bl-xl px-2 max-w-6xl">
        <div>{message}</div>
        <div className=" text-2xs">20:10</div>
      </div>
    </div>
  );
};
const ChatMessageRight = ({ message, type }) => {
  return (
    <div className="flex flex-row mb-1 justify-end">
      <div className="flex flex-col items-end bg-gray-200 py-1 flex-grow-0 rounded-l-xl rounded-br-xl px-2 max-w-6xl">
        <div>{message}</div>
        <div className=" text-2xs">20:10</div>
      </div>
    </div>
  );
};
const ChatUserCard = () => {
  return (
    <div className="flex flex-col p-4 shadow-sm rounded-lg w-64 select-none bg-white hover:bg-gray-100 cursor-pointer duration-300 ease-out">
      <div className="flex flex-row space-x-2 items-center">
        <div className="w-10 h-10 bg-gray-500 rounded-full flex-shrink-0"></div>
        <div className="flex flex-col overflow-hidden">
          <div className="flex flow-row justify-between">
            <p className="text-xs text-gray-700 whitespace-nowrap">John Doe</p>
            <p className="text-xs text-gray-700 ">{moment().fromNow()}</p>
          </div>
          <p className="font-bold text-gray-800 whitespace-nowrap">
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorChatContainer;
