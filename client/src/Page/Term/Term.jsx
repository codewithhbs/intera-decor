import React from 'react';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';
import Img from './bg-about.jpg';

const Term = () => {
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
            Terms
            <span className="bg-gradient-to-r from-[#FFB229] to-[#FFD966] bg-clip-text text-transparent">
              {' '} & Conditions
            </span>
          </h1>
          <p className="text-xl opacity-90">Agreement for using Asvadvadat Spice & Tea Co. services</p>
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
            Welcome to Asvadvadat Spice & Tea Co.. By accessing our website, placing an order, or purchasing our products,
            you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully.
          </p>
        </section>

        {/* 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. General</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Asvadvadat Spice & Tea Co. deals in packaged food products (spices/masalas).</li>
            <li>By using our services, you confirm that you are legally eligible to enter into this agreement.</li>
            <li>These terms apply to all users, customers, and visitors.</li>
          </ul>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Product Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We make every effort to ensure that product descriptions, weights, ingredients, and prices are accurate.</li>
            <li>Since our products are made from natural ingredients, color, aroma, and taste may slightly vary.</li>
            <li>Product images are for representation purposes only.</li>
          </ul>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Orders & Payments</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All orders are subject to availability and confirmation.</li>
            <li>Prices are displayed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.</li>
            <li>Payments are processed through secure and trusted payment gateways.</li>
            <li>
              Asvadvadat Spice & Tea Co. reserves the right to cancel or refuse any order in case of incorrect pricing,
              stock issues, or suspected misuse.
            </li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Shipping & Delivery</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Delivery timelines provided are estimates and may vary due to courier or external factors.</li>
            <li>Customers are responsible for providing correct shipping details.</li>
            <li>
              Asvadvadat Spice & Tea Co. is not liable for delays or non-delivery caused by incorrect address or contact
              information provided by the customer.
            </li>
          </ul>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Returns & Refunds</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Due to hygiene and food safety reasons, opened or used masala packets cannot be returned.</li>
            <li>Refunds or replacements are applicable only in cases of damaged, expired, or incorrect products.</li>
            <li>
              Detailed rules are explained in our Refund & Return Policy, which forms a part of these Terms.
            </li>
          </ul>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Usage Responsibility</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Customers are advised to check ingredients before use, especially if they have allergies.</li>
            <li>
              Asvadvadat Spice & Tea Co. shall not be responsible for any allergic reactions or misuse of the product.
            </li>
          </ul>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Intellectual Property</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All content including brand name, logo, packaging design, images, text,
              and marketing material belongs to Asvadvadat Spice & Tea Co..
            </li>
            <li>Unauthorized copying, reproduction, or commercial use is strictly prohibited.</li>
          </ul>
        </section>

        {/* 8 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Limitation of Liability</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Asvadvadat Spice & Tea Co. shall not be liable for any indirect, incidental,
              or consequential damages arising from the use of our products or website.
            </li>
            <li>
              Our maximum liability, if any, shall not exceed the value of the product purchased.
            </li>
          </ul>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">9. Modification of Terms</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We reserve the right to update or modify these Terms & Conditions at any time.</li>
            <li>Changes will be effective immediately upon posting on our website.</li>
          </ul>
        </section>

        {/* 10 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">10. Governing Law & Jurisdiction</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>These Terms & Conditions are governed by the laws of India.</li>
            <li>All disputes shall be subject to the jurisdiction of [Insert City, State] courts only.</li>
          </ul>
        </section>

        {/* Footer Note */}
        <section>
          <p className="italic">
            This Terms & Conditions document is complete and standard for:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Food & spice brands</li>
            <li>E-commerce websites</li>
            <li>WhatsApp / online order businesses</li>
            <li>Marketplaces (Amazon, Flipkart, etc.)</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Term;
