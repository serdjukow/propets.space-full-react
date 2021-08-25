import React from "react";
import renderTime from "../utilits/time";

const CommentCard = ({ comment }) => {
  return (
    <>
      <div className="card-comments__subtitle">
        <span>{comment.User.nick || comment.User.fullName}</span> |{" "}
        <span>{renderTime(comment.createdAt)}</span>
      </div>
      <div className="card-comments__text">{comment.text}</div>
    </>
  );
};
export default CommentCard;
