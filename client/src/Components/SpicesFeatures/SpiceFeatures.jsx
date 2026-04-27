import React from 'react';
import Image1 from './three-sec-one.jpg'
import Image2 from './three-sec-four.jpg'
import Image3 from './three-sec-five.jpg'

const SpiceFeatures = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">

          {/* Feature 1: Quality Spices */}
          <div className="flex flex-col items-start lg:col-span-1">
            <div className="w-full h-100 bg-gray-200 flex items-center justify-center mb-6 overflow-hidden">
              <img src={Image2} alt="" />
              
            </div>
            <h3 className="text-3xl font-semibold text-[#81190B] mb-2"><b>Quality spices</b></h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We make 100% natural spices, carefully selected for superior quality.
            </p>
          </div>

          {/* Feature 2: International Standards */}
          <div className="flex flex-col items-start lg:col-span-1">
            <h3 className="text-3xl font-semibold text-[#81190B] mb-2"><b>International standards</b> </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Exporting worldwide since 1987, adhering to global quality benchmarks.
            </p>
            <div className="w-full h-100 bg-gray-200 flex items-center justify-center overflow-hidden">
              <img src={Image1} alt="" />
              
            </div>
          </div>

          {/* Feature 3: Farm to Fork Approach */}
          <div className="flex flex-col items-start lg:col-span-1">
            <div className="w-full h-100 bg-gray-200 flex items-center justify-center mb-6 overflow-hidden">
              <img src={Image3} alt="" />
              
            </div>
            <h3 className="text-3xl font-semibold text-[#81190B] mb-2"><b>Farm to Fork Approach</b></h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every major spice has a complete traceability established from farm to your kitchen.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpiceFeatures;