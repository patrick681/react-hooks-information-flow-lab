// src/components/Filter.js
import React from "react";

function Filter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="Filter">
      <select name="filter" value={selectedCategory} onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
        <option value="Bakery">Bakery</option>
        {/* Add more categories here if needed */}
      </select>
    </div>
  );
}

export default Filter;
