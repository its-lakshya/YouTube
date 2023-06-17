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
      <div className=" w-full h-[570px] border border-black ml-3 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form className="w-full mx-3 border border-black rounded-lg flex justify-evenly bg-green-50"
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
          className="w-72 bg-green-50"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="w-24 border border-black bg-green-200 rounded-md">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
