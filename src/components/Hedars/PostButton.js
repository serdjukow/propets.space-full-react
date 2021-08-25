import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { serviceId } from "../../store/typeList";

const PostButton = () => {
  const history = useHistory();
  const location = useLocation();
  let title = location.pathname.split("/")[1];
  const chooseTitle = () => {
    for (let i = 0; i < serviceId.length; i++) {
      if (title === serviceId[i]) return title;
      if (i === serviceId.length - 1) {
        title = "Post";
      }
      console.log(title)
    }
    return title
  };

  ;

  return (
    <button
      className="header__button button blue icon-plus"
      onClick={() => history.push(`/${chooseTitle()}/add_post`)}
    >
      Add {chooseTitle()}
    </button>
  );
};
export default PostButton;
