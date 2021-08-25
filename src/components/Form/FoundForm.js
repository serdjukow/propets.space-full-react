import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPet } from "../../store/action/found";
import { navContext } from "../App";

import { init } from "../utilits/select";
import LostFoundFormD from "./LostFoundFormD";
import LostFoundFormU from "./LostFoundFormU";

const FoundForm = () => {
  const {
    isNav,
    setIsNav,
    isLostFound,
    setIsLostFound,
    isChangeActinve,
    setIsChangeActive,
  } = useContext(navContext);

  const [isChangeField, setIsChangeField] = useState({
    lostFound: "found",
    type: "",
    sex: "",
    breed: "",
    nick: "",
    color: "",
    height: "",
    disFeatures: "",
    description: "",
    location: "",
    photo: "",
    phone: "",
    email: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const changeField = (event) => {
    setIsChangeField({
      ...isChangeField,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    dispatch(addPet(isChangeField));
    setTimeout(() => {
       history.push("/found");
    }, 1000);
  };

  useEffect(() => {
    if (!isNav) {
      setIsNav(true);
    }
    if (!isLostFound) {
      setIsLostFound(true);
    }
    setIsChangeActive(!isChangeActinve);
    // init();
  }, []);

  return (
    <div className="home-page__container">
      <h2 className="home-page__title">
        Found a pet? Please complete the form to help.
      </h2>
      <div className="home-page__row lost-page">
        <div className="lost-page__content">
          <form action="#" id="form" className="lost-page__form" onSubmit={submitHandle}>
            <div className="lost-page__items">
              <div className="lost-page__item form__item">
                <label>Lost/Found</label>
                <select
                  className="form__select"
                  name="lostFound"
                  onChange={changeField}
                  value="found"
                >
                  <option defaultValue value="found">
                    Found
                  </option>
                </select>
              </div>
              <LostFoundFormU changeField={changeField} />
            </div>
            <LostFoundFormD changeField={changeField} />
          </form>
        </div>
      </div>
    </div>
  );
};
export default FoundForm;
