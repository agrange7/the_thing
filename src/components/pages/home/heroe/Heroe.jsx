import { Carousel } from "../../../carousel/Carousel";
import "./Heroe.css";
export const Heroe = () => {
  return (
    <section className="section-home sections-vertical">
      <h2 className="recommendation-h2">Weekly Recommendation</h2>
      <Carousel />
    </section>
  );
};
