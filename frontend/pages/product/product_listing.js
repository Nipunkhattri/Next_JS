import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, editItem } from '../../redux/features/Slice'; 
import { dummyData } from '../../dummydata';
import FilterOptions from './FilterOptions';
import InventoryList from './InventoryList';
import AddItemForm from './AddItemForm';
import { useRouter } from 'next/router';

function product_listing() {
  const dispatch = useDispatch();
  const router = useRouter();
  // getting the data from redux store
  const itemsById = useSelector(state => state.dummy.itemsById);

  // filtering and searching
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  // edit the data
  const handleEditItem = (itemId, updatedItem) => {
    dispatch(editItem({ itemId, updatedItem }));
  };

  // delete the data
  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  // add the data
  const handleAddItem = (newItem) =>{
    dispatch(addItem(newItem));
  }

  const handleClick = () => {
    router.push('/order/order_listing');
  };

  // Function to filter items based on name
  const filteredItems = itemsById.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='h-screen p-20 flex flex-col items-center'>
      <h1 className='text-center text-2xl mb-3'>Inventory Management System</h1>
      <div className="flex items-center mb-4 justify-center flex-col">
        <input
          type="text"
          placeholder="Enter the product Name...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 mr-2"
        />
        <FilterOptions onChange={handleFilterChange} /> 
      </div>
      <InventoryList inventory={filteredItems} onDelete={handleDeleteItem} onEdit={handleEditItem} filter={filter}/>
      <AddItemForm onAdd={handleAddItem} />
      <button onClick={handleClick} className='h-12 w-40 bg-black text-white rounded-md'>Order Details Page</button>
    </div>
  );
}

export default product_listing;
