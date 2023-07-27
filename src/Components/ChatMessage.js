import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="">
      <div className="flex items-start py-2 px-2 overflow-hidden justify-around">
        <div>
        <FaUserCircle className="text-2xl mt-1 " />
        
        </div>        
        <div className="px-2  flex flex-col justify-evenly">
          <span className="font-bold">{name}</span>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
