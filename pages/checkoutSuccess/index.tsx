import React from "react";
import BaseLayout from "../../layout/BaseLayout";

/**
 * Page that gets displayed when the checkout
 * was successful
 *
 */
const CheckoutSuccessPage: React.FC = () => {
  return (
    <BaseLayout title="Checkout Successful">
      <div>
        <h2>
          Your order was received successfully! the caterer will be ready for
          you on [TIME] at [PLACE]
        </h2>
      </div>
    </BaseLayout>
  );
};

export default CheckoutSuccessPage;
