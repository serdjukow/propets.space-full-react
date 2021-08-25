import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const SignUpIn = () => {

    useEffect(()=>{document.getElementById('form-sign-in').checked=true},[])

  return (
    <div className="modal micromodal-slide" id="modal-1" aria-hidden="true" style={{display:"block"}}>
      <div className="modal__overlay" tabIndex="-1" data-micromodal-close>
        <div
          className="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-1-title"
        >
          <div className="modal__header">
            <NavLink to="/" className="modal__header-logo logo-blue logo">
              <Logo/>
            </NavLink>
            <div className="modal__title">
              <span>Welcome!</span> Please sign in / sign up to continue or
            </div>
            <div className="modal__wrapper">
              <input type="radio" name="slider"  id="form-sign-up" />
              <input type="radio" name="slider" id="form-sign-in" />
              <nav>
                <label htmlFor="form-sign-up" className="form-sign-up">
                  Sign up
                </label>
                <label htmlFor="form-sign-in" className="form-sign-in">
                  Sign in
                </label>
                <div className="slider"></div>
              </nav>
              <div className="modal__content">
                <SignUp/>
                <SignIn/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpIn;
