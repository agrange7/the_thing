export const AnalysisCard = ({ title, description, alternative, flex }) => {
  return (
    <li className={`analysis-card ${alternative && "bg"} ${flex && "flex"}`}>
      <h4 className={`analysis-card-titles`}>{title}</h4>
      <p>{description}</p>
      <a className={`analysis-link`} href="#">
        Read Analysis
      </a>
    </li>
  );
};
