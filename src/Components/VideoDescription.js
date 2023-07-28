import React from 'react';
import { useSelector } from 'react-redux';

const VideoDescription = () => {
    const data = useSelector((store) => store?.VideoDescription?.data)
    const themeDark = useSelector((store) => store?.theme?.isThemeDark)
    console.log(themeDark)


    return (
        <div className='w-full '>
            <div className='text-xl font-semibold mt-3'>{data.info.snippet.title}</div>
            <div className='text-lg font-normal mt-3 cursor-pointer'>{data.info.snippet.channelTitle}
            <button className= {themeDark ? 'mx-8 rounded-3xl text-base w-24 h-10 bg-white text-black'
            : 'mx-8 rounded-3xl text-base w-24 h-10 bg-black text-white' }>Subscribe</button>
            {themeDark}
            </div>
        </div>
    )


}

export default VideoDescription