import React from "react";
import { useSelector } from "react-redux";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { BsFire } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { LuMusic2 } from "react-icons/lu";
import { BiMoviePlay } from "react-icons/bi";
import { FiRadio } from "react-icons/fi";
import { GrGamepad } from "react-icons/gr";
import { BiNews } from "react-icons/bi";
import { BsTrophy } from "react-icons/bs";
import { BsLightbulb } from "react-icons/bs";
import { BsEmojiSunglasses } from "react-icons/bs";


const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    
    //Earny return  
    if(isMenuOpen)
    return (
        <div className="shadow-lg flex justify-center" >
        <div className="">
            <div className="w-60 mt-1" >
                <ul className="ml-4 rounded-lg  w-52 [&>*]:flex [&>*]:h-10 [&>*]:[&>*]:mt-0 [&>*]:[&>*]:text-2xl [&>*]:[&>*]:mr-4 [&>*]:pt-2 [&>*]:[&>*]:ml-2" >                    
                    <li className="rounded-2xl hover:bg-gray-100 cursor-pointer"><BiHomeAlt2/>Home</li>
                    <li className="rounded-2xl hover:bg-gray-100 cursor-pointer"><BsLightningCharge/>Shorts</li>
                    <li className="rounded-2xl hover:bg-gray-100 cursor-pointer"><BsBookmarkCheck/>Subscriptions</li>
                </ul>
                    <hr className="mt-4"/>
                    <ul className="ml-4 mt-3 w-52 [&>*]:flex [&>*]:h-10 [&>*]:[&>*]:mt-0 [&>*]:[&>*]:text-2xl [&>*]:[&>*]:mr-4 [&>*]:pt-2 [&>*]:[&>*]:ml-2">
                    <li className="rounded-2xl hover:bg-gray-100 cursor-pointer"><MdOutlineVideoLibrary/>Library</li>
                    <li className="rounded-2xl hover:bg-gray-100 cursor-pointer"><GrHistory/>History</li>
                    </ul>
                    <hr className="mt-4" />
                <div className="mt-4">
                    <ul className="[&>*]:[&>*]:mt-1 ml-4  w-52 [&>*]:flex [&>*]:h-10 [&>*]:[&>*]:text-2xl [&>*]:[&>*]:mr-4 [&>*]:pt-2 [&>*]:[&>*]:ml-2">
                        <li className="text-[18px] ml-3">Explore</li>
                        <li className="rounded-2xl hover:bg-gray-100 cursor-pointer"><BsFire/>Trending</li>
                        <li className="rounded-2xl hover:bg-gray-100 cursor-pointer"><BiShoppingBag/>Shoping</li>
                        <li className="rounded-2xl hover:bg-gray-100 cursor-pointer"><LuMusic2/>Music</li>
                        <li className="rounded-2xl hover:bg-gray-100 cursor-pointer"><BiMoviePlay/>Movies</li>
                        <li className="rounded-2xl hover:bg-gray-100 cursor-pointer"><FiRadio/>Live</li>
                        <li className="rounded-2xl hover:bg-gray-100 cursor-pointer"><GrGamepad/>Gaming</li>
                        <li className="rounded-2xl hover:bg-gray-100 cursor-pointer"><BiNews/>News</li>
                        <li className="rounded-2xl hover:bg-gray-100 cursor-pointer"><BsTrophy/>Sports</li>
                        <li className="rounded-2xl hover:bg-gray-100 cursor-pointer"><BsLightbulb/>Learning</li>
                        <li className="rounded-2xl hover:bg-gray-100 cursor-pointer"><BsEmojiSunglasses/>Fashion & Beauty</li>
                        <hr className="mt-4 "/>
                    </ul>

                    
                </div>
            </div>
        </div>
        </div>
    );
    return null;
}

export default Sidebar;