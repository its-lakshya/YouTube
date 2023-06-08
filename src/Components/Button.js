import React from "react";

const Button = ({ name }) => {
  return (
      <button className="bg-gray-300 py-1 px-2 rounded-lg mx-2">{name}</button>
  );
};

export default Button;
