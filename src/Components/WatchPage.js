import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoDescription from "./VideoDescription";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [SearchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div>
    <div className="p-7 flex justify-evenly w-full">
      <div>
      <iframe
        width="1030"
        height="570"
        src={"https://www.youtube.com/embed/" + SearchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <VideoDescription/>
      </div>
      <div className="">
        <LiveChat/>
      </div>
    </div>
    <CommentContainer/>
    </div>
  );
};

export default WatchPage;
