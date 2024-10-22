import PropTypes from "prop-types";
import { StarIcon } from "../../Icon/StarIcon";
import "./PopularDirectorCard.css";

export const PopularDirectorCard = ({
  imageUrl,
  directorName,
  description,
  popularDirectorFilms,
  reverse,
}) => {
  return (
    <article className={`director-popular ${reverse ? "reverse" : null}`}>
      <picture className="director-popular-img-container">
        <img className="director-popular-img" src={imageUrl} />
      </picture>
      <div className="director-popular-info">
        <div className="director-popular-paragraph-container">
          <a href="">
            <h3>{directorName}</h3>
          </a>
          {description.map((des) => {
            return <p className="director-popular-paragraph">{des}</p>;
          })}
        </div>
        <div className="popular-movies-directors-container">
          <ul className="popular-movies-directors-list">
            {popularDirectorFilms.map((popular) => {
              return (
                <li className="popular-movies-directors-li">
                  <StarIcon />
                  <a className="popular-movies-directors-title" href="#">
                    {popular}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </article>
  );
};

PopularDirectorCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  directorName: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  popularDirectorFilms: PropTypes.arrayOf(PropTypes.string).isRequired,
  reverse: PropTypes.bool,
};
