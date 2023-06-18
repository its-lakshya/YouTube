import React from "react";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

const Comments = ({ data }) => {
  const { name, text } = data;
  const isThemeDark = useSelector((store)=> store.theme.isThemeDark)
  return (
    <div className={"flex pt-5 bg-gray-100 m-2 p-1 " && (isThemeDark)?"bg-white bg-opacity-10 text-white":""}>
      <FaUserCircle className="text-2xl mt-1 " />
      <div>
        <p className="font-bold">{name}</p>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

export default Comments;
