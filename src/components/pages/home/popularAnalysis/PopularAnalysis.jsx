import { AnalysisCard } from "../../../cards/analysisCard/AnalysisCard";
import "./PopularAnalysis.css";
export const PopularAnalysis = () => {
  const analysis = [
    {
      title: "Introduction to the filmography of Carpenter",
      description:
        "John Carpenter's horror films are known for their intense suspense and primal fear themes, leaving a lasting impact with classics like 'Halloween' and 'The Thing'. His work often features a blend of atmospheric tension. John Carpenter's horror films are known for their intense suspense and primal fear themes, leaving a lasting impact with classics like 'Halloween' and 'The Thing'. His work often features a blend of atmospheric tension",
    },
    {
      title: "Between Giallo and Slasher",
      description:
        "Giallo and slasher films, though both in the horror genre, differ significantly in style and storytelling. Giallo, which originated in Italy, mixes mystery and horror with intricate plots, psychological depth, and stylish visuals",
    },
    {
      title: "Where does horror cinema stand today?",
      description:
        "Currently, horror cinema is in a phase of diversity and experimentation, featuring a mix of remakes, innovative independent films, and explorations of contemporary and social themes through fear and the supernatural",
    },
    {
      title: "Deconstructing 'Psycho'",
      description:
        "The narrative unfolds masterfully, using unexpected twists and deep symbolism to explore themes of identity and madness. The first half of the film follows Marion Crane, whose escape with stolen money introduces",
    },
    {
      title: "The Staging in 'The Exorcist'",
      description:
        "In the opening scene of 'The Exorcist,' a serene archaeological site in Iraq reveals the discovery of an ancient demonic figure, setting an unsettling tone from the start. This creepy find hints that something really bad",
    },
    {
      title: "The Solemnity in Horror",
      description:
        "The excessive solemnity in contemporary horror cinema, seen in filmmakers like Ari Aster with films like 'Hereditary' and 'Midsommar,' can sometimes overshadow the visceral impact that defines the genre, potentially alienating",
    },
  ];

  const limitedText = (text) => {
    const maxLength = 224;
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <section className="section-popular-analysis sections-vertical">
      <h2>Popular Analysis</h2>
      <ul className="popular-analysis-container">
        {analysis.map((item, index) => (
          <AnalysisCard
            key={index}
            title={item.title}
            description={limitedText(item.description)}
          />
        ))}
      </ul>
    </section>
  );
};
