import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <Link
          key={index}
          to={`/product/${product._id}`}
          className="block hover:bg-gray-100 rounded-lg transition-all duration-300"
        >
          <div className="p-4">
            <div className="w-full h-96 mb-4">
              <img
                src={product.images[0].url}
                alt={product.images[0].alt || product.name}
                className="w-full h-full object-cover object-top rounded-lg"
              />
            </div>
            <h3 className="text-sm mb-2 ">{product.name}</h3>
            <p className=" text-gray-700 font-medium text-sm tracking-tighter">
              ${product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
