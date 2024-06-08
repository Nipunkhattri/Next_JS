import React, { useState } from 'react';
import OrderDetails from '../component/OrderDetails.js';
import { useDispatch, useSelector } from 'react-redux';
import { completeOrder } from '@/redux/features/Slice';

const OrderListing = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.dummy.orders);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleCompleteOrder = (order) => {
    dispatch(completeOrder(order.id)); 
    setSelectedOrder(null);
  };

  const filteredOrders = orders.filter(order =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-8 h-screen">
         <div className="mb-4">
          <input
            type="text"
            placeholder="Search orders by customer name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 mr-2"
          />
        </div>
      <table className="min-w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Customer Name</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Item Count</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <tr key={order.id} className="border-b">
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.customer}</td>
              <td className="px-4 py-2">{order.status}</td>
              <td className="px-4 py-2">{order.items.length}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleOrderClick(order)}
                >
                  View Details
                </button>
                {order.status === 'Pending' && (
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleCompleteOrder(order)}
                    >
                    Mark as Completed
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedOrder && (
          <div className="container mx-auto mt-8">
            <h2 className="text-lg font-semibold mb-4">Order Details</h2>
            <p><strong>ID:</strong> {order.id}</p>
            <p><strong>Customer Name:</strong> {order.customer}</p>
            <p><strong>Status:</strong> {order.status}</p>
          </div>
      )}
    </div>
  );
};

export default OrderListing;