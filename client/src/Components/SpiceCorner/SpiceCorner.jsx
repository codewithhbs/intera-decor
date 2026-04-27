import React, { useState, useEffect } from 'react';

// Import your product images here
import Haldi from './grand-masala-haldi.png';
import LalMirch from './grand-masala-lal-mirch.png';
import Dhaniya from './grand-masala-dhaniya.png';
import GaramMasala from './grand-masala-garam-masala.png';

const products = [
  {
    id: 1,
    name: 'Asvadvadat Spice & Tea Co. Haldi',
    type: 'Ground Spice',
    description: 'Our 100% natural Haldi (Turmeric) adds vibrant color and earthy flavor, perfect for curries, soups, and more.',
    image: Haldi,
  },
  {
    id: 2,
    name: 'Asvadvadat Spice & Tea Co. Lal Mirch',
    type: 'Ground Spice',
    description: 'Experience the fiery kick of our 100% natural Lal Mirch (Red Chilli Powder), essential for authentic Indian dishes.',
    image: LalMirch,
  },
  {
    id: 3,
    name: 'Asvadvadat Spice & Tea Co. Dhaniya',
    type: 'Ground Spice',
    description: 'Aromatic and fresh, our 100% natural Dhaniya (Coriander Powder) offers a citrusy, sweet note to all your recipes.',
    image: Dhaniya,
  },
  {
    id: 4,
    name: 'Asvadvadat Spice & Tea Co. Garam Masala',
    type: 'Blended Spice',
    description: 'Our signature 100% natural Garam Masala is a warm, fragrant blend, elevating the taste of any savory preparation.',
    image: GaramMasala,
  },
];

export default function SpiceCornerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 2) % products.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 2 + products.length) % products.length);
  };

  const goToSlide = (index) => {
    if (isTransitioning || currentIndex === index) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    // Reset transitioning state after animation completes
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Match this with CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const visibleProducts = [
    products[currentIndex],
    products[(currentIndex + 1) % products.length],
  ];

  return (
    <div className="w-full bg-[#f8f5f0] py-16 px-6 lg:px-8">
      <div className="w-full mx-auto ">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <div className='flex justify-center'>
            <div className="w-16 h-1 bg-[#81190B] mb-2 text-center"></div> 
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[#81190B] mb-4">
               The Spice Corner
          </h2>
          <p className="text-xl text-gray-600">
            Know your basic, whole and blended spices
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-3 rounded-full bg-white bg-opacity-75 shadow-md hover:bg-opacity-100 transition-all duration-300 transform -translate-x-1/2 focus:outline-none"
            aria-label="Previous slide"
            disabled={isTransitioning}
          >
            <svg
              className="w-6 h-6 text-[#81190B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          {/* Slides Container */}
          <div className="flex space-x-8 overflow-hidden w-[calc(480px*2+32px)] h-[300px]">
            {visibleProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg flex-shrink-0 w-[90vw] max-w-sm md:max-w-md lg:w-[480px] h-auto min-h-[280px] flex items-center p-6 relative overflow-hidden transition-transform duration-500 ease-in-out"
              >
                {/* Background product image container */}
                <div
                  className="absolute inset-y-0 left-0 w-1/3 bg-[#81190B] flex items-center justify-center rounded-l-lg"
                  style={{ zIndex: 0 }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain p-2 transform scale-125"
                  />
                </div>

                {/* Content area */}
                <div className="pl-[38%] pr-4 py-4 z-10">
                  <h3 className="text-xl font-bold text-[#333] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    {product.description}
                  </p>
                  <Link to=""
                  
                    className="text-[#81190B] font-semibold flex items-center hover:underline"
                  >
                    EXPLORE ALL
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-3 rounded-full bg-white bg-opacity-75 shadow-md hover:bg-opacity-100 transition-all duration-300 transform translate-x-1/2 focus:outline-none"
            aria-label="Next slide"
            disabled={isTransitioning}
          >
            <svg
              className="w-6 h-6 text-[#81190B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {products.map((_, idx) => (
            idx % 2 === 0 && ( // Only render a dot for every two products
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 w-2 rounded-full ${
                  currentIndex === idx ? 'bg-[#81190B]' : 'bg-gray-400'
                } transition-colors duration-300`}
                aria-label={`Go to slide ${idx / 2 + 1}`}
                disabled={isTransitioning}
              ></button>
            )
          ))}
        </div>
      </div>
    </div>
  );
}