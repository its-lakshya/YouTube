import React, { useState } from "react";
import Head from "./Head";
import Body from "./Body";
import { useSelector } from "react-redux";

const AppLayout = () => {
  const isThemeDark = useSelector((store) => store.theme.isThemeDark);

    return (
      <div className={"flex flex-col bg-black w-full" &&(isThemeDark? 'bg-black text-white' : "bg-white") }>
        <Head />
        <Body />
      </div>
    );
 
};

export default AppLayout;
