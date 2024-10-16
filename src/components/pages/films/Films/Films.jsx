import { AllFilms } from "./allFilms/AllFilms";
import { NewReleases } from "./newReleases/NewReleases";

export const Films = () => {
  return (
    <>
      <NewReleases />
      <AllFilms />
    </>
  );
};
