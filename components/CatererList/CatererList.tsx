import ListItem from "./CatererListItem/CatererListItem";

const CatererList = ({ caterers }) => {
  return (
    <div className="list-container">
      <div>
        {caterers.map((caterer) => (
          <ListItem key={caterer.id} catererName={caterer.username} />
        ))}
      </div>
    </div>
  );
};

export default CatererList;
