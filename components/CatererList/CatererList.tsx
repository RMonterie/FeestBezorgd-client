import CatererListItem from "./CatererListItem/CatererListItem";

import "./CatererList.scss";

//TODO: Type interface
interface CatererListProps {
  caterers: any;
}

/**
 * Component that renders out a list of CatererListItems with given
 * list of caterers.
 *
 * @returns {JSX.Element}
 */
const CatererList: React.FC<CatererListProps> = ({ caterers }) => {
  return (
    <div className="caterer-list-container">
      <div>
        {caterers.map((caterer, index) => (
          <CatererListItem key={index} catererName={caterer.username} />
        ))}
      </div>
    </div>
  );
};

export default CatererList;
