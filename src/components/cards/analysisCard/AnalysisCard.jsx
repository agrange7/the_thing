export const AnalysisCard = ({ title, description }) => {
  return (
    <li className="analysis-card">
      <h4 className="analysis-card-titles">{title}</h4>
      <p>{description}</p>
      <a className="analysis-link" href="#">
        Read Analysis
      </a>
    </li>
  );
};
