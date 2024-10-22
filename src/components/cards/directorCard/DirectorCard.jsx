import PropTypes from "prop-types";
import "./DirectorCard.css";

export const DirectorCard = ({ name, descripcion, popularMovies }) => {
  return (
    <div className="director-card">
      <div className="director-info-container">
        <div className="director-title-paragraph">
          <h3>{name}</h3>
          <p>{descripcion}</p>
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
    </div>
  );
};

DirectorCard.propTypes = {
  name: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  popularMovies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
