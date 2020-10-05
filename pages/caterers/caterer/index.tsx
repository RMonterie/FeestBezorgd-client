import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import BaseLayout from "../../../layout/BaseLayout";

const CatererPage = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/findCaterer?username=${router.query.caterer}`)
      .then((response) => setProducts(response.data.products));
  }, []);
  return (
    <BaseLayout title={router.query.caterer}>
      <div>
        {products.map((product) => (
          <h1 key={product.id}>
            {product.name}: €{product.price},-
          </h1>
        ))}
      </div>
    </BaseLayout>
  );
};

export default CatererPage;
