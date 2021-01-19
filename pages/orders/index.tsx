import React, { useEffect, useState } from "react";

import BaseLayout from "../../layout/BaseLayout";
import { getAllOrders } from "../../api/user/orderMethods";
import OrderList from "../../components/OrderList/OrderList";

const orderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const response = await getAllOrders();
      if (response) {
        setOrders(response.data);
      }
    };

    getOrders();
  }, [setOrders]);

  return (
    <BaseLayout title="My orders">
      <div>
        <h2>My Orders</h2>
        {orders.length > 0 ? (
          <OrderList orders={orders} />
        ) : (
          <h2>Something went wrong with fetching your orders</h2>
        )}
      </div>
    </BaseLayout>
  );
};

export default orderPage;
