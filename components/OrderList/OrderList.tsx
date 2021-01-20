import React from "react";

import OrderListItem from "./OrderListItem/OrderListItem";

import "./OrderList.scss";

interface ProductListProps {
  orders: any;
}

/**
 * List consisting of orders that a customer has made.
 * Renders an OrderListItem for each order the customer has made.
 */
const OrderList: React.FC<ProductListProps> = ({ orders }) => {
  return (
    <ul className="order-list-container">
      {orders.map((order, index) => (
        <OrderListItem
          key={index}
          productList={order.productList}
          id={order.id}
          customerUsername={order.customerUsername}
          catererUsername={order.catererUsername}
          email={order.email}
          deliveryAddress={order.deliveryAddress}
          deliveryZipCode={order.deliveryZipCode}
          deliveryCity={order.deliveryCity}
          phoneNumber={order.phoneNumber}
          deliveryDate={order.deliveryDate}
          deliveryTime={order.deliveryTime}
          paymentId={order.paymentId}
        />
      ))}
    </ul>
  );
};

export default OrderList;
