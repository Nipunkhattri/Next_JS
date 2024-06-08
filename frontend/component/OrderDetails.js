import React from 'react';

const OrderDetails = ({ order }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-4">Order Details</h2>
      <p><strong>ID:</strong> {order.id}</p>
      <p><strong>Customer Name:</strong> {order.customer}</p>
      <p><strong>Status:</strong> {order.status}</p>
    </div>
  );
};

export default OrderDetails;