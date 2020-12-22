import React from "react";

const CatererProductListItem = (product) => {
  return (
    <div className="card">
      <h4>{product.name}</h4>
    </div>
  );
};

export default CatererProductListItem;
