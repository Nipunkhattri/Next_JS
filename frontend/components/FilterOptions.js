import React from 'react';

const FilterOptions = ({ onChange }) => {
  const handleFilterChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="my-4">
      <label className="block mb-2" htmlFor="filter">
        Filter by Stock:
      </label>
      <select
        id="filter"
        className="p-2 border border-gray-300 rounded-md"
        onChange={handleFilterChange}
      >
        <option value="all">All</option>
        <option value="inStock">In Stock</option>
        <option value="outOfStock">Out of Stock</option>
      </select>
    </div>
  );
};

export default FilterOptions;
