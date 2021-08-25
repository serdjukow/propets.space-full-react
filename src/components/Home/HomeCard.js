import React from "react";
// import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import { addLike } from "../../store/action/posts";
import { defPhoto } from "../../store/url";
import renderTime from "../utilits/time";
import IsLike from "./IsLike";

const HomeCard = ({ post }) => {
  
  return (
    <article className="posts__cards posts services-cards">
      <div className="pet-avatar">
        <div className="posts__avatar pet-avatar__img">
          <img src={post.User.photo || defPhoto} alt="Pet avatar" />
        </div>
        <div className="pet-avatar__name">{post.User.nick||post.User.fullName}</div>
        <div className="pet-avatar__date">{renderTime(post.createdAt)}</div>
      </div>
      <div className="posts__card-img">
				<img src={post.photo ||null} alt=""/>
			</div>
      <div className="posts__text services-cards__text">
        <h3 className="posts__title">{post.title}</h3>
      </div>
      <div className="posts__card-details card-details">
        <NavLink
          to={`/Post/post/${post.id}`}
          className="card-details__link services-cards__details icon-chevron-double"
          data-open="Close"
          data-close="...view details"
          title="details"
        ></NavLink>
      </div>
     <IsLike id={post.id} like={post.like} />
    </article>
  );
};
export default HomeCard;
