import React from "react";
import { useSelector } from "react-redux";

const Button = ({ name }) => {
  const isThemeDark = useSelector((store)=>store.theme.isThemeDark)
  return (
    <button
      className={(isThemeDark)?"px-2 bg-gray-700 py-1 rounded-lg hover:bg-gray-600 ": "px-2 bg-gray-100 py-1 rounded-lg hover:bg-gray-200 "}
    >
      {name}
    </button>
  );
};

export default Button;
