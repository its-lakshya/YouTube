import React from "react";

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex pt-5 bg-gray-100 m-2 p-1 ">
      <img
        className="w-12 mr-2 my-2"
        alt="user"
        src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

export default Comments;
