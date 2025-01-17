import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import "../styles/Card.scss";

const Card = ({ title, image, link }) => {
      return (
            <a href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`See more details about ${title}`}
                  className="card-link">
                  <article className="card">
                        {image ? (
                              <img className="card-cover" src={image} alt={`Cover de ${title}`} />
                        ) : (
                              <StaticImage
                                    src="../images/default.jpg"
                                    alt="Default image"
                                    placeholder="blurred"
                                    layout="constrained"
                                    className="card-cover"
                              />
                        )}
                        <h2 className="card-title">{title}</h2>
                  </article>
            </a>
      );
};

Card.propTypes = {
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
      link: PropTypes.string.isRequired,
};


export default Card;
