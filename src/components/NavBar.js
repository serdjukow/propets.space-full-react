import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { serviceId } from "../store/typeList";
import { navContext } from "./App";

const NavBar = () => {
  const { isChangeActinve, setIsChangeActive } = useContext(navContext);

  const changeActiv = () => {
    setIsChangeActive(!isChangeActinve);
  };

  useEffect(() => {
    let active = document.querySelector(".navigation__list .active");
    if (active) {
      active.parentElement.classList.add("_active");
    }
  }, []);

  useEffect(() => {
    let active = document.querySelector(".navigation__list .active");
    let lis = document.querySelectorAll(".navigation__list>li");
    for (let li of lis) {
      li.classList.remove("_active");
    }
    if (active) {
      active.parentElement.classList.add("_active");
    }
  }, [isChangeActinve]);

  const renderBurger = () => {
    const active = document.querySelectorAll("#left, #burg, #right");
    console.log(active);
    for (let elem of active) {
      elem.classList.toggle("_active");
    }
  };

  return (
    <aside className="home-page__sidebar-left" id="left">
      <nav className="home-page__navigation navigation">
        <div className="menu-button" id="burg" onClick={renderBurger}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="navigation__list" id="top">
          <li className="navigation__li">
            <NavLink
              to="/Post"
              className="navigation__link icon-home"
              onClick={changeActiv}
            >
              Home
            </NavLink>
          </li>
          <li className="navigation__li">
            <NavLink
              to="/lost"
              className="navigation__link icon-search"
              onClick={changeActiv}
            >
              Lost
            </NavLink>
          </li>
          <li className="navigation__li">
            <NavLink
              to="/found"
              className="navigation__link icon-paw"
              onClick={changeActiv}
            >
              Found
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className="home-page__navigation navigation nav-services">
        <div className="nav-services__title-container">
          <h4 className="nav-services__title">Services</h4>
        </div>
        <ul className="navigation__list">
          <li className="navigation__li">
            <NavLink
              to={`/${serviceId[0]}`}
              className="navigation__link icon-hotel"
              onClick={changeActiv}
            >
              {serviceId[0]}
            </NavLink>
          </li>
          <li className="navigation__li">
            <NavLink
              to={`/${serviceId[1]}`}
              className="navigation__link icon-walking"
              onClick={changeActiv}
            >
              {serviceId[1]}
            </NavLink>
          </li>
          <li className="navigation__li">
            <NavLink
              to={`/${serviceId[2]}`}
              className="navigation__link icon-dog"
              onClick={changeActiv}
            >
              {serviceId[2]}
            </NavLink>
          </li>
          <li className="navigation__li">
            <NavLink
              to={`/${serviceId[3]}`}
              className="navigation__link icon-stethoscope"
              onClick={changeActiv}
            >
              {serviceId[3]}
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default NavBar;
