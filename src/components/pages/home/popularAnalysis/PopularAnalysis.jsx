import { AnalysisCard } from "../../../cards/analysisCard/AnalysisCard";
import "./PopularAnalysis.css";
export const PopularAnalysis = () => {
  return (
    <section className="section-popular-analysis sections-vertical">
      <h2>Popular Analysis</h2>
      <ul className="popular-analysis-container">
        <AnalysisCard />
      </ul>
    </section>
  );
};
