import { PopularDirectorCard } from "../../../cards/popularDirectorCard/PopularDirectorCard";
import "./PopularDirectors.css";
export const PopularDirectors = () => {
  return (
    <section className="section-popular-directors sections-vertical">
      <h2>Popular Directors</h2>
      <div className="director-popular-container">
        <PopularDirectorCard
          imageUrl={"./images/home_popular_directors/carpenter.png"}
          directorName={"John Carpenter"}
          description={[
            "John Carpenter is an American director, producer, and screenwriter known for his horror and science fiction films. Born in 1948, Carpenter has left an indelible mark on cinema with works such as Halloween, The Thing, and Escape from New York. His distinctive style includes the use of minimalist electronic music, often composed by himself, and narratives that explore fear and the unknown.",
            "Carpenter has also been a pioneer in independent filmmaking, financing and distributing many of his own films. His ability to create tense atmospheres and his focus on character development have influenced generations of filmmakers. Additionally, his legacy continues through remakes and sequels of his classic films.",
          ]}
          popularDirectorFilms={[
            "Halloween (1978)",
            "The Thing (1982)",
            "The Fog (1980)",
          ]}
        />
        <div className="line-separator"></div>

        <PopularDirectorCard
          imageUrl={"./images/home_popular_directors/cronenberg.jpg"}
          directorName={"David Cronenberg"}
          description={[
            "David Cronenberg is a Canadian director known for his horror and science fiction films with a focus on body horror. Born in 1943, Cronenberg has directed iconic films such as The Fly, Videodrome, and A History of Violence. His films often explore physical and psychological transformation, challenging conventional notions of identity and reality.",

            "Cronenberg's work is characterized by dark and provocative themes, as well as innovative visual effects that portray mutations and metamorphoses. He has received numerous awards throughout his career and remains an influential figure in contemporary cinema. His unique approach and willingness to tackle taboo subjects have made him a cult filmmaker.",
          ]}
          popularDirectorFilms={[
            "Videodrome (1983)",
            "The Fly (1986)",
            "Scanners (1981)",
          ]}
          reverse={true}
        />
        <div className="line-separator"></div>

        <PopularDirectorCard
          imageUrl={"./images/home_popular_directors/argento.png"}
          directorName={"Dario Argento"}
          description={[
            "Dario Argento is an Italian director famous for his giallo horror films, a subgenre that combines elements of crime, mystery, and horror. Born in 1940, Argento has directed classics such as Suspiria, Deep Red, and Inferno. His visual style is known for its bold use of color and music, as well as its elaborate and stylized death sequences.",

            "Argento has worked with some of the most renowned composers in cinema, including Ennio Morricone and the progressive rock band Goblin, who have contributed to the unsettling atmospheres of his films. His ability to combine beauty and horror has left an indelible mark on the genre and has influenced many contemporary directors.",
          ]}
          popularDirectorFilms={[
            "Suspiria (1977)",
            "Deep Red (1975)",
            "Tenebre (1982)",
          ]}
        />
        <div className="line-separator"></div>

        <PopularDirectorCard
          imageUrl={"./images/home_popular_directors/romero.png"}
          directorName={"George A. Romero"}
          description={[
            "George A. Romero was an American director known as the father of zombies. Born in 1940, he revolutionized horror cinema with his 1968 film Night of the Living Dead and continued to explore the genre with films such as Dawn of the Dead and Day of the Dead. Romero used the horror genre to comment on social and political issues, making his films more than just simple scares.",

            "Romero is widely recognized for his influence on popular culture, particularly in the zombie subgenre. His films were not only innovative in terms of special effects and storytelling but also offered biting critiques of society and consumerism. His legacy endures through the numerous adaptations and homages to his work in film and television.",
          ]}
          popularDirectorFilms={[
            "Suspiria (1977)",
            "Deep Red (1975)",
            "Tenebre (1982)",
          ]}
          reverse={true}
        />
      </div>
    </section>
  );
};
