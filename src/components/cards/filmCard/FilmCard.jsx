import "./FilmCard.css";
export const FilmCard = ({ imageUrl, directorName }) => {
  return (
    <article className="film-card-resume film-container-hover">
      <img className="film-card-img film-card-img-hover" src={imageUrl} />
      <div className="film-card-resume-hover hover--opacity">
        <p className="film-card-resume-hover-title">{directorName}</p>
      </div>
    </article>
  );
};
