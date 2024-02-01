import React, { useEffect, useState } from "react";
import { items } from "./Items";

export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = ["Shoes", "Watches", "Jeans", "Eyeglasses"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mt-8">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded ${
              selectedFilters?.includes(category) ? "bg-blue-900" : ""
            } mx-2 focus:outline-none`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center mt-8">
        {filteredItems.map((item, idx) => (
          <div
            key={`items-${idx}`}
            className="item m-3 p-10 border rounded shadow-md bg-teal-100"
          >
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
