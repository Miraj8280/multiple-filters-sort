import React from "react";

const SortItems = ({ sortItemsByBrand, sortItemsByCategory }) => {
  return (
    <div className="flex flex-col items-center mt-7">
      <button
        onClick={sortItemsByBrand}
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded my-2 focus:outline-none"
      >
        Sort by Brands
      </button>
      <button
        onClick={sortItemsByCategory}
        className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded my-2 focus:outline-none"
      >
        Sort by Category
      </button>
    </div>
  );
};

export default SortItems;
