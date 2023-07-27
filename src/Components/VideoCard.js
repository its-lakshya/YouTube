import React from 'react'

const VideoCard = (props) => {
    // console.log(props.info)
    const {snippet, statistics} = props.info;
    const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className=" mx-2 mb-8 w-[22rem] cursor-pointer container rounded-xl hover:rounded-none ">
         <img className="rounded-xl hover:rounded-none w-[22rem]" alt="thumbnail" src={thumbnails.medium.url}/>
         <div className="flex flex-col w-30 overflow-hidden container">
            <span className="font-semibold max-w-28 overflow-hidden h-12">{title}</span>
            <span className='text-[0.95rem] '>{channelTitle}</span>
            <span className='text-[0.95rem] '>{Math.round(statistics.viewCount/100000)}K views</span>
         </div>
    </div>
  )
}

export default VideoCard;