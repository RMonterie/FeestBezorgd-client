import PageLink from "../../page/PageLink";
import "./CatererListItem.scss";

const ListItem = ({ catererName }) => {
  return (
    <PageLink to={`/caterers/caterer?caterer=${catererName}`}>
      <div className="card">
        <h4>{catererName}</h4>
      </div>
    </PageLink>
  );
};

export default ListItem;
