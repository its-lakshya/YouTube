import React from "react";

const Button = ({ name }) => {
  return (
      <button className="bg-gray-100 py-1 px-2 rounded-lg mx-2 hover:bg-gray-200">{name}</button>
  );
};

export default Button;
