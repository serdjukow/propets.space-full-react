import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ article }) => {
  return (
    <article className="fostering__item services-cards">
      <div className="services-cards__img">
        <img src={`${article.photo}`} alt={article.Service.name} />
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
            {/* <div className="contact-block__info">
              <span>
                {article.text}
              </span>
            </div> */}
            {/* <div className="contact-block__info web">
              <a
                className="contact-block__link"
                href="http://www.kleintierpraxis-am-lietzensee.de"
                target="_blank"
              >
                www.kleintierpraxis-am-lietzensee.de
              </a>
            </div> */}
          </div>
          <div className="card-details">
            <NavLink
              to={`/${article.Service.name}/post/${article.id}`}
              className="card-details__link services-cards__details icon-chevron-double"
              data-open="Close"
              data-close="...view details"
              title="details"
            ></NavLink>
          </div>
        </div>
      </div>
    </article>
  );
};
export default ServiceCard;
