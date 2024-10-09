import { Carousel } from "../../../carousel/Carousel";
import "./Hero.css";
export const Hero = () => {
  return (
    <section className="section-home sections-vertical">
      <h2 className="recommendation-h2">Weekly Recommendation</h2>
      <Carousel />
    </section>
  );
};
