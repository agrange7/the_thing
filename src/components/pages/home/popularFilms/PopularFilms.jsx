import "./PopularFilms.css";
export const PopularFilms = () => {
  return (
    <section className="section-popular-films sections-vertical">
      <h2>Popular Films</h2>
      <div className="popular-films-section">
        <div className="popular-films-resume films-container-hover">
          <img
            className="popular-films-img films-img-hover"
            src="./images/home_popular_films/alien.jpg"
            alt="alien"
          />
          <div className="popular-films-resume-hover hover--opacity">
            <p className="popular-films-resume-hover-title">Ridley Scott</p>
          </div>
        </div>
        <div className="popular-films-resume films-container-hover">
          <img
            className="popular-films-img films-img-hover"
            src="./images/home_popular_films/living_dead.jpg"
            alt="thereturnofthelivingdead"
          />
          <div className="popular-films-resume-hover hover--opacity">
            <p className="popular-films-resume-hover-title">Dan O'Bannon</p>
          </div>
        </div>
        <div className="popular-films-resume films-container-hover">
          <img
            className="popular-films-img films-img-hover"
            src="./images/home_popular_films/elm_street.jpg"
            alt="anightmareonelmstreet"
          />
          <div className="popular-films-resume-hover hover--opacity">
            <p className="popular-films-resume-hover-title">Wes Craven</p>
          </div>
        </div>
        <div className="popular-films-resume films-container-hover">
          <img
            className="popular-films-img films-img-hover"
            src="./images/home_popular_films/evil_dead.jpg"
            alt="theevildead"
          />
          <div className="popular-films-resume-hover hover--opacity">
            <p className="popular-films-resume-hover-title">Sam Raimi</p>
          </div>
        </div>
        <div className="popular-films-resume films-container-hover">
          <img
            className="popular-films-img films-img-hover"
            src="./images/home_popular_films/halloween.jpg"
            alt="halloween"
          />
          <div className="popular-films-resume-hover hover--opacity">
            <p className="popular-films-resume-hover-title">John Carpenter</p>
          </div>
        </div>
        <div className="popular-films-resume films-container-hover">
          <img
            className="popular-films-img films-img-hover"
            src="./images/home_popular_films/carrie.jpg"
            alt="carrie"
          />
          <div className="popular-films-resume-hover hover--opacity">
            <p className="popular-films-resume-hover-title">Brian De Palma</p>
          </div>
        </div>
        <div className="popular-films-resume films-container-hover">
          <img
            className="popular-films-img films-img-hover"
            src="./images/home_popular_films/jaws.jpg"
            alt="jaws"
          />
          <div className="popular-films-resume-hover hover--opacity">
            <p className="popular-films-resume-hover-title">Steven Spielberg</p>
          </div>
        </div>
        <div className="popular-films-resume films-container-hover">
          <img
            className="popular-films-img films-img-hover"
            src="./images/home_popular_films/scream.jpg"
            alt="scream"
          />
          <div className="popular-films-resume-hover hover--opacity">
            <p className="popular-films-resume-hover-title">Wes Craven</p>
          </div>
        </div>
      </div>
      <a className="popular-films-more" href="./pages/films.html">
        More
      </a>
    </section>
  );
};
