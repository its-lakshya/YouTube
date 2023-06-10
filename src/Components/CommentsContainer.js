import React from "react";
import Comments from "./Comments";

const commentsData = [
  {
    name: "Lakshya Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Lakshya Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Lakshya Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Lakshya Kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Lakshya Kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Lakshya Kumar",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
          {
            name: "Lakshya Kumar",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Lakshya Kumar",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Lakshya Kumar",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                  {
                    name: "Lakshya Kumar",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Lakshya Kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Lakshya Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Lakshya Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
        <Comments data={comment}  />
        <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.replies}/>
        </div>

    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="p-7 ">
      <h1 className="font-bold text-2xl ">Comments :</h1>
      {/* <Comments data={commentsData[0]}/> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
