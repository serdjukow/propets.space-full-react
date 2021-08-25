import React from "react";

const LostFoundFormU = ({ changeField }) => {
  return (
    <>
      <div className="lost-page__item">
        <label>Nickname:</label>
        <input
          type="text"
          placeholder="Uncle Sam"
          name="nick"
          onChange={changeField}
        />
      </div>
      <div className="lost-page__item">
        <label>Type:</label>
        <input
          type="text"
          placeholder="Dog"
          name="type"
          onChange={changeField}
        />
      </div>
      <div className="lost-page__item">
        <label>Sex:</label>
        <select className="form__select" name="sex" onChange={changeField}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="lost-page__item">
        <label>Breed:</label>
        <input
          type="text"
          placeholder="Golden Retriever"
          onChange={changeField}
          name="breed"
        />
      </div>
      <div className="lost-page__item">
        <label>Color:</label>
        <input
          type="text"
          placeholder="Beige"
          name="color"
          onChange={changeField}
        />
      </div>
      <div className="lost-page__item">
        <label>Height:</label>
        <select className="form__select" name="height" onChange={changeField}>
          <option value="45-75 cm">45-75 cm</option>
          <option value="75-100 cm">75-100 cm</option>
        </select>
      </div>
    </>
  );
};
export default LostFoundFormU;
