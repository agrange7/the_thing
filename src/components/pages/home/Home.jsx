import { Hero } from "./hero/Hero";
import { PopularAnalysis } from "./popularAnalysis/PopularAnalysis";
import { PopularDirectors } from "./popularDirectors/PopularDirectors";
import { PopularFilms } from "./popularFilms/popularFilms";
import { PopularLists } from "./popularLists/PopularLists";

export const Home = () => {
  return (
    <>
      <Hero />
      <PopularFilms />
      <PopularDirectors />
      <PopularLists />
      <PopularAnalysis />
    </>
  );
};
