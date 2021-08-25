import React from "react";
import { NavLink } from "react-router-dom";

const CardLostPet = ({ type, location, photo, id }) => {
  return (
    <article className="card">
      <div className="card__info-hover icon-map-marker">{" "}{location}</div>
      <span className="card__category">Lost</span>
      <div className="card__img"></div>
      <div
        className="card__img--hover"
        style={{
          backgroundImage: `url(${
            photo ||
            "https://www.abbeyvetgroupbarnsley.co.uk/wp-content/uploads/2014/09/dog-avatar.png"
          })`,
        }}
      ></div>
      <div className="card__info">
        <h3 className="card__title">{type}</h3>
        <div className="card-details">
          <span>View </span>
          <NavLink
            to={`/lost/${id}`}
            className="card-details__link icon-chevron-double"
            title="View details"
          >
            details
          </NavLink>
        </div>
      </div>
    </article>
  );
};
export default CardLostPet;
