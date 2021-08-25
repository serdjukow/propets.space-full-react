import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFoundPetById } from "../../store/action/found";
import { defPhoto } from "../../store/url";
import { navContext } from "../App";
import renderTime from "../utilits/time";

const PetFound = () => {
  const { isNav, setIsNav, isLostFound, setIsLostFound } =
    useContext(navContext);
  const { id } = useParams();
  const pet = useSelector((state) => state.foundsPets.petById);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isNav) {
      setIsNav(true);
    }
    if (!isLostFound) {
      setIsLostFound(true);
    }
    dispatch(getFoundPetById(id));
  }, []);

  return (
    <div className="home-page__container hotels">
      <h2 className="home-page__title">
        Found pet:{" "}
        <span className="pet-type">
          {pet.nick ? pet.nick : "Not indicated"}
        </span>
        <span className="card-address icon-map-marker">
          {pet.location ? pet.location : "Not indicated"}
        </span>
      </h2>
      <div className="home-page__row hotels__content">
        <article className="card card-more">
          <div
            className="card-more__img"
            style={{
              backgroundImage: `url(${pet.photo || defPhoto})`,
            }}
          ></div>
          <div className="card-more__info">
            <h3 className="card-more__title">
              <span>{pet.type ? pet.type : "Not indicated"}</span>,{" "}
              <span>{pet.breed ? pet.breed : "Not indicated"}</span>
            </h3>
            <div className="card-more__date">
              {" "}
              {renderTime(pet.createdAt) || "Not indicated"}
            </div>
            <div className="card-more__item">
              <span>Color:</span> {pet.color ? pet.color : "Not indicated"}
            </div>
            <div className="card-more__item">
              <span>Sex:</span> {pet.sex ? pet.sex : "Not indicated"}
            </div>
            <div className="card-more__item">
              <span>Height:</span> {pet.height ? pet.height : "Not indicated"}
            </div>
            <div className="card-more__item">
              <span>Distinctive features:</span>{" "}
              {pet.disFeatures ? pet.disFeatures : "Not indicated"}
            </div>
          </div>
          <div className="card-more__description">
            <div className="card-more__item">
              <span>Description:</span>{" "}
              {pet.description ? pet.description : "Not indicated"}
            </div>
          </div>
          <div className="card-more__contact">
            <div className="card-more__item">
              <span>Phone:</span>
              <a href="tel:+">{pet.phone ? pet.phone : "Not indicated"}</a>
            </div>
            <div className="card-more__item">
              <span>e-mail::</span>
              <a href="mailto:anna@mail.com">
                {pet.email ? pet.email : "Not indicated"}
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
export default PetFound;
