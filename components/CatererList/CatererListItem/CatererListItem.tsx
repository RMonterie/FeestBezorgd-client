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
      <div className="caterer-card">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/25/07/30/red-1618916_1280.png"
          alt="caterer logo"
          height={80}
          width={80}
        />
        <h4 className="caterer-name">{catererName}</h4>
      </div>
    </PageLink>
  );
};

export default CatererListItem;
