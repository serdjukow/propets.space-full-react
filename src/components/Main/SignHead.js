import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { doSignOut, getUserById } from "../../store/action/user";
import { defAvatar } from "../../store/url";
import Logo from "../Logo/Logo";
import SignInButton from "./SignInButton";

const SignHead = () => {
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

  return (
    <header className="header">
      <div className="header-row _container">
        <div className="header-logo logo logo-white">
          <Logo />
        </div>
        <div className="header__buttons">
          {tokenIsValid ? (
            <>
              <NavLink
                to="#"
                className="user-card__logout icon-sign-out-alt"
                onClick={() => logOut()}
              >
                <span>Logout</span>
              </NavLink>
              <div className="user-card">
                <div className="user-card__info">
                  <div className="user-card__img">
                    <img src={user.avatar || defAvatar} alt="" />
                  </div>
                  <div className="user-card__name">
                    {user.fullName.split(" ")[0]}
                  </div>
                  <div className="user-card__name">
                    {user.fullName.split(" ")[1]||null}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </header>
  );
};
export default SignHead;
