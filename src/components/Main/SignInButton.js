import React from "react";
import { useHistory } from "react-router-dom";

const SignInButton = () => {
  const history = useHistory();

  const goToSign = () => {
    history.push("/sign_in");
  };
  
  return (
    <div className="header__buttons">
      <button
        className="header__button button"
        data-micromodal-open="modal-1"
        onClick={() => goToSign()}
      >
        Sign in
      </button>
    </div>
  );
};
export default SignInButton;
