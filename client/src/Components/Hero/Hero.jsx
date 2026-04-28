"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Slide1 from "./banner-01.png";
import Slide2 from "./banner-02.png";
import Slide3 from "./banner-02.png";
import Slide4 from "./banner-01.png";
import "./HeroBanner.css";

const SLIDES = [
  {
    id: 1,
    src: Slide1,
    alt: "Handcrafted textile 1",
  },
  {
    id: 2,
    src: Slide2,
    alt: "Handcrafted textile 2",
  },
  {
    id: 3,
    src: Slide3,
    alt: "Handcrafted textile 3",
  },
  {
    id: 4,
    src: Slide4,
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
