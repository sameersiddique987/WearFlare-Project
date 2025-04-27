// import React from 'react';
// import Button from './Button/Button';
// import AddtocardButton from './Button/Addtocard';
// import Swal from "sweetalert2";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


// function SingleCard({
//   src,
//   category,
//   description,
//   price,
//   quantity,
//   increaseQuantity,
//   decreaseQuantity,
//   payNow,
//   addCard,
//   selectedSize,
//   setSelectedSize,
// }) {
//   const sizes = ['S', 'M', 'XL', '2XL'];

//   const handleAddToCart = () => {
//     if (!selectedSize) {
//       Swal.fire({
//         title: "Select a Size",
//         text: "Please select a size before adding to cart.",
//         icon: "warning",
//         confirmButtonColor: "#234e94",
//         confirmButtonText: "OK",
//       });
//       return;
//     }
//     addCard();
//   };

//   return (
//     <div className="m-5 sm:m-10 flex justify-center">
//       <div className="p-8 sm:p-14 flex flex-col md:flex-row items-center bg-white border border-gray-300 rounded-3xl shadow-2xl max-w-6xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 w-full">
        
//         {/* Product Image */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <img
//             className="object-cover w-full h-[450px] rounded-3xl"
//             src={src}
//             alt={`Image of ${category}`}
//           />
//         </div>

//         {/* Product Details */}
//         <div className="flex flex-col justify-center p-6 w-full md:w-1/2">
//           {/* Category */}
//           <h5 className="mb-4 text-3xl font-bold tracking-wide text-gray-900">{category}</h5>
          
//           {/* Rating Stars */}
//           <div className="flex items-center mb-4 text-yellow-500">
//             <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
//           </div>

//           {/* Description */}
//           <p className="mb-6 text-base sm:text-lg text-gray-700">{description}</p>
          
//           {/* Price */}
//           <p className="mb-6 text-2xl font-bold text-gray-900">Price: ${price}</p>

//           {/* Size Selector */}
//           <div className="mb-6">
//             <p className="text-lg font-semibold mb-3">Select Size</p>
//             <div className="flex gap-4 flex-wrap">
//               {sizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-5 py-3 border rounded-full text-lg ${
//                     selectedSize === size
//                       ? 'bg-black text-white font-bold ring-2 ring-gray-400'
//                       : 'bg-white text-black border-gray-300 hover:bg-gray-200'
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity */}
//           <div className="flex items-center gap-4 mb-6">
//             <p className="text-lg font-semibold">Quantity</p>
//             <button
//               onClick={decreaseQuantity}
//               className="px-5 py-2 bg-[#f5f5f5] hover:bg-[#d4d4d4] text-black rounded-full text-lg"
//             >
//               -
//             </button>
//             <span className="text-2xl">{quantity}</span>
//             <button
//               onClick={increaseQuantity}
//               className="px-5 py-2 bg-[#f5f5f5] hover:bg-[#d4d4d4] text-black rounded-full text-lg"
//             >
//               +
//             </button>
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row items-center gap-4">
//             <Button onClick={payNow} />
//             <AddtocardButton onClick={handleAddToCart} />
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingleCard;





// import React, { useState } from 'react';
// import Button from './Button/Button';
// import AddtocardButton from './Button/Addtocard';
// import Swal from "sweetalert2";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// function SingleCard({
//   src,
//   category,
//   description,
//   price,
//   quantity,
//   increaseQuantity,
//   decreaseQuantity,
//   payNow,
//   addCard,
//   selectedSize,
//   setSelectedSize,
// }) {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const sizes = ['S', 'M', 'XL', '2XL'];

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const imageRect = e.target.getBoundingClientRect();
//     const offsetX = clientX - imageRect.left;
//     const offsetY = clientY - imageRect.top;
//     setCursorPosition({
//       x: offsetX / imageRect.width,
//       y: offsetY / imageRect.height
//     });
//   };

//   const handleAddToCart = () => {
//     if (!selectedSize) {
//       Swal.fire({
//         title: "Select a Size",
//         text: "Please select a size before adding to cart.",
//         icon: "warning",
//         confirmButtonColor: "#234e94",
//         confirmButtonText: "OK",
//       });
//       return;
//     }
//     addCard();
//   };

//   return (
//     <div className="m-5 sm:m-10 flex justify-center">
//       <div className="p-8 sm:p-14 flex flex-col md:flex-row items-center bg-white border border-gray-300 rounded-3xl shadow-2xl max-w-6xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 w-full">
        
//         {/* Product Image */}
//         <div 
//           className="w-full md:w-1/2 flex justify-center relative"
//           onMouseMove={handleMouseMove}
//         >
//           <img
//             className="object-cover w-full h-[450px] rounded-3xl"
//             src={src}
//             alt={`Image of ${category}`}
//             style={{
//               transformOrigin: `${cursorPosition.x * 100}% ${cursorPosition.y * 100}%`,
//               objectPosition: `${cursorPosition.x * 100}% ${cursorPosition.y * 100}%`,
//             }}
//           />
//         </div>

//         {/* Product Details */}
//         <div className="flex flex-col justify-center p-6 w-full md:w-1/2">
//           {/* Category */}
//           <h5 className="mb-4 text-3xl font-bold tracking-wide text-gray-900">{category}</h5>
          
//           {/* Rating Stars */}
//           <div className="flex items-center mb-4 text-yellow-500">
//             <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
//           </div>

//           {/* Description */}
//           <p className="mb-6 text-base sm:text-lg text-gray-700">{description}</p>
          
//           {/* Price */}
//           <p className="mb-6 text-2xl font-bold text-gray-900">Price: ${price}</p>

//           {/* Size Selector */}
//           <div className="mb-6">
//             <p className="text-lg font-semibold mb-3">Select Size</p>
//             <div className="flex gap-4 flex-wrap">
//               {sizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-5 py-3 border rounded-full text-lg ${
//                     selectedSize === size
//                       ? 'bg-black text-white font-bold ring-2 ring-gray-400'
//                       : 'bg-white text-black border-gray-300 hover:bg-gray-200'
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity */}
//           <div className="flex items-center gap-4 mb-6">
//             <p className="text-lg font-semibold">Quantity</p>
//             <button
//               onClick={decreaseQuantity}
//               className="px-5 py-2 bg-[#f5f5f5] hover:bg-[#d4d4d4] text-black rounded-full text-lg"
//             >
//               -
//             </button>
//             <span className="text-2xl">{quantity}</span>
//             <button
//               onClick={increaseQuantity}
//               className="px-5 py-2 bg-[#f5f5f5] hover:bg-[#d4d4d4] text-black rounded-full text-lg"
//             >
//               +
//             </button>
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row items-center gap-4">
//             <Button onClick={payNow} />
//             <AddtocardButton onClick={handleAddToCart} />
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingleCard;










import React, { useState } from 'react';
import Button from './Button/Button';
import AddtocardButton from './Button/Addtocard';
import Swal from "sweetalert2";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { motion } from 'framer-motion';

function SingleCard({
  src,
  category,
  description,
  price,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  payNow,
  addCard,
  selectedSize,
  setSelectedSize,
}) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const sizes = ['S', 'M', 'XL', '2XL'];

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const imageRect = e.target.getBoundingClientRect();
    const offsetX = clientX - imageRect.left;
    const offsetY = clientY - imageRect.top;
    setCursorPosition({
      x: offsetX / imageRect.width,
      y: offsetY / imageRect.height
    });
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      Swal.fire({
        title: "Select a Size",
        text: "Please select a size before adding to cart.",
        icon: "warning",
        confirmButtonColor: "#234e94",
        confirmButtonText: "OK",
      });
      return;
    }
    addCard();
  };

  return (
    <div className="m-5 sm:m-10 flex justify-center">
      <div className="p-8 sm:p-14 flex flex-col md:flex-row items-center bg-white border border-gray-300 rounded-3xl shadow-2xl max-w-6xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 w-full">
        
        {/* Product Image */}
        <div 
          className="w-full md:w-1/2 flex justify-center relative"
          onMouseMove={handleMouseMove}
        >
          <motion.img
            className="object-cover w-full h-[450px] rounded-3xl"
            src={src}
            alt={`Image of ${category}`}
            style={{
              transformOrigin: `${cursorPosition.x * 100}% ${cursorPosition.y * 100}%`,
              objectPosition: `${cursorPosition.x * 100}% ${cursorPosition.y * 100}%`,
            }}
            whileHover={{ scale: 1.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center p-6 w-full md:w-1/2">
          {/* Category */}
          <h5 className="mb-4 text-3xl font-bold tracking-wide text-gray-900">{category}</h5>
          
          {/* Rating Stars */}
          <div className="flex items-center mb-4 text-yellow-500">
            <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
          </div>

          {/* Description */}
          <p className="mb-6 text-base sm:text-lg text-gray-700">{description}</p>
          
          {/* Price */}
          <p className="mb-6 text-2xl font-bold text-gray-900">Price: ${price}</p>

          {/* Size Selector */}
          <div className="mb-6">
            <p className="text-lg font-semibold mb-3">Select Size</p>
            <div className="flex gap-4 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-3 border rounded-full text-lg ${
                    selectedSize === size
                      ? 'bg-black text-white font-bold ring-2 ring-gray-400'
                      : 'bg-white text-black border-gray-300 hover:bg-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-6">
            <p className="text-lg font-semibold">Quantity</p>
            <button
              onClick={decreaseQuantity}
              className="px-5 py-2 bg-[#f5f5f5] hover:bg-[#d4d4d4] text-black rounded-full text-lg"
            >
              -
            </button>
            <span className="text-2xl">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-5 py-2 bg-[#f5f5f5] hover:bg-[#d4d4d4] text-black rounded-full text-lg"
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button onClick={payNow} />
            <AddtocardButton onClick={handleAddToCart} />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
