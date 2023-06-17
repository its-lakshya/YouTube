import React, { useState, useMemo } from "react";
import { findPrime } from "../Utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const prime = useMemo(()=>findPrime(text),[text]) ;  // useMemo caches the result of a calculation between re-renders whereas useCallback caches the function defination between re-renders 
  console.log("Render")
  return (
    <div
      className={
        "m-2 p-2 border border-black justify-start h-96 w-96" +
        (isDarkTheme && "m-0 bg-black text-white")
      }
    >
      <div>
        <button className="m-2 p-2 bg-green-200" onClick={()=>{
            setIsDarkTheme(!isDarkTheme)
        }}>toggle</button>
        <input
          className="border border-black w-72"
          type="number"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="font-bold text-xl">
        <h1>nth Prime : {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
