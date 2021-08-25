import React from "react";
import LostFoundLogo from "../Logo/LostFoundLogo";

const LostFoundFormD = ({ changeField }) => {
  return (
    <>
      <div className="lost-page__items items-img">
        <img
          src="https://propets.space/prototype/images/dist/lost-form-img.png"
          alt="dog-walking"
        />
      </div>
      <div className="lost-page__items">
        <div className="lost-page__item">
          <label>
            Distinktive features:
            <span>up to 60 char</span>
          </label>
          <textarea
            rows="2"
            onChange={changeField}
            placeholder="blue collar with stars, no left ear, damaged tail."
            name="disFeatures"
          ></textarea>
        </div>
        <div className="lost-page__item">
          <label>
            Description:
            <span>up to 150 char</span>
          </label>
          <textarea
            rows="6"
            onChange={changeField}
            name="description"
            placeholder="brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox"
          ></textarea>
        </div>
        <div className="lost-page__item">
          <label>Location:</label>
          <textarea
            rows="2"
            onChange={changeField}
            name="location"
            placeholder="Oliver Platz, Berlin"
          ></textarea>
        </div>
        <div className="lost-page__item">
          <label>Photo:</label>
          <input
            type="text"
            onChange={changeField}
            placeholder="site.com/my-photo.img"
            name="photo"
          />
        </div>
      </div>
      <div className="lost-page__items">
        <div className="lost-page__item">
          <label>Contacts:</label>
          <div className="lost-page__item-container">
            <input
              type="tel"
              placeholder="Phone*"
              required
              name="phone"
              onChange={changeField}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={changeField}
            />
          </div>
        </div>
        <div 
        // className="lost-page__item"
        >
          <button 
          className="button blue icon-paw" 
          type="submit">
            <span className="text">Publish</span>
            {/* <LostFoundLogo /> */}
          </button>
        </div>
      </div>
    </>
  );
};
export default LostFoundFormD;
