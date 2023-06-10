import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [SearchParams] = useSearchParams();
//   console.log(SearchParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div>
    <div className="p-7">
      <iframe
        width="1030"
        height="570"
        src={"https://www.youtube.com/embed/" + SearchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <CommentContainer/>
    </div>
  );
};

export default WatchPage;
