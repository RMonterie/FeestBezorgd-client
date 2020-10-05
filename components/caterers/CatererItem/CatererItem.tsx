import PageLink from "../../page/PageLink";
import "./CatererItem.scss";

const CatererItem = ({ catererName, catererEmail }) => {
  return (
    <PageLink to={`/caterers/caterer?caterer=${catererName}`}>
      <div className="card">
        <h4>{catererName}</h4>
        <h5>{catererEmail}</h5>
      </div>
    </PageLink>
  );
};

export default CatererItem;
