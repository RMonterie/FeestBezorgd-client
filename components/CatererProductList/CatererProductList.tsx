import React, { useState, useEffect } from "react";

import { getSingleCaterer } from "../../api/caterers/catererMethods";

const CatererProductList = () => {
  const [catererProducts, setCatererProducts] = useState([]);

  useEffect(() => {
    const getCaterer = async () => {
      const caterer = await getSingleCaterer();
      if (caterer) {
        setCatererProducts(caterer.data.products);
      }
      console.log(catererProducts);
    };

    getCaterer();
  }, []);

  return (
    <div>
      {catererProducts.length > 0 ? (
        catererProducts.map((product) => {
          <p>{product.name}</p>;
        })
      ) : (
        <h2>No products</h2>
      )}
    </div>
  );
};

export default CatererProductList;
