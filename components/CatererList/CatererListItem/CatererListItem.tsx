import PageLink from "../../page/PageLink";
import "./CatererListItem.scss";

interface CatererListItemProps {
  catererName: string;
}

/**
 * Component that displays a card with the name of
 * a given caterer and a link to the caterer's page.
 *
 * @returns {JSX.Element}
 */
const CatererListItem: React.FC<CatererListItemProps> = ({ catererName }) => {
  return (
    <PageLink to={`/caterers/caterer?caterer=${catererName}`}>
      <div className="card">
        <h4>{catererName}</h4>
      </div>
    </PageLink>
  );
};

export default CatererListItem;
