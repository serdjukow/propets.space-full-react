import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../../store/action/user";
import { navContext } from "../App";

const EditProfile = () => {
  const { id } = useParams;
  const { isNav, setIsNav } = useContext(navContext);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const tokenIsValid = useSelector((state) => state.users.tokenIsValid);
  const [changeField, setChangeField] = useState({ ...user });
  const history = useHistory();
  const [isChangeName, setIsChangeName] = useState(false);

  useEffect(() => {
    if (!isNav) {
      setIsNav(true);
    }
    if (localStorage.token && localStorage.userId) {
      dispatch(getUserById(id));
    } else {
      history.push("/sign_in");
    }
  }, []);

  useEffect(() => {
    if (localStorage.token && localStorage.userId) {
      dispatch(getUserById(id));
    } else {
      history.push("/sign_in");
    }
  }, [tokenIsValid]);

  useEffect(() => {
    setChangeField({ ...user });
  }, [user.id]);
  const changeHandle = (event) => {
    setChangeField({ ...changeField, [event.target.name]: event.target.value });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    dispatch(updateUser(changeField));
    window.history.back();
  };

  return (
    <div className="home-page__container my-profile__content">
      <h2 className="home-page__title">
        Your profile. Change, edit and manage your data.
      </h2>
      <div className="home-page__row ">
        <div className="my-profile__title">
          <h3>My profile</h3>
        </div>

        <form className="my-profile__user-form" onSubmit={submitHandle}>
          <div className=" my-profile__user-information">
            <div className="my-profile__user-information-img">
              <img
                src={
                  user.avatar ||
                  "https://delawarehumane.org/wp-content/uploads/2016/06/Dog-Paw.png"
                }
                alt=""
              />
            </div>
            {isChangeName ? (
              <div className="my-profile__user-information-name icon-pencil-alt">
                <input
                  type="text"
                  defaultValue={user.fullName || "Enter your name"}
                />
              </div>
            ) : (
              <div
                className="my-profile__user-information-name icon-pencil-alt"
                onClick={() => setIsChangeName(true)}
              >
                {" "}
                {user.fullName || "Enter your name"}
              </div>
            )}
          </div>
          <div className="my-profile__user-date">
            <label htmlFor="">Email:</label>
            <input type="text" defaultValue={user.email} readOnly disabled />
          </div>
          <div className="my-profile__user-date">
            <label htmlFor="">Phone:</label>
            <input
              type="text"
              defaultValue={user.phone || "No phone"}
              name="phone"
              onChange={changeHandle}
            />
          </div>
          <div className="my-profile__user-date">
            <label htmlFor="">Avatar:</label>
            <input
              type="text"
              defaultValue={user.avatar}
              name="avatar"
              onChange={changeHandle}
            />
          </div>
          <div className="my-profile__user-date-container">
            <div className="my-profile__user-date-container-form">
              <div className="my-profile__user-date">
                <label htmlFor="">My pet:</label>
                <input
                  type="text"
                  defaultValue={user.pet || "No pet"}
                  name="pet"
                  onChange={changeHandle}
                />
              </div>
              <div className="my-profile__user-date">
                <label htmlFor="">Nick:</label>
                <input
                  type="text"
                  defaultValue={user.avatar || "no nick"}
                  name="nick"
                  onChange={changeHandle}
                />
              </div>
              <div className="my-profile__user-date">
                <label htmlFor="">Photo:</label>
                <input
                  type="text"
                  defaultValue={user.photo}
                  name="photo"
                  onChange={changeHandle}
                />
              </div>
            </div>
            <div className="my-profile__user-date-container-img">
              <img
                src={
                  user.photo ||
                  "https://www.abbeyvetgroupbarnsley.co.uk/wp-content/uploads/2014/09/dog-avatar.png"
                }
                alt=""
              />
            </div>
          </div>

          <div className="my-profile__user-date-buttons">
            <div
              className="button border-blue"
              onClick={() => {
                window.history.back();
              }}
            >
              Cancel
            </div>
            <button className="button blue icon-save" type="submit">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditProfile;
