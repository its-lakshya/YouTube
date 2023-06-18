import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const Json = await data.json();
    setVideos(Json.items);
  };
  // console.log(videos[0])
  // if(videos) return console.log(videos[0])
  if (videos)
    return (
      <div className="flex flex-wrap justify-center mt-8 " >
        {videos.map((video) => {
          return (
            <Link to={"/watch?v="+video.id} key={video.id} >
              <VideoCard info={video} />
            </Link>
          );
        })}
      </div>
    );
};

export default VideoContainer;
