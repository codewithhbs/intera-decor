import React from "react";
import Image1 from "./spices-quality-one.jpg";
import { Leaf, ShieldCheck, Award, Users } from "lucide-react";

export default function PromiseSection() {
  return (
    <div className="w-full bg-white py-12 px-6 lg:px-8">
    <h3 className="text-3xl lg:text-4xl font-black text-[#81190B] mb-4 text-center">Our Promise</h3>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        
          
          <div className="space-y-8">
            
            <div className="grid gap-6">
              <div className="flex items-start gap-4 bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-shadow">
                <Leaf className="w-8 h-8 text-[#FFB229]" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Ethically Sourced</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We work directly with local farmers, supporting fair trade and sustainable practices to bring you naturally rich flavor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-shadow">
                <ShieldCheck className="w-8 h-8 text-[#FFB229]" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Strict Quality Checks</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Each batch undergoes rigorous testing to ensure purity, aroma, and freshness from start to finish.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-shadow">
                <Award className="w-8 h-8 text-[#FFB229]" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Authentic Heritage</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    By blending age-old wisdom with modern innovation, we preserve the true, authentic taste of India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-shadow">
                <Users className="w-8 h-8 text-[#FFB229]" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Community-Focused</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our promise is not just about flavor, but also about contributing to stronger farming communities and celebrating India’s spice heritage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={Image1}
              alt="Spices"
              className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
