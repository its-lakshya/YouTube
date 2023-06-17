import React, { useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;
  const [y,setY] = useState(0)
  const ref = useRef(0)  //useRef is a React Hook that lets you reference a value that’s not needed for rendering.


  return (
    <div className="m-2 p-2 bg-slate-200 border border-black w-96 h-96">
      <div className="flex flex-col">
        <button className="bg-green-200 rounded-lg border border-black " 
        onClick={()=>{
            x=x+1 
            console.log(x)
        }}>
          Increase let
        </button>
        <span className="font-bold text-xl mx-2">Let = {x}</span>
        <button className="bg-green-200 rounded-lg border border-black " 
        onClick={()=>{
            setY(y+1) 
            console.log(y)
        }}>
          Increase state
        </button>
        <span className="font-bold text-xl mx-2">state = {y}</span>
        <button className="bg-green-200 rounded-lg border border-black " 
        onClick={()=>{
            ref.current=ref.current+1
            console.log(ref)
        }}>
          Increase ref
        </button>
        <span className="font-bold text-xl mx-2">Ref = {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
