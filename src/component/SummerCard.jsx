import React from "react";

const ProductCard = () => {
  return (
    <div className="relative w-full max-w-xs mx-auto mt-10 overflow-hidden rounded-xl shadow-lg group cursor-pointer">
      {/* Card Image */}
      <div className="w-full h-[250px] relative overflow-hidden">
        {/* Initial Image (pose 1) */}
        <img
          src="https://media.istockphoto.com/id/534193109/photo/looking-good.jpg?s=612x612&w=0&k=20&c=I-PpwparAQwpbxPEdoF60Cqy7Jw2OO0pcMyjwmsYTcc=" // Replace with the initial image URL
          alt="Initial Pose"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" // Reduced zoom effect
        />
        
        {/* Hover Image (pose 2) */}
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4i0NM6ZkN2e18_4Y5CecHSU4j587Q-NBy12zkihkAlA6C-GZC0IbyH4x92yKXWlb5UUo&usqp=CAU" // Replace with the second pose image URL
            alt="Pose Change"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">Running Shoes</h3> {/* Product Title */}
        <p className="text-sm text-gray-600">Footwear</p> {/* Product Category */}
        <p className="text-lg font-bold text-gray-900 mt-2">$49.99</p> {/* Product Price */}
      </div>

      {/* Link to the product */}
      <a
        className="absolute inset-0 z-10" // This makes the entire card clickable
        href="/collections/casual-shirts/products/tc25-43"
        data-product-handle="tc25-43"
      ></a>
    </div>
  );
};

export default ProductCard;


