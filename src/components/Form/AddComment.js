import React from "react";

const AddComment = ({ submitHandle, isField, cangeField }) => {
  return (
    <form className="card-comments__form" onSubmit={submitHandle}>
      <div className="card-comments__item">
        <input
          type="text"
          placeholder="type your comment"
          name="text"
          onChange={cangeField}
          required
          value={isField.text}
        />
      </div>
      <div className="card-comments__item">
        <button className="icon-comments" type="submit">
          add comments
        </button>
      </div>
    </form>
  );
};
export default AddComment;
