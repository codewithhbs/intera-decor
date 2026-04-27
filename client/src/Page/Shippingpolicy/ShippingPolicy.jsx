import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Img from './bg-about.jpg';

const Shipping = () => {
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
            Shipping
            <span className="bg-gradient-to-r from-[#FFB229] to-[#FFD966] bg-clip-text text-transparent">
              {' '}Policy
            </span>
          </h1>
          <p className="text-xl opacity-90">Asvadvadat Spice & Tea Co. – Shipping Policy</p>
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
            At Asvadvadat Spice & Tea Co., we ensure your order reaches you safely and on time.
            Here's everything you need to know about our shipping and delivery process.
          </p>
        </section>

        {/* 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">📦 1. Order Processing Time</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All orders are processed within 1 to 2 working days of confirmation.</li>
            <li>Orders placed on weekends or public holidays are processed on the next working day.</li>
          </ul>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🕒 2. Delivery Time</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We aim to deliver your order within 3 to 7 working days, depending on your location.</li>
            <li>Remote areas may take longer depending on courier availability.</li>
          </ul>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🚛 3. Delivery Partners</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We ship through reliable courier services to ensure timely and secure delivery.</li>
            <li>
              Tracking details will be shared via WhatsApp or email once your order is shipped.
            </li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">💰 4. Shipping Charges</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Free Shipping on orders above ₹499 (India only).</li>
            <li>
              For orders below ₹499, a standard shipping charge of ₹40 to ₹60 may apply
              depending on the delivery pin code.
            </li>
          </ul>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">❌ 5. Delays or Non-Delivery</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Delays may happen due to weather, courier delays, holidays, or unforeseen situations.
            </li>
            <li>
             Asvadvadat Spice & Tea Co. is not responsible for delays caused by incorrect address or contact
              details entered by the customer.
            </li>
            <li>
              If the package is returned due to delivery failure, re-shipping charges will apply.
            </li>
          </ul>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">✅ 6. Delivery Confirmation</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Our team may confirm delivery via call or WhatsApp after successful delivery.</li>
            <li>For prepaid orders, please ensure someone is available to receive the package.</li>
          </ul>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">📩 7. Contact for Shipping Support</h2>
          <p className="mb-3">
            If you face any issue with your order delivery or tracking, contact us at:
          </p>
          <p>📞 Phone: +919355577789</p>
          <p>📧 Email: info@grandmasala.in</p>
          <p>📍 Hours: Mon–Sat, 10:00 AM to 6:00 PM</p>
        </section>

      </div>
    </div>
  );
};

export default Shipping;
