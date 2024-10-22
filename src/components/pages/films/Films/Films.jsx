import { FilmCard } from "../../../cards/filmCard/FilmCard";
import "./Films.css";

const newReleasesData = [
  {
    imageUrl: "./images/films_page/new_releases/alien romulus.jpg",
    directorName: "Fede Álvarez",
  },
  {
    imageUrl: "./images/films_page/new_releases/a quiet place day one.jpg",
    directorName: "Michael Sarnoski",
  },
  {
    imageUrl: "./images/films_page/new_releases/maxxxine.jpg",
    directorName: "Ti West",
  },
  {
    imageUrl: "./images/films_page/new_releases/the watchers.jpg",
    directorName: "Ishana Shyamalan",
  },
];

const allFilmsData = [
  {
    imageUrl: "./images/films_page/all_films/alien.jpg",
    directorName: "Ridley Scott",
  },
  {
    imageUrl: "./images/films_page/all_films/aliens.jpg",
    directorName: "James Cameron",
  },
  {
    imageUrl:
      "./images/films_page/all_films/an american werewolf in london.jpg",
    directorName: "John Landis",
  },
  {
    imageUrl: "./images/films_page/all_films/braindead.jpg",
    directorName: "Peter Jackson",
  },
  {
    imageUrl: "./images/films_page/all_films/candyman.jpg",
    directorName: "Bernard Rose",
  },
  {
    imageUrl: "./images/films_page/all_films/carrie.jpg",
    directorName: "Brian De Palma",
  },
  {
    imageUrl: "./images/films_page/all_films/child's play.jpg",
    directorName: "Tom Holland",
  },
  {
    imageUrl: "./images/films_page/all_films/dawn of the dead.jpg",
    directorName: "George A. Romero",
  },
  {
    imageUrl: "./images/films_page/all_films/day of the dead.jpg",
    directorName: "George A. Romero",
  },
  {
    imageUrl: "./images/films_page/all_films/deep red.jpg",
    directorName: "Dario Argento",
  },
  {
    imageUrl: "./images/films_page/all_films/elm street.jpg",
    directorName: "Wes Craven",
  },
  {
    imageUrl: "./images/films_page/all_films/event horizon.jpg",
    directorName: "Paul W. S. Anderson",
  },
  {
    imageUrl: "./images/films_page/all_films/evil dead.jpg",
    directorName: "Sam Raimi",
  },
  {
    imageUrl: "./images/films_page/all_films/freaky.jpg",
    directorName: "Christopher Landon",
  },
  {
    imageUrl: "./images/films_page/all_films/friday the 13th.jpg",
    directorName: "Sean S. Cunningham",
  },
  {
    imageUrl: "./images/films_page/all_films/fright night.jpg",
    directorName: "Tom Holland",
  },
  {
    imageUrl: "./images/films_page/all_films/halloween.jpg",
    directorName: "John Carpenter",
  },
  {
    imageUrl: "./images/films_page/all_films/hellraiser.jpg",
    directorName: "Clive Barker",
  },
  {
    imageUrl: "./images/films_page/all_films/in the mouth of-madness.jpg",
    directorName: "John Carpenter",
  },
  {
    imageUrl: "./images/films_page/all_films/jaws.jpg",
    directorName: "Steven Spielberg",
  },
  {
    imageUrl: "./images/films_page/all_films/living dead.jpg",
    directorName: "George A. Romero",
  },
  {
    imageUrl: "./images/films_page/all_films/my bloody valentine.jpg",
    directorName: "George Mihalka",
  },
  {
    imageUrl: "./images/films_page/all_films/night of the living dead.jpg",
    directorName: "George A. Romero",
  },
  {
    imageUrl: "./images/films_page/all_films/phenomena.jpg",
    directorName: "Dario Argento",
  },
  {
    imageUrl: "./images/films_page/all_films/prince of darkness.jpg",
    directorName: "John Carpenter",
  },
  {
    imageUrl: "./images/films_page/all_films/prom night.jpg",
    directorName: "Paul Lynch",
  },
  {
    imageUrl: "./images/films_page/all_films/psycho.jpg",
    directorName: "Alfred Hitchcock",
  },
  {
    imageUrl: "./images/films_page/all_films/re-animator.jpg",
    directorName: "Stuart Gordon",
  },
  {
    imageUrl: "./images/films_page/all_films/rec.jpg",
    directorName: "Jaume Balagueró & Paco Plaza",
  },
  {
    imageUrl: "./images/films_page/all_films/rosemary’s baby.jpg",
    directorName: "Roman Polanski",
  },
  {
    imageUrl: "./images/films_page/all_films/saw.jpg",
    directorName: "James Wan",
  },
  {
    imageUrl: "./images/films_page/all_films/scanners.jpg",
    directorName: "David Cronenberg",
  },
  {
    imageUrl: "./images/films_page/all_films/scream.jpg",
    directorName: "Wes Craven",
  },
  {
    imageUrl: "./images/films_page/all_films/suspiria.jpg",
    directorName: "Dario Argento",
  },
  {
    imageUrl: "./images/films_page/all_films/tenebre.jpg",
    directorName: "Dario Argento",
  },
  {
    imageUrl: "./images/films_page/all_films/the-texas-chainsaw-massacre.jpg",
    directorName: "Tobe Hooper",
  },
  {
    imageUrl:
      "./images/films_page/all_films/the bird with the crystal plumage.jpg",
    directorName: "Dario Argento",
  },
  {
    imageUrl: "./images/films_page/all_films/the conjuring.jpg",
    directorName: "James Wan",
  },
  {
    imageUrl: "./images/films_page/all_films/the exorcist.jpg",
    directorName: "William Friedkin",
  },
  {
    imageUrl: "./images/films_page/all_films/the fly.jpg",
    directorName: "David Cronenberg",
  },
  {
    imageUrl: "./images/films_page/all_films/the fog.jpg",
    directorName: "John Carpenter",
  },
  {
    imageUrl: "./images/films_page/all_films/the mist.jpg",
    directorName: "Frank Darabont",
  },
  {
    imageUrl: "./images/films_page/all_films/the others.jpg",
    directorName: "Alejandro Amenábar",
  },
  {
    imageUrl: "./images/films_page/all_films/the silence of the lambs.jpg",
    directorName: "Jonathan Demme",
  },
  {
    imageUrl: "./images/films_page/all_films/the thing.jpg",
    directorName: "John Carpenter",
  },
  {
    imageUrl: "./images/films_page/all_films/the_devil's_rejects.jpg",
    directorName: "Rob Zombie",
  },
  {
    imageUrl: "./images/films_page/all_films/videodrome.jpg",
    directorName: "David Cronenberg",
  },
  {
    imageUrl: "./images/films_page/all_films/x.jpg",
    directorName: "Ti West",
  },
];

export const Films = () => {
  return (
    <>
      <>
        <section className="section-new-releases sections-vertical">
          <h2>New Releases</h2>
          <div className="new-releases-container">
            {newReleasesData.map((film, index) => (
              <FilmCard
                key={index}
                imageUrl={film.imageUrl}
                directorName={film.directorName}
              />
            ))}
          </div>
        </section>
        <section className="section-all-films sections-vertical">
          <div className="all-films-title-button-container">
            <h2>All</h2>
            <button className="add-film-button">Add film</button>
            <form className="add-film-form">
              <label htmlFor="card-title">Director Name</label>
              <input
                className="add-film-form-input"
                type="text"
                id="card-title"
                name="card-title"
              />
              <label htmlFor="card-image">Image Url</label>
              <input
                className="add-film-form-input"
                type="url"
                id="card-image"
                name="card-image"
                placeholder="https://picsum.photos/200"
              />
              <button className="add-film-form-button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="all-films-container">
            {allFilmsData.map((film, index) => (
              <FilmCard
                key={index}
                imageUrl={film.imageUrl}
                directorName={film.directorName}
                allFilmsAlt={true}
              />
            ))}
          </div>
        </section>
      </>
    </>
  );
};
