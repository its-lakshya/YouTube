import React from 'react'
import { useDispatch } from 'react-redux';
import { addData } from '../Utils/VideoDescriptionSlice';

const VideoCard = (props) => {
    // console.log(props.info)
    const {snippet, statistics} = props.info;
    const {channelTitle, title, thumbnails} = snippet;
    const dispatch = useDispatch()

    const clickHandler = () => {
      dispatch(addData(props))
    }

  return (
    <div className="flex flex-col mx-2 mb-8 w-[22rem] cursor-pointer container rounded-xl hover:rounded-none " onClick={()=>clickHandler()}>
         <img className="rounded-xl hover:rounded-none w-[22rem]" alt="thumbnail" src={thumbnails.medium.url}/>
         <div className="flex flex-col w-30 overflow-hidden container">
            <span className="font-semibold w-full overflow-hidden h-12">{title}</span>
            <span className='text-[0.95rem] '>{channelTitle}</span>
            <span className='text-[0.95rem] '>{Math.round(statistics.viewCount/100000)}K views</span>
         </div>
    </div>
  )
}

export default VideoCard;