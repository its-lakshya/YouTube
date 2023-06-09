import React from 'react'

const VideoCard = (props) => {
    // console.log(props.info)
    const {snippet, statistics} = props.info;
    const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className=" m-4 w-66 shadow-lg cursor-pointer">
         <img className="rounded-lg " alt="thumbnail" src={thumbnails.medium.url}/>
        <ul>
            <li className="font-bold py-2 w-64">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul> 
    </div>
  )
}

export default VideoCard;