import { Heroe } from "./heroe/Heroe";
import { PopularAnalysis } from "./popularAnalysis/PopularAnalysis";
import { PopularDirectors } from "./popularDirectors/PopularDirectors";
import { PopularFilms } from "./popularFilms/popularFilms";
import { PopularLists } from "./popularLists/popularLists";

export const Home = () => {
  return (
    <>
      <Heroe />
      <PopularFilms />
      <PopularDirectors />
      <PopularLists />
      <PopularAnalysis />
    </>
  );
};
