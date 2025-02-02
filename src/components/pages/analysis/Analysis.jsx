import { AnalysisCard } from "../../cards/analysisCard/AnalysisCard";
import "./Analysis.css";

export const Analysis = () => {
  const trendingData = [
    {
      title: "About remakes",
      description: `Remakes are a double-edged sword in cinema, often polarizing audiences and critics alike. They can offer a fresh perspective on a classic story, yet they risk losing the original's essence. For instance, the 2013 remake of "Carrie" is a prime example...`,
    },
    {
      title: "The discredit towards the genre",
      description: `The horror genre often faces undue discredit, seen as lesser by some critics and audiences. However, horror uniquely explores societal fears and psychological depths. Films like Jordan Peele's "Get Out" (2017)...`,
    },
    {
      title: "The Nightmare on Elm Street saga",
      description: `"The Nightmare on Elm Street" saga, spearheaded by Wes Craven, revolutionized the slasher genre with its blend of supernatural horror and psychological terror. Freddy Krueger, with his iconic glove and burned visage...`,
    },
  ];

  const videoAnalysisData = [
    {
      title: "Analyzing the opening scene of Scream",
      description: `The opening scene of Scream (1996) is a masterclass in suspense and meta-commentary. By placing the audience in the midst of a seemingly familiar scenario—teenagers being terrorized by a masked killer—Craven subverts expectations with a sharp, self-aware script...`,
    },
    {
      title: "Argento: The Three Mothers",
      description: `Argento's trilogy dazzles with his trademark visual spectacle and surrealistic style. Yet, beneath the surface of elaborate set pieces and striking cinematography lies a series marred by inconsistent storytelling and indulgent excess. This analysis delves into...`,
    },
    {
      title: "Jaws scene by scene",
      description: `In this detailed scene-by-scene analysis of Spielberg’s "Jaws", we dissect the film’s masterful tension-building, character development, and iconic moments. The analysis uncovers how Spielberg’s precise craftsmanship transforms a simple story into a timeless thriller, while also addressing the rare...`,
    },
  ];

  const directorsData = [
    {
      title: "Cronenberg: Wild and Visceral Eroticism",
      description: `David Cronenberg's work is a provocative exploration of the intersections between eroticism and the grotesque. This analysis delves into how Cronenberg uses visceral imagery and unsettling narratives to challenge traditional notions of sexuality and desire. From the body horror of "The Fly" to the...`,
    },
    {
      title: "The Emergence of Fede Alvarez",
      description: `Fede Alvarez’s rise in horror cinema is marked by a fearless embrace of raw intensity and innovation. This critique analyzes how Alvarez’s films, such as "Evil Dead" and "Don't Breathe," blend relentless suspense with bold stylistic choices. Alvarez’s unique ability to push genre boundaries while...`,
    },
    {
      title: "Fundamental Concepts in Jordan Peele's Cinema",
      description: `Jordan Peele’s films represent a new era of horror, seamlessly integrating social commentary with genre thrills. This analysis delves into the core themes of Peele’s work, including the exploration of racial identity and the uncanny. By examining "Get Out" and "Us," the critique...`,
    },
  ];

  const filmsData = [
    {
      title: "Living Dead by Romero and O'Bannon",
      description: `Romero and O'Bannon's contributions to the zombie genre are seminal yet often misunderstood. This analysis explores how their films redefine the undead, blending social critique with visceral horror. By examining "Night of the Living Dead" and "The Return of the Living Dead", we uncover how these...`,
    },
    {
      title: "The Theology of Prince of Darkness",
      description: `This critique delves into how Carpenter uses religious and philosophical themes to construct a menacing vision of apocalyptic horror. The analysis examines how the film's use of Christian iconography and metaphysical concepts challenges and expands the boundaries of the genre...`,
    },
    {
      title: "Candyman: Myth Meets Horror",
      description: `The story's use of the Candyman legend as a lens to explore themes of social injustice and racial trauma elevates it from mere supernatural fright to a complex commentary on systemic issues. By examining the film’s structure, from its eerie prologue to its chilling climax...`,
    },
  ];

  const genresData = [
    {
      title: "This is more than horror",
      description: `Ari Aster, fucking piece of shit, has crafted a genre that transcends mere scares to explore the deepest corners of human anguish. Hereditary and Midsommar are not just horror films; they are harrowing psychological experiences that dissect familial dysfunction and existential dread...`,
    },
    {
      title: "Today's Slasher: Freaky, Sick and X",
      description: `In the ever-evolving landscape of horror, contemporary slashers like Freaky (2020), Sick (2022), and X (2022) push the boundaries of the genre while paying homage to its roots. This analysis explores how these films blend traditional slasher elements with fresh twists...`,
    },
    {
      title: "The Dead of Body Horror",
      description: `We examine the evolution of body horror, highlighting how modern films push the limits of physical and psychological fear. This critique examines narrative techniques and visual style to reveal how body horror remains both shocking and captivating by delving into humanity's darkest aspects...`,
    },
  ];

  const decadesData = [
    {
      title: "30s and 40s: The Era of Monsters",
      description: `The 1930s and 40s marked the golden age of monster movies, where iconic creatures like Dracula, Frankenstein, and the Mummy emerged as cultural phenomena. This analysis delves into how these films not only shaped the horror genre but also...`,
    },
    {
      title: "Exploitation in the 70s",
      description: `The 1970s saw the rise of exploitation cinema, a genre known for its provocative and often controversial content. This analysis examines how films of this era pushed boundaries with their explicit violence, sexuality, and social commentary. We look at key works and...`,
    },
    {
      title: "Iconic 80s",
      description: `The 1980s were a defining decade for horror, with a slew of films that became cultural touchstones. This analysis explores the key trends and innovations of the era, from the rise of slasher films and supernatural horrors to the influence of special effects and iconic characters...`,
    },
  ];

  const musicAndSoundsData = [
    {
      title: "John Carpenter: Dark Lord of the Film Score",
      description: `John Carpenter’s mastery of the film score is unparalleled, defining the soundscape of horror with his minimalist, synth-driven compositions. Carpenter's unique sound design in films like Halloween and The Thing creates an atmosphere...`,
    },
    {
      title: "Goblin: Progressive, Horror Synth, and Giallo",
      description: `Goblin’s innovative soundtracks are a cornerstone of the giallo genre, blending progressive rock with horror synths to create unforgettable auditory experiences. Their unique musical style, featured in films like Suspiria...`,
    },
    {
      title: "The Thing by Ennio Morricone",
      description: `Ennio Morricone’s score for *The Thing* is a masterclass in creating atmospheric tension through music. His haunting, minimalist compositions contribute to the film’s sense of paranoia and isolation. The interplay between...`,
    },
  ];

  return (
    <>
      <section className="section-analysis sections-vertical">
        <h2>Trending</h2>
        <ul className="analysis-container">
          {trendingData.map((item, index) => (
            <AnalysisCard
              key={index}
              title={item.title}
              description={item.description}
              alternative={true}
              flex={true}
            />
          ))}
        </ul>
      </section>

      <section className="section-analysis sections-vertical">
        <h2>Videoanalysis</h2>
        <ul className="analysis-container">
          {videoAnalysisData.map((item, index) => (
            <AnalysisCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </section>

      <section className="section-analysis sections-vertical">
        <h2>Directors</h2>
        <ul className="analysis-container">
          {directorsData.map((item, index) => (
            <AnalysisCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </section>

      <section className="section-analysis sections-vertical">
        <h2>Films</h2>
        <ul className="analysis-container">
          {filmsData.map((item, index) => (
            <AnalysisCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </section>

      <section className="section-analysis sections-vertical">
        <h2>Genres</h2>
        <ul className="analysis-container">
          {genresData.map((item, index) => (
            <AnalysisCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </section>

      <section className="section-analysis sections-vertical">
        <h2>Decades</h2>
        <ul className="analysis-container">
          {decadesData.map((item, index) => (
            <AnalysisCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </section>

      <section className="section-analysis sections-vertical">
        <h2>Music and Sounds</h2>
        <ul className="analysis-container">
          {musicAndSoundsData.map((item, index) => (
            <AnalysisCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </section>
    </>
  );
};
