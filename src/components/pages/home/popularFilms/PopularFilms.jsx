import { FilmCard } from "../../../FilmCard";
import "./PopularFilms.css";
export const PopularFilms = () => {
  return (
    <>
      <section className="section-popular-films sections-vertical">
        <h2>Popular Films</h2>
        <div className="popular-films-section">
          <FilmCard
            imageUrl={"./images/home_popular_films/alien.jpg"}
            directorName={"Ridley Scott"}
          />
          <FilmCard
            imageUrl={"./images/home_popular_films/living_dead.jpg"}
            directorName={"Dan O'Bannon"}
          />
          <FilmCard
            imageUrl={"./images/home_popular_films/elm_street.jpg"}
            directorName={"Wes Craven"}
          />
          <FilmCard
            imageUrl={"./images/home_popular_films/evil_dead.jpg"}
            directorName={"Sam Raimi"}
          />
          <FilmCard
            imageUrl={"./images/home_popular_films/halloween.jpg"}
            directorName={"John Carpenter"}
          />
          <FilmCard
            imageUrl={"./images/home_popular_films/carrie.jpg"}
            directorName={"Brian De Palma"}
          />
          <FilmCard
            imageUrl={"./images/home_popular_films/jaws.jpg"}
            directorName={"Steven Spielberg"}
          />
          <FilmCard
            imageUrl={"./images/home_popular_films/scream.jpg"}
            directorName={"Wes Craven"}
          />
        </div>
      </section>
    </>
  );
};
