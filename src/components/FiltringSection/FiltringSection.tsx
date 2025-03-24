import { useState } from "react";
import { FaStar } from "react-icons/fa";

const FilterSection = () => {
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Elecciones");
  const [selectedBrand, setSelectedBrand] = useState("MAS IT SOLUTION");
  const [selectedRating, setSelectedRating] = useState(1);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Filter</h2>
      
      {/* Price Filter */}
      <div className="mb-6">
        <label className="font-semibold text-2xl">Price</label>
        <input
          type="range"
          min="0"
          max="5000"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="w-full mt-2"
        />
        <div className="flex justify-between text-base">
          <span>৳{selectedPrice}</span>
          <span>৳5000</span>
        </div>
        {/* <p className="text-sm mt-1">Selected Price: ${selectedPrice}</p> */}
      </div>

      {/* Product Category */}
      <div className="mb-6">
        <label className="font-semibold text-2xl">Product Category</label>
        <div className="flex flex-col mt-2 text-sm">
          {["Donovan Klein", "Elecciones"].map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="w-5 h-5"
              />
              <span className="text-xl">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="mb-6">
        <label className="font-semibold text-2xl">Brands</label>
        <div className="flex flex-col mt-2 text-sm">
          {["MAS IT SOLUTIONS", "MAS IT SOLUTION"].map((brand) => (
            <label key={brand} className="flex items-center space-x-2">
              <input
                type="radio"
                name="brand"
                value={brand}
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(brand)}
                className="w-5 h-5"
              />
              <span className="text-xl ">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <label className="font-semibold text-2xl">Rating</label>
        <div className="flex flex-col mt-2 text-sm">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center space-x-2">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={selectedRating === rating}
                onChange={() => setSelectedRating(rating)}
                className="w-5 h-5 mt-1"
              />
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < rating ? "text-yellow-500 text-xl" : "text-gray-300 text-xl"
                    }
                  />
                ))}
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
