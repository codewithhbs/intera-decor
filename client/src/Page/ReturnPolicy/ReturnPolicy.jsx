import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Img from './bg-about.jpg';

const Return = () => {
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
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Refund<span className="bg-gradient-to-r from-[#FFB229] to-[#FFD966] bg-clip-text text-transparent"> & Return Policy</span>
          </h1>
          <p className="text-xl opacity-90">Asvadvadat Spice & Tea Co. – Refund & Return Policy</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-10 text-gray-700">

        {/* Dates */}
        <section>
          <p><strong>Effective Date:</strong> 2 February 2026</p>
          <p><strong>Last Updated:</strong> 2 February 2026</p>
        </section>

        {/* Intro */}
        <section>
          <p>
            At  Asvadvadat Spice & Tea Co., we strive to deliver 100% pure and hygienically packed spices with the highest quality standards.
            However, if you’re not fully satisfied, please read our refund and return policy below:
          </p>
        </section>

        {/* 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">✅ 1. When Can You Request a Return or Refund?</h2>

          <p className="mb-2">You can request a return or refund if:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>You received a wrong item (different from what you ordered)</li>
            <li>The product is damaged, opened, or tampered with at the time of delivery</li>
            <li>The product is expired or close to expiry on arrival</li>
          </ul>

          <p className="mt-4 mb-2">❌ We do NOT accept returns or refunds for:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Opened or used spice packets</li>
            <li>Minor packaging damage not affecting product usability</li>
            <li>Delay in delivery due to external courier or incorrect address details</li>
          </ul>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🕒 2. Time Limit for Reporting</h2>
          <p>
            All return or refund requests must be reported within 48 hours of receiving the order.
            After this time, requests will not be accepted.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">📷 3. Proof Required</h2>

          <p className="mb-2">To initiate a return or refund, please share:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>A clear photo or video showing the issue</li>
            <li>Your order ID and contact number</li>
          </ul>

          <p className="mt-2">Send the details to us via WhatsApp or email.</p>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🔁 4. Replacement or Refund Option</h2>

          <p className="mb-2">Once your request is reviewed and approved:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>We may offer a free replacement of the same item</li>
            <li>Or issue a full or partial refund based on the situation</li>
            <li>Refunds (if approved) will be processed within 7–10 working days</li>
          </ul>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">💳 5. Payment Mode for Refunds</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>If you paid online, the refund will go back to the same payment method</li>
            <li>
              If you used Cash on Delivery, we may ask for your bank details to process the refund securely
            </li>
          </ul>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">📞 6. How to Contact Us</h2>

          <p className="mb-2">To raise a refund/return request, reach out to us at:</p>

          <p>Asvadvadat Spice & Tea Co.</p>
          <p>📞 Phone: +919355577789</p>
          <p>📧 Email: info@grandmasala.in</p>
          <p>⏰ Business Hours: Monday to Saturday, 10:00 AM – 6:00 PM</p>
        </section>

      </div>
    </div>
  );
};

export default Return;
