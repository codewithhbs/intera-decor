import React from 'react';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';
import Img from './bg-about.jpg';

const Refund = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div
        className="relative text-white py-20"
        style={{
          backgroundImage: `url(${Img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Refund<span className="bg-gradient-to-r from-[#FFB229] to-[#FFD966] bg-clip-text text-transparent"> Policy</span>
          </h1>
          <p className="text-xl opacity-90">Guidelines for refunds at Asvadvadat Spice & Tea Co.</p>
          <p className="text-sm opacity-75 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Refund Policy</h2>
            <p>
              At Asvadvadat Spice & Tea Co., we take pride in delivering 100% natural spices. If you are not satisfied with your purchase, you may request a refund.
            </p>
            <p className="text-green-800">
              Approved refunds will be processed and credited within 7 days of approval.
            </p>
            <p>
              To request a refund, please contact our customer support with your order details. Refunds apply only to eligible products, as determined by our team.
            </p>
          </section>

          <section className="bg-gradient-to-r from-[#81190B] to-[#A41C0F] text-white p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
            <p>If you have any questions about our refund policy, please contact us:</p>
            <div className="mt-3 space-y-2">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-amber-300" />
                <span>Email: info@grandmasala.in</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-amber-300" />
                <span>Phone: +919355577789</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-amber-300" />
                <span>Address: 47, VPO Dhauj, Tehsil Dhauj, Near Rabia Masjid, Faridabad, India, Haryana</span>
              </div>
            </div>
            <p className="mt-4 text-sm opacity-75">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Refund;
