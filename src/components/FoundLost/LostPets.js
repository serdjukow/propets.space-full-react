import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getLostPets } from "../../store/action/lost";
import { navContext } from "../App";
import CardLostPet from "./CardLostPet";

const LostPets = () => {
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
dispatch(getLostPets())
  },[]);

  const list =useSelector(state=>state.lostsPets.list)

  const renderCard = () => {
    return list.length ? (
      list.map((pet) => (
        <CardLostPet
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
    <div className="home-page__container">
      <h2 className="home-page__title">Lost pets</h2>
      <div className="home-page__info-link info-link">
        Would you like to publish NavLink post?{" "}
        <NavLink to="/sign_in">join</NavLink> to our community!
      </div>
      <div className="home-page__row cards">
        {renderCard()}
      </div>
    </div>
  );
};
export default LostPets;
