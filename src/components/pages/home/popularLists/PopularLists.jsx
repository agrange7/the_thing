import { ListCard } from "../../../cards/listCard/ListCard";
import "./PopularLists.css";
export const PopularLists = () => {
  return (
    <section className="section-popular-lists sections-vertical" id="Lists">
      <h2>Popular Lists</h2>
      <div className="popular-lists-container">
        <ListCard />
      </div>
    </section>
  );
};
