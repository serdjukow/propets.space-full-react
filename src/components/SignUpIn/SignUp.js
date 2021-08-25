import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { doSignUp } from "../../store/action/user";

const SignUp = () => {
  const [isField, setIsField] = useState({});

  const dispatch = useDispatch();

  const history = useHistory();

  const isChangeField = (event) => {
    setIsField({ ...isField, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (isField.password === isField.password_checking) {
      let _isField = { ...isField };
      delete _isField.password_checking;
      dispatch(doSignUp(_isField));
      history.push('/Post')
    } else {
      console.log("пароли не совпали");
    }
  };

  return (
    <form className="modal__form form-sign-up" onSubmit={submitForm}>
      <div className="modal__form-header">
        <div className="modal__form-items">
          <div className="modal__form-item">
            <label>Name:</label>
            <input
              type="text"
              name="fullName"
              placeholder="Helen Johnson"
              required
              onChange={isChangeField}
            />
          </div>
          <div className="modal__form-item">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="helenjohnson@gmail.com"
              required
              onChange={isChangeField}
            />
          </div>
          <div className="modal__form-item">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="**********"
              required
              onChange={isChangeField}
            />
          </div>
          <div className="modal__form-item">
            <label>Password:</label>
            <input
              type="password"
              name="password_checking"
              placeholder="**********"
              required
              onChange={isChangeField}
            />
          </div>
        </div>
        <div className="modal__form-items text">
          <p>
            Password must have at least 8 characters with at least one Capital
            letter, at least one lower case letter and at least one number or
            special character.
          </p>
          <p>Please re-enter your password</p>
        </div>
      </div>
      <div className="modal__form-footer">
        <div className="modal__form-these-terms">
          By clicking “Submit”, you agree to us processing your information in
          accordance with
          <NavLink to="">these terms</NavLink>.
        </div>

        <div className="modal__form-buttons">
          <div
            className="button border-blue modal__close"
            aria-label="Close modal"
            data-micromodal-close
            onClick={() => {
              history.push("/");
            }}
          >
            Cancel
          </div>
          <button className="button blue icon-paw" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
export default SignUp;
