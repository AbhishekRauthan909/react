import ListItems from "./ListItems";
import { useState } from "react";

const RestaurantCategory = ({data,showItems,onCategoryClick}) => {
  // Function to toggle the 'showItems' state
  console.log(showItems);
  const handleClick = () => {
   onCategoryClick();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Conditionally rendering the 'ListItems' component based on 'showItems' state */}
        {showItems && <ListItems items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;