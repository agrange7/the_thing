export const DirectorCard = (name, descripcion, imgUrl) => {
  return (
    <div className="director-card">
      <div className="director-info-container">
        <div className="director-title-paragraph">
          <h3>{title}</h3>
          <p>{descripcion}</p>
        </div>
        <div className="director-popular-movies">
          <h4>Popular Movies</h4>
          <div className="director-popular-movies-img-container">
            <div className="director-popular-movies-img-wrapper">
              <img className="director-popular-movies-img" src={imgUrl} />
            </div>
            <div className="director-popular-movies-img-wrapper">
              <img className="director-popular-movies-img" src={imgUrl} />
            </div>
            <div className="director-popular-movies-img-wrapper">
              <img className="director-popular-movies-img" src={imgUrl} />
            </div>
            <div className="director-popular-movies-img-wrapper">
              <img className="director-popular-movies-img" src={imgUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
