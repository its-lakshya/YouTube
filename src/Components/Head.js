import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";

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
        getSearchSuggestions();
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
    <div className="grid grid-flow-col p-2  shadow-lg justify-between">
      <div className="flex flex-row cursor-pointer">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-10 mx-2 col-span-1"
          alt="menu"
          src="https://icon-library.com/images/hamburger-menu-icon-svg/hamburger-menu-icon-svg-8.jpg"
        />
        <img
          className="h-6 mx-2.5 my-1.5"
          alt="logo"
          src="https://www.caffelena.org/wp-content/uploads/2019/10/new-youtube-logo-e1570929090859-1024x256.jpg"
        />
      </div>
      <div className="col-span-10">
        <div>
          <input
            className="w-1/2 border border-gray-600 rounded-l-2xl p-1.5 px-4"
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
          <button className="p-2.5  border border-gray-600 rounded-r-2xl">
            <img
              className="w-4"
              alt="search-btn"
              src="https://www.downloadclipart.net/large/search-button-png-image-free-download.png"
            />
          </button>
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
      <div>
        <img
          className="h-10 col-span-1"
          alt="user"
          src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
