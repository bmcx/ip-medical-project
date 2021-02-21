import FormInputControlled from "../../../common/components/FormInputControlled";
import { IconSearch } from "../../../common/components/Icons";
import moment from "moment";
import { useState } from "react";

const DoctorChatContainer = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mx-10 mt-10 flex flex-row justify-between space-x-2 items-center border-b">
        <div className="h-12 w-64 mx-1">
          <FormInputControlled
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a patient"
          />
        </div>
        <div className="flex-1 flex flex-row space-x-2 items-center h-12">
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
      <div className="flex flex-row">
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
        <div className="p-10 flex flex-col flex-1">
          <div className="flex-1 flex flex-col space-y-4 overflow-y-auto p-2"></div>
        </div>
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
      import { ChatItem } from 'react-chat-elements'
      import { MessageBox } from 'react-chat-elements'

<MessageBox
    position={'left'}
    type={'photo'}
    text={'react.svg'}
    data={{
        uri: 'http://localhost:3000/chat',
        status: {
            click: false,
            loading: 0,
        }
    }}/>
    import { MessageBox } from 'react-chat-elements'

<MessageBox
    reply={{
        photoURL: 'abc.jpg',
        title: 'senal ransika',
        titleColor: '#000000',
        message: 'This is the photo',
    }}
    onReplyMessageClick={() => console.log('reply clicked!')}
    position={'left'}
    type={'text'}
    text={'This photo is really stunning.'}/>
/</div>
  );
};

export default DoctorChatContainer;
