import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";
import { BiMenu } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BsFillMicFill } from "react-icons/bs";
// import { BsThreeDotsVertical } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toggleTheme } from "../Utils/themeSlice";
import YoutubeDark from "../Assets/YouTubeLogoDark.png";
import YoutubeLight from "../Assets/YouTubeLogoLight.svg";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const isThemeDark = useSelector((store) => store.theme.isThemeDark);

  /*
    searchCache{
      "iphone":["iphone 11", "iphone 14"]
    }
    searchQuery:iphone
  */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        if (showSuggestions) getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };
  return (
    <div className={"flex justify-between h-16 pt-2 sticky z-50 top-0  bg-inherit w-full" }>
      <div className="flex cursor-pointer ">
        <BiMenu
          className="text-3xl ml-6 mt-1 mr-3"
          onClick={() => {
            toggleMenuHandler();
          }}
        />
        <Link to="/">
          {(!isThemeDark)&&
          (<img
            className="h-9 w-[7.5rem] mt-[0.09rem] mx-0 my-0 text-white"
            alt="logo"
            src={YoutubeLight}
          />)}
          {(isThemeDark)&&
          (<img
            className="h-5 w-[5.5rem] mt-[0.6rem] ml-3 mx-0 my-0 text-white"
            alt="logo"
            src={YoutubeDark}
          />)}
        </Link>
      </div>
      <div className="flex flex-row justify-between bg-inherit">
        <div className={"w-[42rem] flex h-10 "}>
          <input
            className={(isThemeDark?"w-[36rem] border border-gray-700 rounded-l-3xl pl-4 bg-inherit" :"w-[36rem] border border-gray-300 rounded-l-3xl pl-4 bg-inherit")}
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setShowSuggestions(false);
            }}
          />
          <button className={(isThemeDark? 'border  rounded-r-3xl flex w-16  bg-gray-900 hover:bg-gray-900 text-white  border-gray-700' : "border  rounded-r-3xl flex w-16  bg-gray-50 hover:bg-gray-200")}>
            {/* <BiSearch className="text-2xl p-1 border border-gray-600 rounded-r-2xl"/> */}
            <BiSearch className="mt-2 ml-5 text-2xl" />
          </button>
          <span className={(isThemeDark)?"w-10 h-10 ml-1 rounded-3xl hover:bg-gray-900":"w-10 h-10 ml-1 rounded-3xl hover:bg-gray-200"}>
            <BsFillMicFill className="ml-[0.60rem] mt-3 text-xl" />
          </span>
        </div>
        {showSuggestions && (
          <div className={"bg-inherit w-1/3 rounded-2xl shadow-lg mt-12  border border-gray-200 px-4 absolute" }>
            <ul className={"[&>*:hover]:bg-gray-200 cursor-default [&>*:hover]:w-full" }>
              {suggestions.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex justify-between">
        {(isThemeDark) && (<BsMoonStarsFill
          className="text-xl mt-3"
          onClick={()=>{toggleThemeHandler()}}
        />)}
        {(!isThemeDark) && (<BsFillSunFill
          className="text-xl mt-3"
          onClick={()=>{toggleThemeHandler()}}
        />)}
        
        <div className="flex border border-blue-400 ml-4 mt-1 h-9 mr-4 w-24 justify-center rounded-3xl text-blue-400">
          <BiUser className="mt-2 text-xl" />
          <span className="ml-2 mt-1">Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default Head;
