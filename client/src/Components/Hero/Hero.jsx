"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import "./HeroBanner.css";

const SLIDES = [
  {
    id: 1,
    src: "https://confettigifts.in/cdn/shop/files/Website_updated_banner_5_1_680b9c15-ce7b-49bb-83a9-9e420ebe3808.jpg?v=1770102274&width=1920",
    alt: "Handcrafted textile 1",
  },
  {
    id: 2,
    src: "https://confettigifts.in/cdn/shop/files/Website_banner_Wallet_Card_1.png?v=1773405156&width=1920",
    alt: "Handcrafted textile 2",
  },
  {
    id: 3,
    src: "https://confettigifts.in/cdn/shop/files/Website_updated_banner_632ba9d3-507f-4efd-9404-a36a34debe49.jpg?v=1775640196&width=1920",
    alt: "Handcrafted textile 3",
  },
  {
    id: 4,
    src: "https://confettigifts.in/cdn/shop/files/Website_updated_banner_632ba9d3-507f-4efd-9404-a36a34debe49.jpg?v=1775640196&width=1920",
    alt: "Handcrafted textile 4",
  },
];

const DURATION = 5000;

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const [exiting, setExiting] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const timerRef = useRef(null);

  const goTo = useCallback(
    (idx) => {
      if (isAnimating || idx === current) return;
      setExiting(current);
      setIsAnimating(true);
      setCurrent(idx);
      setTimeout(() => {
        setExiting(null);
        setIsAnimating(false);
      }, 700);
    },
    [current, isAnimating],
  );

  const next = useCallback(
    () => goTo((current + 1) % SLIDES.length),
    [current, goTo],
  );
  const prev = useCallback(
    () => goTo((current - 1 + SLIDES.length) % SLIDES.length),
    [current, goTo],
  );

  useEffect(() => {
    timerRef.current = setTimeout(next, DURATION);
    return () => clearTimeout(timerRef.current);
  }, [current, next]);

  return (
    <section className="hb-wrap">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={`hb-slide${i === current ? " active" : ""}${i === exiting ? " exit" : ""}`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      <button
        className="hb-arrow hb-arrow--l"
        onClick={prev}
        aria-label="Previous"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="hb-arrow hb-arrow--r" onClick={next} aria-label="Next">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="hb-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hb-dot${i === current ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
