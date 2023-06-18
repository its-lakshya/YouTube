import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomName } from "../Utils/helper";
import { RandomSentenceGenerator } from "../Utils/helper";
import { useState } from "react";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  const isThemeDark = useSelector((store)=> store.theme.isThemeDark);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: RandomSentenceGenerator(),
        })
      );
    }, 3000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className={(isThemeDark)?"bg-white bg-opacity-10 text-white  w-full h-[570px] border border-gray-300 ml-3  rounded-lg overflow-y-scroll flex flex-col-reverse":" w-full h-[570px] border border-white ml-3 bg-gray-200 rounded-lg overflow-y-scroll flex flex-col-reverse"}>
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form className={(isThemeDark?"w-full mx-3 border border-gray-300 rounded-lg flex justify-evenly bg-inherit text-white":"w-full mx-3 border border-black rounded-lg flex justify-evenly bg-inherit")}
      onSubmit={(e)=>{
        e.preventDefault();
        console.log("ON Form Submit", liveMessage)
        dispatch(addMessage({
          name:"Lakshya Kumar Verma",
          message:liveMessage, 
        }))
        setLiveMessage("")
      }}>
        <input
          className="w-72 bg-inherit"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="w-24 border border-black bg-blue-200 rounded-md">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
