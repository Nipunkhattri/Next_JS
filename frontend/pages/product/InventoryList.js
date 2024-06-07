import React, { useState } from 'react';

const InventoryList = ({ inventory, filter, onEdit, onDelete }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedItem, setEditedItem] = useState(null);
  const [editedStock, setEditedStock] = useState(0);

  const filteredInventory = inventory.filter(item => {
    if (filter === 'inStock') {
      return item.stock > 0;
    } else if (filter === 'outOfStock') {
      return item.stock === 0;
    } else {
      return true;
    }
  });

  const handleEdit = (item) => {
    setEditedItem(item);
    setEditedStock(item.stock);
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    if (editedItem) {
      onEdit(editedItem.id, { ...editedItem, stock: editedStock });
      setEditedItem(null);
      setEditedStock(0);
      setShowEditModal(false);
    }
  };

  const handleDelete = (itemId) => {
    onDelete(itemId);
  };

  return (
    <div className="my-4">
      <h2 className="text-lg font-semibold mb-2">Inventory</h2>
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.map(item => (
            <tr key={item.id} className="border-b border-gray-200">
              <td className="px-4 py-2">{item.id}</td>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.stock}</td>
              <td className="px-4 py-2">
                <button
                  className="text-blue-600 hover:text-blue-900 mr-2"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:text-red-900"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showEditModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Edit Item</h2>
            <input
              type="text"
              className="border border-gray-300 rounded px-3 py-2 mb-2 w-full"
              value={editedStock}
              onChange={(e) => setEditedStock(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
                onClick={handleSaveEdit}
              >
                Save
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryList;