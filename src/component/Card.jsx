
import React from "react";
import { motion } from "framer-motion";

export default function MediaCard({ image, title, category, description, price, onClick }) {
  return (
    <motion.div
      className="w-[250px] h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1.2, ease: "easeOut", type: "spring", damping: 25 }}
    >
      <img
        src={image}
        alt={title}
        className="h-[260px] w-full object-cover"
      />

      <div className="flex-grow p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-1">{title}</h2>
          <p className="text-gray-500 text-xs mb-1">{category}</p>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        <div className="mt-3">
          <p className="text-lg font-medium text-black mb-2">{price}</p>
          <button
            onClick={onClick}
            className="w-full py-2 px-4 text-sm font-semibold border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-100 transition"
          >
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
}
