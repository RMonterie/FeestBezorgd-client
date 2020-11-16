import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";

import {
  clearCart,
  removeProductFromcart,
} from "../../../redux/actions/cartActions";

import BaseLayout from "../../../layout/BaseLayout";
import ProductList from "../../../components/ProductList";

import "./CatererPage.scss";

const CatererPage = () => {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const router = useRouter();
  const catererName = router.query.caterer?.toString();

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
          <ProductList products={products} />
        ) : (
          <h2>Loading...</h2>
        )}

        <div>
          Products in shopping cart
          <div>
            {cartItems.length != 0 &&
              cartItems.map((item) => {
                return (
                  <div>
                    <p>{item.name}</p>
                    <p>{`€${item.price}`}</p>
                    <p>{cartItems.indexOf(item)}</p>
                    <button onClick={() => dispatch(removeProductFromcart())}>
                      Delete🗑
                    </button>
                  </div>
                );
              })}
            <button onClick={() => dispatch(clearCart())}>
              Clear the shopping cart
            </button>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default CatererPage;
