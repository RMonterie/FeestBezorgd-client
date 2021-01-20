import React from "react";

import BaseLayout from "../../layout/BaseLayout";
import CheckoutForm from "../../components/Forms/CheckoutForm";
import CheckoutSummary from "../../components/CheckoutSummary";

import "./CheckoutPage.scss";

/**
 * Page for checking out the contents
 * of the shopping cart.
 */
const CheckoutPage: React.FC = () => {
  return (
    <BaseLayout title="checkout">
      <div className="checkout-page">
        <CheckoutForm />
        <CheckoutSummary />
      </div>
    </BaseLayout>
  );
};

export default CheckoutPage;
