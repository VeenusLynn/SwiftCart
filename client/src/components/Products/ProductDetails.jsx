import React, { useEffect, useState } from "react";
import bestSellerImg1 from "../../assets/bestSeller1.jpg";
import bestSellerImg2 from "../../assets/bestSeller2.jpg";

const selectedProduct = {
  name: "Blazer",
  price: 120,
  originalPrice: 180,
  description:
    "Meet the Seoul Elegance Blazer—a modern Korean-inspired masterpiece. Tailored to perfection, it’s your key to effortless sophistication, day or night.",
  brand: "Felicity",
  material: "Wool",
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: [
    { code: "#8B8586", name: "Gray" },
    { code: "#AACAD8", name: "Soft Blue" },
  ],
  images: [
    {
      url: bestSellerImg1,
      alt: "Blazer: Gray",
      colorCode: "#8B8586",
    },
    {
      url: bestSellerImg2,
      alt: "Blazer: Soft Blue",
      colorCode: "#AACAD8",
    },
  ],
};

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleQuantityChange = (action) => {
    if (action === "plus") {
      setQuantity((prev) => prev + 1);
    }
    if (action === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleThumbnailClick = (image) => {
    setMainImage(image.url);
    setSelectedColor(image.colorCode);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color.code);
    const correspondingImage = selectedProduct.images.find(
      (image) => image.colorCode === color.code
    );
    if (correspondingImage) {
      setMainImage(correspondingImage.url);
    }
  };

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
      setSelectedColor(selectedProduct.images[0].colorCode);
    }
  }, [selectedProduct]);

  return (
    <div>
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Side || Thumbnails on large screens */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt || `Thumbnai ${index}`}
                className={`w-20 h-20 object-cover object-top rounded-lg  border ${
                  mainImage === image.url
                    ? "border-black "
                    : "border-gray-300 hover:cursor-pointer"
                } transition-all duration-400`}
                onClick={() => handleThumbnailClick(image)}
              />
            ))}
          </div>
          <div className="md:w-1/2 ">
            <div className="mb-4 ">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover object-top rounded-lg"
              />
            </div>
          </div>
          {/* Bottom Side || Mobile view Thumbnails */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt || `Thumbnai ${index}`}
                className={`w-20 h-20 object-cover object-top rounded-lg  border ${
                  mainImage === image.url
                    ? "border-black "
                    : "border-gray-300 hover:cursor-pointer"
                } transition-all`}
                onClick={() => handleThumbnailClick(image)}
              />
            ))}
          </div>
          {/* Right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice &&
                `$${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              ${selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <div className="mb-4 ">
              <p className="text-gray-700">Color: </p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorClick(color)}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color.code
                        ? "border border-black transition-all duration-400"
                        : "border-gray-300 hover:cursor-pointer"
                    }`}
                    style={{
                      backgroundColor: color.code,
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size
                        ? "bg-black text-white transition-all duration-400"
                        : "hover:cursor-pointer"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 ">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="h-8 w-8 px-2 bg-gray-200 rounded text-xl hover:bg-black hover:text-white transition-all duration-400"
                >
                  -
                </button>
                <span className="text-lg w-4">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="h-8 w-8 px-2 bg-gray-200 rounded text-xl hover:bg-black hover:text-white transition-all duration-400"
                >
                  +
                </button>
              </div>
            </div>

            <button className="bg-black text-white py-2 px-6 rounded w-full mb-4">
              ADD TO CART
            </button>

            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <div className="overflow-x-auto rounded-lg">
                <table className="w-full text-left text-sm text-gray-600 border border-gray-200">
                  <tbody>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <td className="py-2 px-4 font-medium text-gray-700">
                        Brand
                      </td>
                      <td className="py-2 px-4">{selectedProduct.brand}</td>
                    </tr>
                    <tr className="bg-gray-50 ">
                      <td className="py-2 px-4 font-medium text-gray-700">
                        Material
                      </td>
                      <td className="py-2 px-4">{selectedProduct.material}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
