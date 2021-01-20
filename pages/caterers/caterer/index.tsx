import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import BaseLayout from "../../../layout/BaseLayout";
import ProductList from "../../../components/ProductList";

import "./CatererPage.scss";

/**
 * Page that displays the details and catalogue
 * of a single caterer.
 *
 */
const CatererPage: React.FC = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const catererName = router.query.caterer?.toString();

  //TODO: Remove the axios call from the useEffect
  useEffect(() => {
    axios
      .get(`http://localhost:8080/caterers/${router.query.caterer}`)
      .then((response) => {
        setProducts(response.data.products);
      });
  }, [router.query.caterer?.toString()]);

  return (
    <BaseLayout title={catererName}>
      <div className="caterer-page-container">
        <h2 className="page-title">Products of caterer {catererName}</h2>
        {products?.length ? (
          <ProductList products={products} catererName={catererName} />
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </BaseLayout>
  );
};

export default CatererPage;
