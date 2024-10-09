import { DirectorCard } from "../../cards/directorCard/DirectorCard";
import { DirectorOfTheWeekCard } from "../../cards/directorOfTheWeekCard/DirectorOfTheWeekCard";

export const Directors = () => {
  return (
    <>
      <section class="section-director sections-vertical">
        <h2>Director of the Week</h2>
        <DirectorOfTheWeekCard />
      </section>
      <section class="section-director sections-vertical">
        <h2>All</h2>
        <div class="all-directors-cards-container">
          <DirectorCard />
        </div>
      </section>
    </>
  );
};
