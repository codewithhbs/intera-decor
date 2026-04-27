import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { Leaf, ArrowRight, BookOpen } from "lucide-react";
import "./BgMoving.css";

/* ─────────────────────────────────────────────────
   Unsplash handicraft background images
   Change index 0→1→2→3 in BG line to swap image
───────────────────────────────────────────────── */
const BG_IMAGES = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80", // pottery hands
  "https://images.unsplash.com/photo-1609766857400-7f2b0b83b5c8?w=1600&q=80", // indian craft colorful
  "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?w=1600&q=80", // weaving textile
  "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?w=1600&q=80", // artisan hands clay
];

const BG = BG_IMAGES[0]; /* ← change index to swap bg */

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;

const STATS = [
  { value: "200+", label: "Products" },
  { value: "10k+", label: "Customers" },
  { value: "100%", label: "Handmade" },
];

export default function BgMoving() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const offset = -rect.top * 0.25;
      setScrollY(offset);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={sectionRef} className="bm-section">
      {/* Parallax Background */}
      <div
        className="bm-bg-parallax"
        style={{
          backgroundImage: `url(${BG})`,
          transform: `translateY(${scrollY}px)`,
        }}
      />

      {/* Overlays */}
      <div className="bm-overlay-dark" />
      <div className="bm-overlay-teal" />
      <div className="bm-overlay-grain" style={{ backgroundImage: GRAIN }} />
      <div className="bm-overlay-bottom-fade" />

      {/* Content */}
      <section className="bm-content">
        <div className="bm-container">
          <div className="bm-grid">
            {/* LEFT — Story Card */}
            <div className={`bm-anim-left ${isVisible ? "bm-visible" : ""}`}>
              <div className="bm-story-card">
                <div className="bm-corner-tl" />
                <div className="bm-corner-br" />

                {/* Eyebrow */}
                <div className="bm-eyebrow">
                  <div className="bm-eyebrow-line-left" />
                  <span className="bm-eyebrow-label">
                    <Leaf size={9} /> Our Story
                  </span>
                  <div className="bm-eyebrow-line-right" />
                </div>

                {/* Heading */}
                <h2 className="bm-heading">
                  The{" "}
                  <span className="bm-heading-brand">Creative N Colourful</span>{" "}
                  Story
                </h2>

                {/* Paragraphs */}
                <div className="bm-paras">
                  <p className="bm-para">
                    <span className="bm-para-highlight">
                      Creative N Colourful
                    </span>{" "}
                    was born from a deep love for traditional Indian handicrafts
                    — a celebration of skilled artisans whose hands shape clay,
                    thread, wood, and fabric into timeless works of art.
                  </p>
                  <p className="bm-para">
                    Every piece in our collection tells a story — of heritage,
                    patience, and passion. We partner directly with local
                    craftsmen across India, ensuring authentic techniques are
                    preserved and every artisan is fairly valued.
                  </p>
                  <p className="bm-para">
                    From hand-painted pottery and woven textiles to carved
                    woodwork and embroidered décor, our 200+ products bring the
                    soul of Indian craftsmanship straight to your home.
                  </p>
                </div>

                <div className="bm-divider" />

                {/* Buttons */}
                <div className="bm-btns">
                  <Link to="/shop" className="bm-btn-primary">
                    Explore Collection <ArrowRight size={13} />
                  </Link>
                  <Link to="/blogs" className="bm-btn-outline">
                    <BookOpen size={13} /> Our Blog
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT — Quote + Stats + Badge */}
            <div
              className={`bm-right bm-anim-right ${isVisible ? "bm-visible" : ""}`}
            >
              {/* Quote */}
              <div className="bm-quote-card">
                <p className="bm-quote-text">
                  "Every colour tells a story. Every craft carries a legacy."
                </p>
                <p className="bm-quote-author">
                  <span className="bm-quote-author-line" />
                  Founder, Creative N Colourful
                </p>
              </div>

              {/* Stats */}
              <div className="bm-stats-grid">
                {STATS.map((s) => (
                  <div key={s.label} className="bm-stat-card">
                    <span className="bm-stat-value">{s.value}</span>
                    <span className="bm-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Brand badge */}
              <div className="bm-brand-badge">
                <div className="bm-brand-icon">
                  <Leaf size={18} color="#C8973A" />
                </div>
                <div>
                  <p className="bm-brand-name">Creative N Colourful</p>
                  <p className="bm-brand-tagline">
                    Handcrafted · Authentic · Artisan Made
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
