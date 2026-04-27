import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import Natural from "./hun-natura.png";
import FarmFresh from "./farm-fresh.png";
import SafeHygienic from "./safe-hygienic.png";
import Quality from "./quality.png";
import "./Features.css";

/* ──────────────────────────────────────────────
   Eyebrow component
──────────────────────────────────────────────── */
const SectionEyebrow = ({ label }) => (
  <div className="feat-eyebrow">
    <div className="feat-eyebrow-line" />
    <span className="feat-eyebrow-label">
      <Leaf size={10} />
      {label}
    </span>
    <div className="feat-eyebrow-line right" />
  </div>
);

/* ──────────────────────────────────────────────
   Card data
──────────────────────────────────────────────── */
const WHY_US = [
  {
    img: Natural,
    title: "Handcrafted Excellence",
    desc: "Each product is carefully handcrafted by skilled artisans with attention to detail.",
  },
  {
    img: FarmFresh,
    title: "Authentic Designs",
    desc: "Inspired by traditional art and culture, every piece reflects true craftsmanship.",
  },
  {
    img: SafeHygienic,
    title: "Eco-Friendly Materials",
    desc: "Made using sustainable and eco-friendly materials that respect nature.",
  },
  {
    img: Quality,
    title: "Premium Quality",
    desc: "High-quality finishing and durable craftsmanship for long-lasting beauty.",
  },
];

/* ──────────────────────────────────────────────
   Main Component
──────────────────────────────────────────────── */
export default function Features() {
  return (
    <section className="features-section">
      {/* ── Background layers ── */}
      <div className="feat-bg-mesh" aria-hidden="true" />
      <div className="feat-bg-mid" aria-hidden="true" />
      <div className="feat-grain" aria-hidden="true" />
      <div className="feat-grid" aria-hidden="true" />

      {/* ── Content ── */}
      <div className="feat-inner">
        {/* Heading block */}
        <div style={{ textAlign: "center", marginBottom: "0" }}>
          <SectionEyebrow label="Our Promise" />

          <h2 className="feat-heading">
            Why Choose <span className="feat-heading-italic">Us?</span>
          </h2>

          <p className="feat-subtext">
            Every product we make starts with one commitment — honest quality.
          </p>
        </div>

        {/* Cards grid */}
        <div className="feat-grid-cards">
          {WHY_US.map((item, i) => (
            <div key={item.title} className="why-card">
              {/* Badge number */}
              <span className="why-badge">0{i + 1}</span>

              {/* Icon */}
              <div className="why-icon-wrap">
                <img src={item.img} alt={item.title} />
              </div>

              {/* Text */}
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.desc}</p>

              {/* CTA */}
              <Link to="/shop" className="why-link">
                Explore <ArrowRight size={10} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
