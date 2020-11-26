import CatererListItem from "./CatererListItem/CatererListItem";

//TODO: Type interface

/**
 * Component that renders out a list of CatererListItems with given
 * list of caterers.
 *
 * @returns {JSX.Element}
 */
const CatererList = ({ caterers }) => {
  return (
    <div className="list-container">
      <div>
        {caterers.map((caterer) => (
          <CatererListItem key={caterer.id} catererName={caterer.username} />
        ))}
      </div>
    </div>
  );
};

export default CatererList;
