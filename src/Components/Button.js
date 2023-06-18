import React from "react";
import { useSelector } from "react-redux";

const Button = ({ name }) => {
  const isThemeDark = useSelector((store)=>store.theme.isThemeDark)
  return (
    <button
      className={(isThemeDark)?"bg-gray-700 py-1 px-2 rounded-lg mx-2 hover:bg-gray-600 ": "bg-gray-100 py-1 px-2 rounded-lg mx-2 hover:bg-gray-200 "}
    >
      {name}
    </button>
  );
};

export default Button;
