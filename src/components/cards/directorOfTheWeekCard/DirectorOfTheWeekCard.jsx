export const DirectorOfTheWeekCard = ({
  directorImgUrl,
  nameDirector,
  description,
  imgUrl,
}) => {
  return (
    <article className="director-card">
      <div className="director-img-container">
        <img className="director-img" src={directorImgUrl} />
      </div>
      <div className="director-info-container">
        <div className="director-title-paragraph">
          <h3>{nameDirector}</h3>
          <p>{description}</p>
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
    </article>
  );
};
