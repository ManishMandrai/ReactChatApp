import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  var timeStamp = `${message.date.seconds}`;
  timeStamp = timeStamp * 1000;
  var dateFormat = new Date(timeStamp);

  var date = dateFormat.toLocaleDateString();
  var time = dateFormat.toLocaleTimeString();

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageContent">
      <div className="messageInfo">
        <span className="timeee">{time}</span>
      </div>
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
