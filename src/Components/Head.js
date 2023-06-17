import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";
import { BiMenu } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BsFillMicFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

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
    console.log(json[1]);
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
  return (
    <div className="flex justify-between h-14 mt-2 relative">
      <div className="flex cursor-pointer ">
        <BiMenu
          className="text-3xl ml-6 mt-1 mr-3"
          onClick={() => {
            toggleMenuHandler();
          }}
        />
        <img
          className="h-6 mx-2.5 my-1.5"
          alt="logo"
          src="https://www.caffelena.org/wp-content/uploads/2019/10/new-youtube-logo-e1570929090859-1024x256.jpg"
        />
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-[42rem] flex h-10 ">
          <input
            className="w-[36rem] border border-gray-300 rounded-l-2xl "
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
          <button className=" border border-gray-300 rounded-r-2xl flex w-16 bg-gray-50 hover:bg-gray-200">
            {/* <BiSearch className="text-2xl p-1 border border-gray-600 rounded-r-2xl"/> */}
            <BiSearch className="mt-2 ml-5 text-2xl" />
          </button>
          <span className=" w-10 h-10 ml-1 rounded-3xl hover:bg-gray-200">
            <BsFillMicFill className="ml-2 mt-3 text-xl" />
          </span>
        </div>
        {showSuggestions && (
          <div className="bg-white w-1/3 rounded-lg shadow-lg my-2 border border-gray-100 px-4 absolute">
            <ul className="[&>*:hover]:bg-gray-200">
              {suggestions.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <BsThreeDotsVertical className="text-xl mt-3" />
        <div className="flex border border-gray-200 ml-4 mt-1 h-9 mr-4 w-24 justify-center rounded-3xl">
        <BiUser className="mt-2 text-xl" /> 
        <span className="ml-2 mt-1" >Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default Head;
