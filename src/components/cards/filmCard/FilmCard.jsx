import PropTypes from "prop-types";
import "./FilmCard.css";

export const FilmCard = ({ imageUrl, directorName, allFilmsAlt }) => {
  return (
    <article className="film-card-resume film-container-hover">
      <img className="film-card-img film-card-img-hover" src={imageUrl} />
      <div className="film-card-resume-hover hover--opacity">
        <p
          className={`film-card-resume-hover-title ${
            allFilmsAlt ? "all-films-hover-paragraph" : ""
          }`}
        >
          {directorName}
        </p>
      </div>
    </article>
  );
};

FilmCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  directorName: PropTypes.string.isRequired,
  allFilmsAlt: PropTypes.bool.isRequired,
};
