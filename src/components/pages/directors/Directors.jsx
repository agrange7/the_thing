import "./Directors.css";
import { DirectorCard } from "../../cards/directorCard/DirectorCard";
import { DirectorOfTheWeekCard } from "../../cards/directorOfTheWeekCard/DirectorOfTheWeekCard";

const directorOfTheWeek = {
  nameDirector: "Wes Craven",
  description:
    "Wes Craven, a pioneer of horror, masterfully blended psychological depth with raw terror. Known for iconic films like A Nightmare on Elm Street and Scream, he transformed fears into compelling narratives that challenged genre conventions. Craven's work not only scared us but also made us think, solidifying his legacy as a true visionary in the realm of suspense and horror.",
  directorImgUrl: "./images/directors_page/craven.png",
  popularMovies: [
    "./images/films_page/all_films/elm street.jpg",
    "./images/films_page/all_films/scream.jpg",
    "./images/films_page/all_films/the hills have eyes.jpg",
    "./images/films_page/all_films/the serpent and the rainbow.jpg",
  ],
};

const directorsData = [
  {
    name: "John Carpenter",
    descripcion:
      "A master of horror who has defined the genre with his unique style, blending eerie atmospheres with gripping plots.",
    popularMovies: [
      "./images/films_page/all_films/halloween.jpg",
      "./images/films_page/all_films/the thing.jpg",
      "./images/films_page/all_films/prince of darkness.jpg",
      "./images/films_page/all_films/the fog.jpg",
    ],
  },
  {
    name: "David Cronenberg",
    descripcion:
      "Renowned for his disturbing vision and innovative techniques in psychological and body horror cinema.",
    popularMovies: [
      "./images/films_page/all_films/videodrome.jpg",
      "./images/films_page/all_films/the fly.jpg",
      "./images/films_page/all_films/scanners.jpg",
      "./images/films_page/all_films/the_brood.jpg",
    ],
  },
  {
    name: "Dario Argento",
    descripcion:
      "An icon of Italian giallo, known for his bold visual style and ability to create unsettling atmospheres.",
    popularMovies: [
      "./images/films_page/all_films/suspiria.jpg",
      "./images/films_page/all_films/deep red.jpg",
      "./images/films_page/all_films/tenebre.jpg",
      "./images/films_page/all_films/phenomena.jpg",
    ],
  },
  {
    name: "George A. Romero",
    descripcion:
      "A pioneer of zombie cinema, revolutionized the genre with his social commentary and innovative approach to horror.",
    popularMovies: [
      "./images/films_page/all_films/night of the living dead.jpg",
      "./images/films_page/all_films/dawn of the dead.jpg",
      "./images/films_page/all_films/day of the dead.jpg",
      "./images/films_page/all_films/land_of_the_dead.jpg",
    ],
  },
  {
    name: "Wes Craven",
    descripcion:
      "A master of horror whose work spans a range of styles, from supernatural scares to gritty realism.",
    popularMovies: [
      "./images/films_page/all_films/elm street.jpg",
      "./images/films_page/all_films/scream.jpg",
      "./images/films_page/all_films/the hills have eyes.jpg",
      "./images/films_page/all_films/the serpent and the rainbow.jpg",
    ],
  },
  {
    name: "James Wan",
    descripcion:
      "Known for his modern contributions to horror, combining intense scares with compelling storytelling.",
    popularMovies: [
      "./images/films_page/all_films/saw.jpg",
      "./images/films_page/all_films/the conjuring.jpg",
      "./images/films_page/all_films/the_conjuring_2.jpg",
      "./images/films_page/all_films/malignant.jpg",
    ],
  },
  {
    name: "Jordan Peele",
    descripcion:
      "A groundbreaking director known for his socially conscious horror that blends scares with sharp commentary.",
    popularMovies: [
      "./images/films_page/all_films/get_out.jpg",
      "./images/films_page/all_films/us.jpg",
      "./images/films_page/all_films/nope.jpg",
      "./images/films_page/all_films/untitled_peele.jpg",
    ],
  },
  {
    name: "Stuart Gordon",
    descripcion:
      "Known for his innovative and often grotesque takes on horror, blending dark humor with visceral terror.",
    popularMovies: [
      "./images/films_page/all_films/re-animator.jpg",
      "./images/films_page/all_films/from beyond.jpg",
      "./images/films_page/all_films/dagon.jpg",
      "./images/films_page/all_films/castle freak.jpg",
    ],
  },
  {
    name: "Tom Holland",
    descripcion:
      "Notable for his clever and often humorous take on horror, blending suspense with wit.",
    popularMovies: [
      "./images/films_page/all_films/re-animator.jpg",
      "./images/films_page/all_films/fright night.jpg",
      "./images/films_page/all_films/thinner.jpg",
      "./images/films_page/all_films/the_langoliers.jpg",
    ],
  },
  {
    name: "Brian Yuzna",
    descripcion:
      "Known for his work in body horror and special effects, often pushing the boundaries of genre conventions.",
    popularMovies: [
      "./images/films_page/all_films/society.jpg",
      "./images/films_page/all_films/return_of_the living_dead_3.jpg",
      "./images/films_page/all_films/bride_of_re_animator.jpg",
      "./images/films_page/all_films/beyond_re_animator.jpg",
    ],
  },
  {
    name: "Rob Zombie",
    descripcion:
      "Renowned for his visceral and often brutal approach to horror, blending rock aesthetics with genre thrills.",
    popularMovies: [
      "./images/films_page/all_films/house_of_1000_corpses.jpg",
      "./images/films_page/all_films/the_devil's_rejects.jpg",
      "./images/films_page/all_films/halloween_2007.jpg",
      "./images/films_page/all_films/halloween_II_2009.jpg",
    ],
  },
  {
    name: "Tobe Hooper",
    descripcion:
      "A groundbreaking director known for his influential works in horror, combining raw intensity with psychological depth.",
    popularMovies: [
      "./images/films_page/all_films/the-texas-chainsaw-massacre.jpg",
      "./images/films_page/all_films/poltergeist.jpg",
      "./images/films_page/all_films/the_texas_chainsaw_massacre_2.jpg",
      "./images/films_page/all_films/the_funhouse.jpg",
    ],
  },
];

export const Directors = () => {
  return (
    <>
      <section className="section-director sections-vertical">
        <h2>Director of the Week</h2>
        <DirectorOfTheWeekCard
          nameDirector={directorOfTheWeek.nameDirector}
          description={directorOfTheWeek.description}
          directorImgUrl={directorOfTheWeek.directorImgUrl}
          popularMovies={directorOfTheWeek.popularMovies}
        />
      </section>
      <section className="section-director sections-vertical">
        <h2>All</h2>
        <div className="all-directors-cards-container">
          {directorsData.map((director, index) => (
            <DirectorCard
              key={index}
              name={director.name}
              descripcion={director.descripcion}
              popularMovies={director.popularMovies}
            />
          ))}
        </div>
      </section>
    </>
  );
};
