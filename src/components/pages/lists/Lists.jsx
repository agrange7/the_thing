import { ListCard } from "../../cards/listCard/ListCard";
import "./Lists.css";

export const Lists = () => {
  const trendingLists = [
    {
      listTitle: "Discovering Horror",
      images: [
        "./images/films_page/all_films/halloween.jpg",
        "./images/films_page/all_films/elm street.jpg",
        "./images/films_page/all_films/scream.jpg",
        "./images/films_page/all_films/the thing.jpg",
      ],
    },
    {
      listTitle: "Favorite Soundtracks",
      images: [
        "./images/films_page/all_films/tenebre.jpg",
        "./images/films_page/all_films/deep red.jpg",
        "./images/films_page/all_films/prince of darkness.jpg",
        "./images/films_page/all_films/the fog.jpg",
      ],
    },
  ];

  const allLists = [
    {
      listTitle: "Preferred Analysis",
      images: [
        "./images/films_page/all_films/psycho.jpg",
        "./images/films_page/all_films/stigmata.jpg",
        "./images/films_page/all_films/opera.jpg",
        "./images/films_page/all_films/the exorcist.jpg",
      ],
      paragraph:
        "In-depth critiques of horror films, offering insights into their themes, direction, and impact on the genre.",
    },
    {
      listTitle: "Comfort Movies",
      images: [
        "./images/films_page/all_films/halloween.jpg",
        "./images/films_page/all_films/elm street.jpg",
        "./images/films_page/all_films/scream.jpg",
        "./images/films_page/all_films/the thing.jpg",
      ],
    },
    {
      listTitle: "Movies Seen in Theaters in 2023",
      images: [
        "./images/films_page/all_films/the boogeyman.jpg",
        "./images/films_page/all_films/evil dead rise.jpg",
        "./images/films_page/all_films/thanksgiving.jpg",
        "./images/films_page/all_films/cuando acecha la maldad.jpg",
      ],
      paragraph:
        "A roundup of the top horror films that graced the big screen in 2023, bringing chills to audiences everywhere.",
    },
    {
      listTitle: "Scream Ranked",
      images: [
        "./images/films_page/all_films/scream.jpg",
        "./images/films_page/all_films/scream 2.jpg",
        "./images/films_page/all_films/scream 3.jpg",
        "./images/films_page/all_films/scream 4.jpg",
      ],
    },
    {
      listTitle: "Watchlist 2024",
      images: [
        "./images/films_page/all_films/sisters.jpg",
        "./images/films_page/all_films/pieces.jpg",
        "./images/films_page/all_films/maniac.jpg",
        "./images/films_page/all_films/house of 1000 corpses.jpg",
      ],
      paragraph:
        "A selection of must-see horror films for 2024, featuring upcoming releases and hidden gems.",
    },
  ];

  return (
    <>
      <section className="section-trending-lists sections-vertical">
        <h2>Trending</h2>
        <div className="trending-lists-container trending-lists-container-special">
          {trendingLists.map((list, index) => (
            <div className="trending-list-container" key={index}>
              <ListCard list={list} />
            </div>
          ))}
        </div>
      </section>

      <section className="section-all-lists sections-vertical">
        <h2>All</h2>
        <div className="all-lists-container">
          {allLists.map((list, index) => (
            <div className="all-list-container" key={index}>
              <ListCard list={list} paragraph={list.paragraph} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
