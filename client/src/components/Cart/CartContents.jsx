import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "t-shirt",
      size: "M",
      color: "red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "jeans",
      size: "M",
      color: "blue",
      quantity: 1,
      price: 20,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "skirt",
      size: "M",
      color: "black",
      quantity: 1,
      price: 35,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productId: 4,
      name: "Jacket",
      size: "S",
      color: "White",
      quantity: 1,
      price: 105,
      image: "https://picsum.photos/200?random=4",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size: {product.size} | color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="mt-1">${product.price.toLocaleString()}</p>
            <button>
              <AiOutlineDelete className="h-6 w-6 mt-4 text-red-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
