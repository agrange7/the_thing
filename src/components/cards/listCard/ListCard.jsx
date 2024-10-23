import PropTypes from "prop-types";
import "./ListCard.css";

export const ListCard = ({ list, paragraph, row }) => {
  return (
    <div
      className={`popular-list-container ${row ? "all-list-container" : ""}`}
    >
      {" "}
      <a className="list-link" href="#">
        {list.images.map((imgUrl, imgIndex) => (
          <img
            key={imgIndex}
            className="list-img"
            src={imgUrl}
            alt={`Image ${imgIndex + 1}`}
          />
        ))}
      </a>
      <div class="all-list-text-container">
        <h3>{list.listTitle}</h3>
        <p class="list-paragraph">
          {paragraph ? <p className="list-paragraph">{paragraph}</p> : null}
        </p>
      </div>
    </div>
  );
};

ListCard.propTypes = {
  list: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    listTitle: PropTypes.string.isRequired,
  }).isRequired,
  paragraph: PropTypes.string,
  row: PropTypes.bool.isRequired,
};
