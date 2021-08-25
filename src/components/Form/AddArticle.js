import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { addArticle } from '../../store/action/service';
import { getUserById } from '../../store/action/user';
import { serviceId } from '../../store/typeList';
import { defPhoto } from '../../store/url';
import { navContext } from '../App';

const AddArticle=()=>{

    const { isNav, setIsNav, isLostFound, setIsLostFound } =
    useContext(navContext);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const location=useLocation()
  const idx=serviceId.findIndex(ser=>ser===location.pathname.split("/")[1])
  const [isField, setIsField] = useState({
    title: "",
    text: "",
    photo: "",
    serviceId: idx+1
  });

  const changeField = (event) => {
    setIsField({ ...isField, [event.target.name]: event.target.value });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    dispatch(addArticle(isField));
    setTimeout(() => {
      history.push(`/${serviceId[idx]}`);
    }, 1000);
  };

  useEffect(() => {
    if (!isNav) {
      setIsNav(true);
    }
    if (isLostFound) {
      setIsLostFound(false);
    }
    if (localStorage.userId) {
      dispatch(getUserById(localStorage.userId));
    } else {
      history.push("/sign_in");
    }
  }, []);

    return(<div className="home-page__container">
    <h2 className="home-page__title">
      Your new post about {serviceId[idx].toLowerCase()}! Simply text, add photo and publish.
    </h2>
    <div className="home-page__row add-page">
      <div className="add-page__content">
        <form
          action="#"
          id="form"
          className="add-page__form"
          onSubmit={submitHandle}
        >
          <div className="add-page__items">
            <div className="add-page__item">
              <label>Title</label>
              <input
                name="title"
                placeholder="The quick, brown fox jumps"
                onChange={changeField}
                required
              />
            </div>
            <div className="add-page__item">
              <label>
                Text:
                <span>up to 1500 char</span>
              </label>
              <textarea
                name="text"
                rows="15"
                required
                onChange={changeField}
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
              ></textarea>
            </div>

            <div className="add-page__item">
              <label>Photo:</label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                onChange={changeField}
              />
            </div>
          </div>

          <div className="add-page__items">
            <div
            //   className="add-page__item"
            >
              <div className="pet-avatar">
                <div className="pet-avatar__img">
                  <img src={user.photo || defPhoto} alt="Pet avatar" />
                </div>
                <div className="pet-avatar__name">{user.nick||user.fullName}</div>
              </div>
              <button className="button blue icon-paw" type="submit">
                <span className="text">Publish</span>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.404 23h-2.808l-.96-2h4.728l-.96 2zm-8.323-7.365c-1.218 1.202-2.081 3.377-2.081 5.696 0 .884.127 1.789.405 2.669.255-1.837 1.122-3.2 3.162-3.773-.634-1.402-1.154-2.949-1.486-4.592zm13.83-.01c-.371 1.772-.92 3.333-1.477 4.602 2.039.573 2.906 1.936 3.161 3.773.278-.88.405-1.785.405-2.67 0-2.324-.867-4.504-2.089-5.705zm-6.926-15.625c-7.076 6.157-5.909 14.779-3.324 20h6.685c2.59-5.483 3.765-13.883-3.361-20zm.015 14c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm0-4c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z" />
                </svg> */}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>)
}
export default AddArticle