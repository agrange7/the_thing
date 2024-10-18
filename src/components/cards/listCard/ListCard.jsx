export const ListCard = ({ list, paragraph }) => {
  return (
    <div className="popular-list-container">
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
      <h3>{list.listTitle}</h3>
    </div>
  );
};
