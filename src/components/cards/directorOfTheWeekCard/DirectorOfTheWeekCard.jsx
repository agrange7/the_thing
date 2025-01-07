import PropTypes from "prop-types";
import "./DirectorOfTheWeekCard.css";

export const DirectorOfTheWeekCard = ({
  directorImgUrl,
  nameDirector,
  description,
  popularMovies,
}) => {
  return (
    <article className="director-card">
      <div className="director-img-container">
        <img
          className="director-img"
          src={directorImgUrl}
          alt={`${nameDirector}`}
        />
      </div>
      <div className="director-info-container">
        <div className="director-title-paragraph">
          <h3>{nameDirector}</h3>
          <p>{description}</p>
        </div>
        <div className="director-popular-movies">
          <h4>Popular Movies</h4>
          <div className="director-popular-movies-img-container">
            {popularMovies.map((movieImgUrl, index) => (
              <div key={index} className="director-popular-movies-img-wrapper">
                <img
                  className="director-popular-movies-img"
                  src={movieImgUrl}
                  alt="Popular movie"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
DirectorOfTheWeekCard.propTypes = {
  directorImgUrl: PropTypes.string.isRequired,
  nameDirector: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  popularMovies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
