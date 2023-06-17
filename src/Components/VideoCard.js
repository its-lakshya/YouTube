import React from 'react'

const VideoCard = (props) => {
    // console.log(props.info)
    const {snippet, statistics} = props.info;
    const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className=" m-2 w-[22rem] cursor-pointer container rounded-xl">
         <img className="rounded-xl w-[22rem]" alt="thumbnail" src={thumbnails.medium.url}/>
         <div className="flex flex-col w-30 overflow-hidden container">
            <span className="font-bold max-w-28 overflow-hidden h-12">{title}</span>
            <span>{channelTitle}</span>
            <span>{statistics.viewCount} views</span>
         </div>
    </div>
  )
}

export default VideoCard;