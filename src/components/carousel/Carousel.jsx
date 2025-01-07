import { useState } from "react";
import { ArrowIcon } from "../Icon/ArrowIcon";

export const Carousel = () => {
  const list = [
    "./images/home_popular_films/the-texas-chainsaw-massacre.jpg",
    "./images/home_popular_films/carrie.jpg",
    "./images/home_popular_films/jaws.jpg",
  ];

  const title = [
    "The Texas Chainsaw Massacre (1972)",
    "Carrie (1976)",
    "Jaws (1975)",
  ];

  const description = [
    "is a horror classic following a group of youths who encounter a family of cannibals in Texas, led by Leatherface, a killer with a mask made of human skin and a chainsaw as his primary weapon. The film is renowned for its intensity and brutality, becoming an icon of the slasher genre since its release in 1974.",

    "is a supernatural horror drama based on Stephen King's novel about a bullied high school girl who discovers she has telekinetic powers. Directed by Brian De Palma, the 1976 film explores themes of repression, revenge, and adolescent trauma, culminating in one of the most iconic prom scenes in horror history.",

    "is a tense, aquatic thriller directed by Steven Spielberg, following the terror unleashed by a massive great white shark on a small island community. Released in 1975, this film is often credited with inventing the modern summer blockbuster while blending elements of survival horror with suspenseful action sequences.",
  ];

  const subgenre = [
    "Slasher subgenre of horror films involving a killer or a group of killers stalking and murdering a group of people, usually by use of bladed or sharp tools.",

    "Supernatural Horror, involving paranormal forces, telekinetic abilities, and the terror of the unknown, often intertwined with themes of psychological horror and human vulnerability.",

    "Thriller/Horror, blending suspense and fear with intense action, typically involving creatures or external threats that endanger the lives of the characters in a realistic setting.",
  ];

  const [showImage, setShowImage] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(title[0]);
  const [currentDescription, setCurrentDescription] = useState(description[0]);
  const [currentSubgenre, setCurrentSubgenre] = useState(subgenre[0]);

  const nextImage = () => {
    const newIndex = showImage >= list.length - 1 ? 0 : showImage + 1;
    setShowImage(newIndex);
    setCurrentTitle(title[newIndex]);
    setCurrentDescription(description[newIndex]);
    setCurrentSubgenre(subgenre[newIndex]);
  };

  const prevImage = () => {
    const newIndex = showImage <= 0 ? list.length - 1 : showImage - 1;
    setShowImage(newIndex);
    setCurrentTitle(title[newIndex]);
    setCurrentDescription(description[newIndex]);
    setCurrentSubgenre(subgenre[newIndex]);
  };

  return (
    <>
      <article className="weekly">
        <img
          className="recommendation-img"
          src={list[showImage]}
          alt="thetexaschainsawmassacre_poster"
        />
        <div className="recommendation-p-nav">
          <div className="recommendation-h3-p">
            <h3>{currentTitle}</h3>
            <p className="recommendation-paragraph">{currentDescription}</p>
            <p className="recommendation-paragraph subgenre-paragraph">
              {currentSubgenre}
            </p>
          </div>
          <nav className="recommendation-links">
            <a className="recommendation-link" href="#analysis">
              Analysis
            </a>

            <div className="arrow-icon-container">
              <ArrowIcon onClick={prevImage} prevArrow={true} />
              <ArrowIcon onClick={nextImage} />
            </div>
          </nav>
        </div>
      </article>
    </>
  );
};
