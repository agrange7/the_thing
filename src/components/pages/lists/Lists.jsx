import { ListCard } from "../../cards/listCard/ListCard";

export const Lists = () => {
  return (
    <>
      <section className="section-trending-lists sections-vertical">
        <h2>Trending</h2>
        <div className="trending-lists-container trending-lists-container-special">
          <div className="trending-list-container">
            <ListCard />
          </div>
        </div>
      </section>

      <section className="section-all-lists sections-vertical">
        <h2>All</h2>
        <div className="all-lists-container">
          <div className="all-list-container">
            <ListCard />
          </div>
        </div>
      </section>
    </>
  );
};
