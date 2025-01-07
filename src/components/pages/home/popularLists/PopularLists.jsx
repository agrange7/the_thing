import { ListCard } from "../../../cards/listCard/ListCard";
import "./PopularLists.css";

export const PopularLists = () => {
  const lists = [
    {
      listTitle: "Found Footage",
      images: [
        "./images/films_page/all_films/the visit.jpg",
        "./images/films_page/all_films/as above so below.jpg",
        "./images/films_page/all_films/rec.jpg",
        "./images/films_page/all_films/the blair witch project.jpg",
      ],
    },
    {
      listTitle: "October 2024",
      images: [
        "./images/films_page/all_films/finaldestination.jpg",
        "./images/films_page/all_films/sinister.jpg",
        "./images/films_page/all_films/i know what you did last summer.jpg",
        "./images/films_page/all_films/an american werewolf in london.jpg",
      ],
    },
    {
      listTitle: "Random Horror Movies Roulette",
      images: [
        "./images/films_page/all_films/a quiet place.jpg",
        "./images/films_page/all_films/split.jpg",
        "./images/films_page/all_films/malignant.jpg",
        "./images/films_page/all_films/the witch.jpg",
      ],
    },
    {
      listTitle: "Spooky Season",
      images: [
        "./images/films_page/all_films/body bags.jpg",
        "./images/films_page/all_films/shutter.jpg",
        "./images/films_page/all_films/from beyond.jpg",
        "./images/films_page/all_films/the hills have eyes.jpg",
      ],
    },
  ];

  return (
    <section className="section-popular-lists sections-vertical" id="Lists">
      <h2>Popular Lists</h2>
      <div className="popular-lists-container">
        {lists.map((list, index) => (
          <ListCard key={index} list={list} />
        ))}
      </div>
    </section>
  );
};
