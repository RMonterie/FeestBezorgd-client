import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import BaseLayout from "../../../layout/BaseLayout";
import ProductList from "../../../components/ProductList";

import "./CatererPage.scss";

const CatererPage = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const catererName = router.query.caterer.toString();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/caterers?username=${router.query.caterer}`)
      .then((response) => {
        setProducts(response.data[0].products);
      });
  }, []);

  return (
    <BaseLayout title={catererName}>
      <div>
        <h2 className="page-title">Products of caterer {catererName}</h2>
        {products.length != 0 ? (
          <ProductList products={products} />
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </BaseLayout>
  );
};

export default CatererPage;
