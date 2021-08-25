import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getFoundPets } from "../../store/action/found";
import { navContext } from "../App";
import CardFoundPet from "./CardFoundPet";

const FoundPets = () => {
  const { isNav, setIsNav, isLostFound, setIsLostFound } =
    useContext(navContext);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isNav) {
      setIsNav(true);
    }
    if (!isLostFound) {
      setIsLostFound(true);
    }
    dispatch(getFoundPets());
  }, []);

  const list = useSelector((state) => {
    return state.foundsPets.list;
  });

  const renderCard = () => {
    return list.length ? (
      list.map((pet) => (
        <CardFoundPet
          key={pet.id}
          photo={pet.photo}
          type={pet.type}
          location={pet.location}
          id={pet.id}
        />
      ))
    ) : (
      <div>No pets found</div>
    );
  };

  return (
    <div className="wrapper">
      <section className="home-page__content">
        <div className="home-page__container found-pets">
          <h2 className="home-page__title">Found pets</h2>
          <div className="home-page__info-link info-link">
            Would you like to publish NavLink post?{" "}
            <NavLink to="/sign_in">join</NavLink> to our community!
          </div>
          <div className="home-page__row cards">{renderCard()}</div>
        </div>
      </section>
    </div>
  );
};
export default FoundPets;
