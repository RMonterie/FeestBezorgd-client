import CatererItem from "../CatererItem";

const CatererList = ({ caterers }) => {
  return (
    <div className="list-container">
      <div>
        {caterers.map((caterer) => (
          <CatererItem
            key={caterer.id}
            catererName={caterer.name}
            catererEmail={caterer.email}
          />
        ))}
      </div>
    </div>
  );
};

export default CatererList;
