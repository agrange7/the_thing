export const ListCard = ({ imgUrl, listTitle }) => {
  return (
    <div className="popular-list-container">
      <a className="list-link" href="#">
        {imgUrl}
        <img className="list-img" src={imgUrl} />
      </a>
      <h3>{listTitle}</h3>
    </div>
  );
};
