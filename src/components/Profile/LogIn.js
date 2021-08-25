import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { doSignOut, getUserById } from "../../store/action/user";
import { defAvatar } from "../../store/url";
import SignInButton from "../Main/SignInButton";

const LogIn = () => {
  const id = 1;

  const history = useHistory();
  const user = useSelector((state) => state.users.user);
  const tokenIsValid = useSelector((state) => state.users.tokenIsValid);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.token && localStorage.userId) {
      dispatch(getUserById(localStorage.userId));
    }
  }, []);

  useEffect(() => {
    if (localStorage.token && localStorage.userId) {
      dispatch(getUserById(localStorage.userId));
    }
  }, [tokenIsValid]);

  const logOut = () => {
    dispatch(doSignOut());
  };

  const renderCard = () => {
    return user.id ? (
      <>
        <div
          className="user-card__info"
          onClick={() => {
            history.push(`/edit_profile/${id}`);
          }}
        >
          <div className="user-card__img">
            <img src={user.avatar || defAvatar} alt="" />
          </div>
          <div className="user-card__name">
            {user.fullName.split(" ")[0] || null}
          </div>
          <div className="user-card__name">
            {user.fullName.split(" ")[1] || null}
          </div>
        </div>
        <NavLink
          to="#"
          className="user-card__logout icon-sign-out-alt"
          onClick={() => logOut()}
        >
          Logout
        </NavLink>
      </>
    ) : null;
  };

  return (
    <aside className="home-page__sidebar-right" id="right">
      <div className="user-card">{tokenIsValid ? renderCard() : null}</div>
    </aside>
  );
};
export default LogIn;
