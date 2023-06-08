import React from "react";
import { useSelector } from "react-redux";


const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    
    //Earny return  
    if(!isMenuOpen) return null;
    return (
        <div className="col-span-1 shadow-lg">
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
            <h1 className="font-bold text-lg mt-4">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className="font-bold text-lg mt-4">Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Shoping</li>
                <li>Music</li>
                <li>Movies</li>
                <li>Live</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Sports</li>
                <li>Learning</li>
            </ul>
        </div>
    )
}

export default Sidebar;