import React from "react";
import { useDispatch } from "react-redux";
import {toggleMenu} from "../Utils/appSlice"


const Head = () => {
  const dispatch  = useDispatch();
  const toggleMenuHandler = ()=> {
    dispatch(toggleMenu())

  }
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg justify-between">
      <div className="flex flex-row cursor-pointer">
        <img
        onClick = {() => {
          toggleMenuHandler()
        }}
        className="h-12 col-span-1"
          alt="menu"
          src="https://icon-library.com/images/hamburger-menu-icon-svg/hamburger-menu-icon-svg-8.jpg"
        />
        <img
        className="h-8 mx-2 my-1.5"
          alt="logo"
          src="https://www.caffelena.org/wp-content/uploads/2019/10/new-youtube-logo-e1570929090859-1024x256.jpg"
        />
      </div>
      <div className="col-span-10">
        <input className="w-1/2 border border-gray-600 rounded-l-2xl p-1.5" type="text" />
        <button className="p-2.5  border border-gray-600 rounded-r-2xl"><img className="w-4" alt="search-btn" src="https://www.downloadclipart.net/large/search-button-png-image-free-download.png"/></button>
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
