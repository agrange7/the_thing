import { StarIcon } from "../../Icon/StarIcon";
import "./PopularDirectorCard.css";

export const PopularDirectorCard = (
  imageUrl,
  directorName,
  description,
  popularFilmTitle
) => {
  return (
    <article className="director-popular">
      <picture className="director-popular-img-container">
        <img className="director-popular-img" src={imageUrl} />
      </picture>
      <div className="director-popular-info">
        <div className="director-popular-paragraph-container">
          <a href="">
            <h3>{directorName}</h3>
          </a>
          <p className="director-popular-paragraph">{description}</p>
          <p className="director-popular-paragraph">{description}</p>
        </div>
        <div className="popular-movies-directors-container">
          <ul className="popular-movies-directors-list">
            <li className="popular-movies-directors-li">
              <StarIcon />
              <a className="popular-movies-directors-title" href="#">
                {popularFilmTitle}
              </a>
            </li>
            <li className="popular-movies-directors-li">
              <StarIcon />
              <a className="popular-movies-directors-title" href="#">
                {popularFilmTitle}
              </a>
            </li>
            <li className="popular-movies-directors-li">
              <StarIcon />
              <a className="popular-movies-directors-title" href="#">
                {popularFilmTitle}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};
