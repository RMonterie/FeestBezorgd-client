import { CartSummary } from "../../components/CartSummary/CartSummary";
import ShoppingCart from "../../components/ShoppingCart";
import BaseLayout from "../../layout/BaseLayout";

import "./ShoppingCartPage.scss";

/**
 * Page that displays the shopping cart and acts as gateway to
 * the checkout.
 *
 * @returns {JSX.Element}
 */
const ShoppingCartPage = () => {
  return (
    <BaseLayout title="Your order">
      <div className="shoppingcart-page-content">
        <h1 className="shoppingcart-page-title">
          All the products in your shopping cart.
        </h1>
        <div className="cart-container">
          <ShoppingCart />
          <CartSummary />
        </div>
      </div>
    </BaseLayout>
  );
};

export default ShoppingCartPage;
