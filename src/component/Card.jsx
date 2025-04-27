



// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export default function MediaCard({ image, title, category, description, price, onClick }) {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

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

//   return (
//     <motion.div
//       className="w-[250px] bg-white rounded-2xl shadow-md cursor-pointer flex flex-col border border-gray-100 transition-all duration-300"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: false, amount: 0.2 }}
//       transition={{ duration: 0.8, ease: "easeOut", type: "spring", damping: 20 }}
//     >
//       <div className="relative h-[240px] w-full overflow-hidden" onMouseMove={handleMouseMove}>
//         <motion.img
//           src={image}
//           alt={title}
//           className="h-full w-full object-cover"
//           style={{
//             transformOrigin: `${cursorPosition.x * 100}% ${cursorPosition.y * 100}%`,
//             objectPosition: `${cursorPosition.x * 100}% ${cursorPosition.y * 100}%`
//           }}
//           whileHover={{ scale: 1.8 }}
//           transition={{ duration: 0.4, ease: "easeOut" }}
//         />
//       </div>

//       <div className="p-3 pt-4 flex flex-col gap-2">
//         <div className="flex flex-col gap-1">
//           <h2 className="text-base font-semibold">{title}</h2>
//           <p className="text-gray-500 text-xs">{category}</p>
//           <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
//         </div>

//         <div className="mt-auto">
//           <p className="text-md font-medium text-black mb-1">{price}</p>
//           <motion.button
//             onClick={onClick}
//             whileTap={{ scale: 0.95 }}
//             className="w-full py-1.5 px-4 text-sm font-semibold border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-100 transition"
//           >
//             Learn more
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );
// }  




import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MediaCard({ image, title, category, description, price, onClick }) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

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

  return (
    <motion.div
      className="w-[250px] bg-white rounded-2xl shadow-md cursor-pointer flex flex-col border border-gray-100 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.6,  // Reduce duration for smoother entry
        ease: "easeOut", // Easier transition at the end
      }}
    >
      <div className="relative h-[240px] w-full overflow-hidden" onMouseMove={handleMouseMove}>
        <motion.img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          style={{
            transformOrigin: `${cursorPosition.x * 100}% ${cursorPosition.y * 100}%`,
            objectPosition: `${cursorPosition.x * 100}% ${cursorPosition.y * 100}%`
          }}
          whileHover={{ scale: 1.8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      <div className="p-3 pt-4 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-base font-semibold">{title}</h2>
          <p className="text-gray-500 text-xs">{category}</p>
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        </div>

        <div className="mt-auto">
          <p className="text-md font-medium text-black mb-1">{price}</p>
          <motion.button
            onClick={onClick}
            whileTap={{ scale: 0.95 }}
            className="w-full py-1.5 px-4 text-sm font-semibold border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-100 transition"
          >
            Learn more
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
