import { FilmCard } from "../../../cards/filmCard/FilmCard";
import "./PopularFilms.css";

export const PopularFilms = () => {
  const popularFilms = [
    {
      imageUrl: "./images/home_popular_films/alien.jpg",
      directorName: "Ridley Scott",
    },
    {
      imageUrl: "./images/home_popular_films/living_dead.jpg",
      directorName: "Dan O'Bannon",
    },
    {
      imageUrl: "./images/home_popular_films/elm_street.jpg",
      directorName: "Wes Craven",
    },
    {
      imageUrl: "./images/home_popular_films/evil_dead.jpg",
      directorName: "Sam Raimi",
    },
    {
      imageUrl: "./images/home_popular_films/halloween.jpg",
      directorName: "John Carpenter",
    },
    {
      imageUrl: "./images/home_popular_films/carrie.jpg",
      directorName: "Brian De Palma",
    },
    {
      imageUrl: "./images/home_popular_films/jaws.jpg",
      directorName: "Steven Spielberg",
    },
    {
      imageUrl: "./images/home_popular_films/scream.jpg",
      directorName: "Wes Craven",
    },
  ];

  return (
    <>
      <section className="section-popular-films sections-vertical">
        <h2>Popular Films</h2>
        <div className="popular-films-section">
          {popularFilms.map((film, index) => (
            <FilmCard
              key={index}
              imageUrl={film.imageUrl}
              directorName={film.directorName}
            />
          ))}
        </div>
      </section>
    </>
  );
};
