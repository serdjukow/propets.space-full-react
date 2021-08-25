import React from "react";
import { useDispatch } from "react-redux";
import { addLike } from "../../store/action/posts";


const IsLike = ({ like, id }) => {
  const dispatch = useDispatch();
  const addLikePost = (like, id) => {
    like++;
    dispatch(addLike(like, id));
  };

  return (
    <div className="posts__card-details-like">
      <span className="icon-thumbs-up" onClick={() => addLikePost(like, id)}>
        {like}
      </span>
    </div>
  );
};
export default IsLike;
