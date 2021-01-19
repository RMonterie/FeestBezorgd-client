import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./OrderListItem.scss";

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
 * Component that displays a card with an order the
 * customer has made
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
  const [open, setOpen] = useState(false);
  return (
    <li className="order-item-container">
      <div className="order-item-title" onClick={() => setOpen(!open)}>
        {open ? (
          <FontAwesomeIcon icon={faChevronDown} className="collapse-toggle" />
        ) : (
          <FontAwesomeIcon icon={faChevronRight} className="collapse-toggle" />
        )}
        <h2 className={"title-tag"}>Payment Id: </h2>
        <h2>{paymentId}</h2>
      </div>
      {open && (
        <div>
          <div className="order-detail-item">
            <p className="order-detail-title">Caterer Ordered From:</p>
            <span>{catererUsername}</span>
          </div>
          <h3>Your details</h3>
          <div className="order-detail-item">
            <p className="order-detail-title">Name:</p>
            <span>{customerUsername}</span>
          </div>
          <div className="order-detail-item">
            <p className="order-detail-title">Email:</p>
            <span>{email}</span>
          </div>
          {phoneNumber?.trim() && (
            <div className="order-detail-item">
              <p className="order-detail-title">Phone Number:</p>
              <span>{phoneNumber}</span>
            </div>
          )}
          <h3>Delivery Address</h3>
          <div className="order-detail-item">
            <p className="order-detail-title">Street Address:</p>
            <span>{deliveryAddress}</span>
          </div>
          <div className="order-detail-item">
            <p className="order-detail-title">Zip Code:</p>
            <span>{deliveryZipCode}</span>
          </div>
          <div className="order-detail-item">
            <p className="order-detail-title">City:</p>
            <span>{deliveryCity}</span>
          </div>
        </div>
      )}
    </li>
  );
};

export default OrderListItem;
