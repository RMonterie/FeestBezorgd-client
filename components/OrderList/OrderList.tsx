import React from "react";

import OrderListItem from "./OrderListItem/OrderListItem";

interface ProductListProps {
  orders: any;
}

const OrderList: React.FC<ProductListProps> = ({ orders }) => {
  return (
    <div className="list-container">
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
          paymentId={order.paymentId}
        />
      ))}
    </div>
  );
};

export default OrderList;
