import React from "react";

import BaseLayout from "../../layout/BaseLayout";
import CheckoutForm from "../../components/Forms/CheckoutForm";
import CheckoutSummary from "../../components/CheckoutSummary";

import "./CheckoutPage.scss";

const CheckoutPage = () => {
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
