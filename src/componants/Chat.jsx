import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="chatNavbar">
          {data.user?.photoURL && (
            <img className="abcdefg" src={data.user?.photoURL} />
          )}
          <span className="abcde">{data.user?.displayName}</span>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
