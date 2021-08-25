import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getArticleById } from "../../store/action/service";
import { serviceId } from "../../store/typeList";
import { navContext } from "../App";
const Article = () => {
  const { isNav, setIsNav, isLostFound, setIsLostFound } =
    useContext(navContext);
  const article = useSelector((state) => state.articles.articleById);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (!isNav) {
      setIsNav(true);
    }
    if (isLostFound) {
      setIsLostFound(false);
    }
    dispatch(getArticleById(id));
  }, []);

  return article.id ? (
    <div className="home-page__container hotels">
      <h2 className="home-page__title">{serviceId[article.serviceId-1]}</h2>
      <div className="home-page__row hotels__content">
        <article className="fostering__item services-cards _show-more">
          <div className="services-cards__img">
            <img src={article.photo} alt={serviceId[article.serviceId-1]} />
          </div>
          <div className="services-cards__info">
            <div className="services-cards__text">
              <h3 className="services-cards__title blue">{article.title}</h3>
              {/* <div className="services-cards__contact-block contact-block">
                <div className="contact-block__title">Addresse:</div>
                <div className="contact-block__info">
                  <span>60549 Frankfurt am Main</span>
                  <span>Deutschland</span>
                  <span>
                    Telefon:{" "}
                    <a className="contact-block__link dark" href="tel:+06969066542">
                      069 69066542
                    </a>
                  </span>
                </div>
              </div> */}
              <div className="services-cards__contact-block contact-block">
                <div className="contact-block__info">
                  <span>
                    {article.text}
                  </span>
                </div>
                {/* <div className="contact-block__info web">
                  <NavLink
                    className="contact-block__link"
                    href="http://www.kleintierpraxis-am-lietzensee.de"
                    target="_blank"
                  >
                    www.kleintierpraxis-am-lietzensee.de
                  </NavLink>
                </div> */}
              </div>
              <div className="card-details">
                <NavLink
                  to={`/${serviceId[article.serviceId-1]}`}
                  className="card-details__link services-cards__details icon-chevron-double"
                  data-open="Close"
                  data-close="...view details"
                  title="details"
                ></NavLink>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  ) : null;
};
export default Article;
