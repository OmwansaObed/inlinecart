import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.girl_with_headphone_image,
    title: "Unparalleled Sound",
    description: "Experience crystal-clear audio with premium headphones.",
    category: "Audio",
  },
  {
    id: 2,
    image: assets.girl_with_earphone_image,
    title: "Stay Connected",
    description: "Compact and stylish earphones for every occasion.",
    category: "Audio",
  },
  {
    id: 3,
    image: assets.boy_with_laptop_image,
    title: "Power in Every Pixel",
    description: "Shop the latest laptops for work, gaming, and more.",
    category: "Computing",
  },
];

const FeaturedProduct = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative">
            Featured Products
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-orange-500 rounded-full"></span>
          </h2>
          <p className="text-gray-600 mt-6 text-center max-w-lg">
            Discover our handpicked selection of premium products designed for
            your lifestyle
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(({ id, image, title, description, category }) => (
            <div
              key={id}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="h-96 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                {category}
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-200 mb-6">{description}</p>
                  <div className="flex space-x-3">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition-colors">
                      Shop Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm px-4 py-2 rounded-lg transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
