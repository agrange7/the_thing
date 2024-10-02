import { useState } from "react";

export const Carousel = () => {
  const list = [
    "./images/home_popular_films/alien.jpg",
    "./images/home_popular_films/carrie.jpg",
    "./images/home_popular_films/jaws.jpg",
  ];

  const title = ["Alien", "Carrie", "Jaws"];

  const description = [
    "is a sci-fi horror masterpiece set aboard a commercial space tug, where the crew faces off against a deadly extraterrestrial creature. Directed by Ridley Scott, the film builds tension through its claustrophobic atmosphere and iconic creature design by H.R. Giger. Released in 1979, it has become a hallmark of both the science fiction and horror genres.",

    "is a supernatural horror drama based on Stephen King's novel about a bullied high school girl who discovers she has telekinetic powers. Directed by Brian De Palma, the 1976 film explores themes of repression, revenge, and adolescent trauma, culminating in one of the most iconic prom scenes in horror history.",

    "is a tense, aquatic thriller directed by Steven Spielberg, following the terror unleashed by a massive great white shark on a small island community. Released in 1975, this film is often credited with inventing the modern summer blockbuster while blending elements of survival horror with suspenseful action sequences.",
  ];

  const subgenre = [
    "Sci-fi Horror, combining elements of science fiction and horror, often involving extraterrestrial beings, futuristic settings, or advanced technology mixed with terrifying or unsettling elements.",

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
            <p className="recommendation-paragraph slasher-paragraph">
              {currentSubgenre}
            </p>
          </div>
          <nav className="recommendation-links">
            <a className="recommendation-link" href="#analysis">
              Analysis
            </a>
            <svg
              onClick={nextImage}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </nav>
        </div>
      </article>
    </>
  );
};
