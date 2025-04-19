import { FC } from "react";
import { categories } from "./Categorydata";
import { motion } from "framer-motion";

const Category: FC = () => {
  return (
    <section className="p-4 container mx-auto px-4 py-8 mt-7 bg-white rounded-xl">
      <h2 className="text-xl font-bold mb-4">Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center bg-white border rounded-md p-3 shadow-sm hover:shadow-md transition"
            key={category.id}
            // className="flex flex-col items-center border rounded-lg p-2 "
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-20 h-20 object-contain"
            />
            <span className="text-sm text-center mt-2">{category.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Category;
