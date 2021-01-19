import React from "react";

import PageLink from "../../page/PageLink";

interface OrderListItemProps {
  productList: any;
  id: number;
  customerUsername: string;
  catererUsername: string;
  email: string;
  deliveryAddress: string;
  deliveryZipCode: string;
  deliveryCity: string;
  phoneNumber: string;
  paymentId: string;
}

/**
 * Component that displays a card with the name of
 * a given caterer and a link to the caterer's page.
 *
 * @returns {JSX.Element}
 */
const OrderListItem: React.FC<OrderListItemProps> = ({
  productList,
  id,
  customerUsername,
  catererUsername,
  email,
  deliveryAddress,
  deliveryZipCode,
  deliveryCity,
  phoneNumber,
  paymentId,
}) => {
  return (
    <div>
      <h4>{customerUsername}</h4>
      <h4>{catererUsername}</h4>
      <h4>{email}</h4>
      <h4>{deliveryAddress}</h4>
      <h4>{deliveryZipCode}</h4>
      <h4>{deliveryCity}</h4>
      <h4>{phoneNumber}</h4>
      <h4>{paymentId}</h4>
    </div>
  );
};

export default OrderListItem;
