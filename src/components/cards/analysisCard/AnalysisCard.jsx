import PropTypes from "prop-types";
import "./AnalysisCard.css";
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
AnalysisCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alternative: PropTypes.bool,
  flex: PropTypes.bool,
};
