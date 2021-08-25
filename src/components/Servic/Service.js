import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getArticles } from "../../store/action/service";
import { serviceId } from "../../store/typeList";
import { navContext } from "../App";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const { isNav, setIsNav, isLostFound, setIsLostFound } =
    useContext(navContext);
  const location = useLocation();
  const service = useSelector((state) => state.articles.list);
  const dispatch = useDispatch();

  const idx = serviceId.findIndex(
    (art) => art === location.pathname.split("/").pop()
  );

  useEffect(() => {
    if (!isNav) {
      setIsNav(true);
    }
    if (isLostFound) {
      setIsLostFound(false);
    }
    if (!service[idx][serviceId[idx]].list.length) {
      dispatch(getArticles());
    }
  }, []);

  return (
    <>
      <div className="home-page__container hotels">
        <h2 className="home-page__title">{serviceId[idx]}</h2>
        <div className="home-page__row hotels__content">
          {service[idx][serviceId[idx]].list.length ? (
            service[idx][serviceId[idx]].list.map((elem) => (
              <ServiceCard
                key={elem.id}
                article={elem}
              />
            ))
          ) : (
            <div>No {serviceId[idx]}</div>
          )}
        </div>
      </div>
    </>
  );
};
export default Service;
