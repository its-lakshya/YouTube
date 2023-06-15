import React from "react";

const ChatMessage = ({name,message}) => {
  return (
    <div className="" >
    <div className="flex items-start py-2 overflow-hidden">
      <img
        className="h-10 col-span-1"
        alt="user"
        src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
      />
      <div className="px-2  flex flex-col justify-evenly">
      <span className="font-bold" >{name}</span>
      <span>{message}</span>
      </div>
    </div>
    </div>
  );
};

export default ChatMessage;
