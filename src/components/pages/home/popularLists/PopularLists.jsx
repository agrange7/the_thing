import "./PopularLists.css";
export const PopularLists = () => {
  return (
    <section className="section-popular-lists sections-vertical" id="Lists">
      <h2>Popular Lists</h2>
      <div className="popular-lists-container">
        <div className="popular-list-container">
          <a className="list-link" href="#">
            <img
              className="list-img"
              src="./images/films_page/all films/the visit.jpg"
              alt=""
            />
            <img
              className="list-img .list-img"
              src="./images/films_page/all films/as above so below.jpg"
              alt=""
            />
            <img
              className="list-img .list-img"
              src="./images/films_page/all films/rec.jpg"
              alt=""
            />
            <img
              className="list-img .list-img"
              src="./images/films_page/all films/the blair witch project.jpg"
              alt=""
            />
          </a>
          <h3>found footage</h3>
        </div>
        <div className="popular-list-container">
          <a className="list-link" href="#">
            <img
              className="list-img"
              src="./images/films_page/all films/finaldestination.jpg"
              alt=""
            />
            <img
              className="list-img .list-img"
              src="./images/films_page/all films/sinister.jpg"
              alt=""
            />
            <img
              className="list-img .list-img"
              src="./images/films_page/all films/i know what you did last summer.jpg"
              alt=""
            />
            <img
              className="list-img .list-img"
              src="./images/films_page/all films/an american werewolf in london.jpg"
              alt=""
            />
          </a>
          <h3>October 2024</h3>
        </div>
        <div className="popular-list-container">
          <a className="list-link" href="#">
            <img
              className="list-img"
              src="./images/films_page/all films/a quiet place.jpg"
              alt=""
            />
            <img
              className="list-img .list-img"
              src="./images/films_page/all films/split.jpg"
              alt=""
            />
            <img
              className="list-img .list-img"
              src="./images/films_page/all films/malignant.jpg"
              alt=""
            />
            <img
              className="list-img .list-img"
              src="./images/films_page/all films/the witch.jpg"
              alt=""
            />
          </a>
          <h3>Random Horror Movies Roulette</h3>
        </div>
        <div className="popular-list-container">
          <a className="list-link" href="#">
            <img
              className="list-img"
              src="./images/films_page/all films/body bags.jpg"
              alt=""
            />
            <img
              className="list-img .list-img"
              src="./images/films_page/all films/shutter.jpg"
              alt=""
            />
            <img
              className="list-img .list-img"
              src="./images/films_page/all films/from beyond.jpg"
              alt=""
            />
            <img
              className="list-img .list-img"
              src="./images/films_page/all films/the hills have eyes.jpg"
              alt=""
            />
          </a>
          <h3>Spooky Season</h3>
        </div>
      </div>
    </section>
  );
};
