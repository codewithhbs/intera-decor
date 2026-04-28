import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Img from "./bg-about.jpg";
import Spices from "./about-us.webp";
import Natural from "./hun-natura.png";
import FarmFresh from "./farm-fresh.png";
import SafeHygienic from "./safe-hygienic.png";
import Quality from "./quality.png";
import {
  Heart,
  Shield,
  Target,
  Truck,
  RefreshCw,
  CheckCircle,
  Star,
  Quote,
  ArrowRight,
  Scissors,
  Palette,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ── Font Loader ── */
const FontLoader = () => {
  useEffect(() => {
    if (document.getElementById("cnc-fonts")) return;
    const link = document.createElement("link");
    link.id = "cnc-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
};

/* ── Data ── */
const values = [
  {
    icon: Heart,
    title: "Handcrafted with Love",
    desc: "Every product is lovingly made by skilled artisans. We pour heart and soul into each creation, ensuring it carries warmth and personality.",
    color: "#e8f4ff",
    border: "#b8d9f8",
    iconBg: "#050a30",
  },
  {
    icon: Shield,
    title: "Quality Craftsmanship",
    desc: "We use only premium materials. Each piece undergoes careful inspection to ensure durability, beauty, and authentic artisan quality.",
    color: "#fff8e8",
    border: "#f0d98a",
    iconBg: "#c49015",
  },
  {
    icon: Palette,
    title: "Creative Vision",
    desc: "From vibrant colours to bold designs, we continuously push creative boundaries to bring you handicrafts that are truly one-of-a-kind.",
    color: "#f0fff4",
    border: "#a8dfc0",
    iconBg: "#1a6b3c",
  },
  {
    icon: Target,
    title: "Customer Delight",
    desc: "Your joy is our purpose. From personalised gifts to custom orders, we ensure every experience with us is memorable.",
    color: "#fef0ff",
    border: "#ddb0f0",
    iconBg: "#7a1fa2",
  },
];

const features = [
  { icon: Truck, title: "Free Delivery", sub: "On orders over ₹499" },
  { icon: RefreshCw, title: "Easy Returns", sub: "7-day return policy" },
  { icon: CheckCircle, title: "100% Handmade", sub: "Artisan crafted" },
  { icon: Star, title: "Custom Orders", sub: "Personalised for you" },
];

const whyUs = [
  {
    img: Natural,
    title: "Authentic Artistry",
    desc: "Real artisans, real craft. Every piece tells a story.",
  },
  {
    img: FarmFresh,
    title: "Vibrant & Unique",
    desc: "Bold colours and creative designs in every product.",
  },
  {
    img: SafeHygienic,
    title: "Premium Materials",
    desc: "Only the finest materials for lasting beauty.",
  },
  {
    img: Quality,
    title: "Gift-Ready",
    desc: "Beautifully packaged, perfect for every occasion.",
  },
];

/* ── Decorative dots pattern ── */
const DOTS = `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.2' fill='%23050a30' opacity='0.06'/%3E%3C/svg%3E")`;

/* ── Stitch border ── */
const STITCH_NAVY = `repeating-linear-gradient(90deg, rgba(5,10,48,0.18) 0px, rgba(5,10,48,0.18) 7px, transparent 7px, transparent 16px)`;
const STITCH_GOLD = `repeating-linear-gradient(90deg, rgba(196,144,21,0.35) 0px, rgba(196,144,21,0.35) 7px, transparent 7px, transparent 16px)`;

/* ── Eyebrow ── */
const Eyebrow = ({ label, dark = false }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      marginBottom: 10,
    }}
  >
    <div
      style={{
        height: 1,
        width: 32,
        background: dark ? "rgba(5,10,48,0.25)" : "#c49015",
      }}
    />
    <span
      style={{
        fontFamily: "'Poppins',sans-serif",
        fontSize: "0.57rem",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: dark ? "rgba(5,10,48,0.45)" : "#c49015",
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Scissors size={9} color={dark ? "rgba(5,10,48,0.4)" : "#c49015"} />
      {label}
    </span>
    <div
      style={{
        height: 1,
        width: 32,
        background: dark ? "rgba(5,10,48,0.25)" : "#c49015",
      }}
    />
  </div>
);

/* ── Main Component ── */
const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <FontLoader />
      <Helmet>
        <title>About Us | Creative N Colourful Handicrafts</title>
        <meta
          name="description"
          content="Creative N Colourful — handcrafted with passion. Discover our story of artistry, colour, and authentic handicrafts made with love."
        />
      </Helmet>

      <style>{`
        * { box-sizing: border-box; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0) rotate(-2deg); }
          50%      { transform: translateY(-9px) rotate(-2deg); }
        }
        @keyframes spinRing {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -300% center; }
          100% { background-position:  300% center; }
        }

        .ab-enter { animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .ab-d1 { animation-delay:.07s; }
        .ab-d2 { animation-delay:.14s; }
        .ab-d3 { animation-delay:.21s; }
        .ab-d4 { animation-delay:.28s; }

        .float-badge { animation: floatY 3.2s ease-in-out infinite; }

        .spin-ring {
          position:absolute; width:360px; height:360px; border-radius:50%;
          border:1.5px dashed rgba(5,10,48,0.12);
          top:50%; left:50%;
          animation: spinRing 28s linear infinite;
        }

        .gold-shine {
          background: linear-gradient(90deg,#b8860b 0%,#f0c040 35%,#fffbe0 50%,#f0c040 65%,#b8860b 100%);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .val-card { transition: all 0.32s cubic-bezier(0.22,1,0.36,1); cursor:default; }
        .val-card:hover { transform: translateY(-5px); box-shadow: 0 18px 48px rgba(5,10,48,0.1) !important; }

        .why-card { transition: all 0.32s cubic-bezier(0.22,1,0.36,1); cursor:default; }
        .why-card:hover { transform: translateY(-6px); box-shadow: 0 18px 50px rgba(5,10,48,0.1) !important; border-color: #c49015 !important; }
        .why-card:hover .why-img { transform: scale(1.1) rotate(4deg); }

        .feat-card { transition: all 0.3s; }
        .feat-card:hover { transform: translateY(-4px); background: #050a30 !important; }
        .feat-card:hover h3, .feat-card:hover p { color: #fff !important; }
        .feat-card:hover .feat-icon { background: rgba(196,144,21,0.2) !important; }
        .feat-card:hover .feat-icon svg { color: #f0c040 !important; }

        .btn-primary { transition: all 0.28s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 32px rgba(5,10,48,0.25) !important; background: #0a1560 !important; }

        .btn-outline { transition: all 0.28s; }
        .btn-outline:hover { background: #050a30 !important; color: #fff !important; border-color: #050a30 !important; transform: translateY(-2px); }

        .explore-link { transition: color 0.2s; }
        .explore-link:hover { color: #050a30 !important; }
      `}</style>

      <div
        style={{
          background: "#fafaf8",
          fontFamily: "'Poppins',sans-serif",
          minHeight: "100vh",
        }}
      >
        {/* ══════ HERO ══════ */}
        <div className="relative overflow-hidden" style={{ minHeight: 520 }}>
          {/* BG image dimmed lightly */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${Img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.18) saturate(0.4)",
            }}
          />
          {/* Navy overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(155deg,rgba(5,10,48,0.96) 0%,rgba(5,10,48,0.88) 55%,rgba(196,144,21,0.15) 100%)",
            }}
          />
          {/* Dots pattern subtle */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: DOTS,
              backgroundSize: "20px",
              opacity: 0.6,
            }}
          />

          {/* Decorative rings */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "12%",
                right: "6%",
                width: 280,
                height: 280,
                borderRadius: "50%",
                border: "1px dashed rgba(255,255,255,0.08)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "20%",
                right: "10%",
                width: 190,
                height: 190,
                borderRadius: "50%",
                border: "1px solid rgba(196,144,21,0.18)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "8%",
                left: "4%",
                width: 130,
                height: 130,
                borderRadius: "50%",
                border: "1px dashed rgba(196,144,21,0.15)",
              }}
            />
            {/* Stitch top */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                backgroundImage: STITCH_GOLD,
              }}
            />
            {/* Stitch bottom */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 3,
                backgroundImage: STITCH_GOLD,
              }}
            />
          </div>

          <div className="ab-enter relative max-w-5xl mx-auto px-6 py-28 sm:py-36 text-center">
            {/* pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "6px 18px",
                borderRadius: 999,
                marginBottom: 22,
                background: "rgba(196,144,21,0.15)",
                border: "1px solid rgba(196,144,21,0.4)",
              }}
            >
              <Palette size={11} color="#f0c040" />
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "0.57rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#f0c040",
                  fontWeight: 600,
                }}
              >
                Est. 2018 · Handmade · Artisan · Colourful
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: "clamp(2.2rem,6.5vw,4.5rem)",
                fontWeight: 800,
                color: "#f5f2ec",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                marginBottom: 6,
              }}
            >
              About <span className="gold-shine">Creative N Colourful</span>
            </h1>

            <div
              style={{
                width: 56,
                height: 3,
                margin: "16px auto 20px",
                background: "linear-gradient(90deg,#c49015,#f0c040)",
                borderRadius: 2,
              }}
            />

            <p
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: "1rem",
                color: "rgba(245,242,236,0.58)",
                fontWeight: 300,
                lineHeight: 1.85,
                maxWidth: 460,
                margin: "0 auto",
              }}
            >
              Where every stitch, stroke, and colour tells a story — bringing
              handcrafted joy into your everyday life.
            </p>
          </div>
        </div>

        {/* ══════ OUR STORY ══════ */}
        <section
          style={{
            padding: "72px 0 80px",
            background: "#ffffff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: DOTS,
              backgroundSize: "20px",
              opacity: 0.1,
            }}
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 40,
                alignItems: "center",
              }}
              className="lg:grid-cols-2 lg:gap-20"
            >
              {/* Image */}
              <div className="ab-enter ab-d1 relative flex justify-center">
                <div className="spin-ring" />

                <div
                  style={{
                    position: "relative",
                    zIndex: 10,
                    width: "100%",
                    maxWidth: 380,
                    borderRadius: 28,
                    overflow: "hidden",
                    boxShadow:
                      "0 28px 70px rgba(5,10,48,0.14), 0 0 0 1px rgba(5,10,48,0.07)",
                    border: "1px solid rgba(5,10,48,0.08)",
                  }}
                >
                  <img
                    src={Spices}
                    alt="Our Handicrafts"
                    style={{
                      width: "100%",
                      height: "clamp(280px,42vw,420px)",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(5,10,48,0.72) 0%,transparent 52%)",
                    }}
                  />

                  {/* Quote card */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 16,
                      left: 14,
                      right: 14,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        padding: "12px 14px",
                        borderRadius: 16,
                        background: "rgba(255,255,255,0.95)",
                        boxShadow: "0 4px 20px rgba(5,10,48,0.12)",
                        border: "1px solid rgba(196,144,21,0.2)",
                      }}
                    >
                      <Quote
                        size={13}
                        color="#c49015"
                        style={{ flexShrink: 0, marginTop: 2 }}
                      />
                      <div>
                        <p
                          style={{
                            fontFamily: "'Poppins',sans-serif",
                            fontStyle: "italic",
                            fontSize: "0.82rem",
                            color: "#1a1208",
                            lineHeight: 1.5,
                            fontWeight: 400,
                          }}
                        >
                          "Every colour has a story. Every craft has a soul."
                        </p>
                        <p
                          style={{
                            fontFamily: "'Poppins',sans-serif",
                            fontSize: "0.57rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "#c49015",
                            marginTop: 5,
                            fontWeight: 600,
                          }}
                        >
                          — Founder, Creative N Colourful
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div
                  className="float-badge"
                  style={{
                    position: "absolute",
                    bottom: -10,
                    right: -8,
                    zIndex: 20,
                    padding: "10px 16px",
                    borderRadius: 18,
                    background: "linear-gradient(135deg,#050a30,#0d1a5e)",
                    boxShadow: "0 12px 32px rgba(5,10,48,0.28)",
                    border: "2px solid rgba(196,144,21,0.3)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "#f0c040",
                      lineHeight: 1,
                    }}
                  >
                    100+
                  </span>
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: "0.52rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.6)",
                      fontWeight: 600,
                    }}
                  >
                    Crafts
                  </span>
                </div>

                {/* Top left badge */}
                <div
                  style={{
                    position: "absolute",
                    top: -10,
                    left: -8,
                    zIndex: 20,
                    padding: "7px 12px",
                    borderRadius: 12,
                    background: "#fff",
                    border: "1px solid rgba(196,144,21,0.3)",
                    boxShadow: "0 4px 18px rgba(5,10,48,0.1)",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Sparkles size={13} color="#c49015" />
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: "0.6rem",
                      color: "#050a30",
                      fontWeight: 600,
                    }}
                  >
                    Handmade ✦
                  </span>
                </div>
              </div>

              {/* Text */}
              <div
                className="ab-enter ab-d2"
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                <Eyebrow label="Our Journey" />
                <h2
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: "clamp(1.9rem,4vw,2.9rem)",
                    fontWeight: 800,
                    color: "#050a30",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    textAlign: "center",
                  }}
                >
                  The{" "}
                  <span
                    style={{
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#c49015",
                    }}
                  >
                    Creative N Colourful
                  </span>{" "}
                  Story
                </h2>

                <div
                  style={{ display: "flex", flexDirection: "column", gap: 14 }}
                >
                  {[
                    "Born from a love of colour and craftsmanship, Creative N Colourful was founded with a single dream — to celebrate the timeless art of handmade creations. From vibrant wall hangings to intricate jewellery and home décor, every piece carries the fingerprint of a skilled artisan.",
                    "Over the years, we've built a community of passionate craftspeople across India, each bringing their regional heritage and artistic flair to our collection. We believe handmade is not just a product — it's a connection between the maker and the person who receives it.",
                    "Today, Creative N Colourful is home to 100+ unique handicraft products — each thoughtfully crafted, joyfully coloured, and made to bring warmth and creativity into your life.",
                  ].map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: "0.88rem",
                        color: "rgba(0, 0, 0, 0.55)",
                        fontWeight: 300,
                        lineHeight: 1.9,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Stats */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: 10,
                    marginTop: 4,
                  }}
                >
                  {[
                    { v: "2018", l: "Founded" },
                    { v: "100+", l: "Products" },
                    { v: "15k+", l: "Customers" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "14px 8px",
                        borderRadius: 16,
                        gap: 3,
                        background: "#f4f6fc",
                        border: "1px solid rgba(5,10,48,0.08)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Poppins',sans-serif",
                          fontSize: "1.35rem",
                          fontWeight: 800,
                          color: "#050a30",
                          lineHeight: 1,
                        }}
                      >
                        {s.v}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Poppins',sans-serif",
                          fontSize: "0.57rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "rgba(5,10,48,0.4)",
                          fontWeight: 500,
                        }}
                      >
                        {s.l}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ WHY CHOOSE US ══════ */}
        <section
          style={{
            padding: "64px 0 72px",
            background: "#f4f6fc",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: DOTS,
              backgroundSize: "20px",
              opacity: 0.45,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              backgroundImage: STITCH_NAVY,
            }}
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
            <div
              style={{ textAlign: "center", marginBottom: 44 }}
              className="ab-enter"
            >
              <Eyebrow label="Our Promise" />
              <h2
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "clamp(1.7rem,4vw,2.6rem)",
                  fontWeight: 800,
                  color: "#050a30",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Why Choose{" "}
                <span
                  style={{
                    fontStyle: "italic",
                    color: "#c49015",
                    fontWeight: 600,
                  }}
                >
                  Us?
                </span>
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: 14,
              }}
              className="lg:grid-cols-4"
            >
              {whyUs.map((w, i) => (
                <div
                  key={w.title}
                  className="why-card ab-enter"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 12,
                    padding: "24px 18px",
                    borderRadius: 24,
                    background: "#fff",
                    border: "1.5px solid rgba(5,10,48,0.07)",
                    boxShadow: "0 2px 16px rgba(5,10,48,0.05)",
                    animationDelay: `${i * 0.07}s`,
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 20,
                      background: "linear-gradient(135deg,#f4f6fc,#eaedfa)",
                      border: "1.5px solid rgba(5,10,48,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={w.img}
                      alt={w.title}
                      className="why-img"
                      style={{
                        width: 40,
                        height: 40,
                        objectFit: "contain",
                        transition: "transform 0.5s",
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: "clamp(0.8rem,2vw,0.92rem)",
                      fontWeight: 700,
                      color: "#050a30",
                      lineHeight: 1.3,
                    }}
                  >
                    {w.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: "clamp(0.67rem,1.6vw,0.76rem)",
                      color: "rgba(5,10,48,0.48)",
                      fontWeight: 300,
                      lineHeight: 1.7,
                    }}
                  >
                    {w.desc}
                  </p>
                  <Link
                    to="/shop"
                    className="explore-link"
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#c49015",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      fontWeight: 700,
                    }}
                  >
                    Explore <ArrowRight size={10} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ FEATURES STRIP ══════ */}
        <section
          style={{
            padding: "56px 0 64px",
            background: "#050a30",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: DOTS,
              backgroundSize: "20px",
              opacity: 0.15,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              backgroundImage: STITCH_GOLD,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 3,
              backgroundImage: STITCH_GOLD,
            }}
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <Eyebrow label="Our Commitments" />
              <h2
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "clamp(1.5rem,3.5vw,2.2rem)",
                  fontWeight: 700,
                  color: "#f5f2ec",
                  letterSpacing: "-0.02em",
                }}
              >
                The Creative N Colourful{" "}
                <span
                  style={{
                    fontStyle: "italic",
                    color: "#f0c040",
                    fontWeight: 600,
                  }}
                >
                  Promise
                </span>
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: 12,
              }}
              className="lg:grid-cols-4"
            >
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="feat-card ab-enter"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 10,
                    padding: "20px 16px",
                    borderRadius: 20,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    animationDelay: `${i * 0.07}s`,
                  }}
                >
                  <div
                    className="feat-icon"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      background: "rgba(196,144,21,0.12)",
                      border: "1px solid rgba(196,144,21,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background 0.3s",
                    }}
                  >
                    <f.icon
                      size={18}
                      color="#f0c040"
                      style={{ transition: "color 0.3s" }}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: "clamp(0.8rem,2vw,0.92rem)",
                      fontWeight: 600,
                      color: "#f5f2ec",
                      lineHeight: 1.2,
                      transition: "color 0.3s",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: "0.72rem",
                      color: "rgba(245,242,236,0.45)",
                      fontWeight: 300,
                      lineHeight: 1.6,
                      transition: "color 0.3s",
                    }}
                  >
                    {f.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ CTA ══════ */}
        <section
          style={{
            padding: "72px 0 80px",
            background: "#f4f6fc",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: DOTS,
              backgroundSize: "20px",
              opacity: 0.5,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 560,
              height: 380,
              background:
                "radial-gradient(ellipse,rgba(5,10,48,0.05) 0%,transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              backgroundImage: STITCH_NAVY,
            }}
          />

          <div
            className="relative max-w-3xl mx-auto px-5 sm:px-8"
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Eyebrow label="Get Started" />

            <h2
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: "clamp(1.9rem,5vw,3rem)",
                fontWeight: 800,
                color: "#050a30",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Ready to Add a Splash of{" "}
              <span
                style={{
                  fontStyle: "italic",
                  color: "#c49015",
                  fontWeight: 700,
                }}
              >
                Colour?
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: "0.9rem",
                color: "rgba(5,10,48,0.5)",
                fontWeight: 300,
                lineHeight: 1.9,
                maxWidth: 420,
              }}
            >
              Join the Creative N Colourful family and bring handcrafted joy
              into your home. Explore our vibrant collection of 100% handmade
              products today.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginTop: 6,
              }}
              className="sm:flex-row"
            >
              <Link
                to="/shop"
                className="btn-primary"
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.04em",
                  background: "#050a30",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "13px 32px",
                  borderRadius: 999,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontWeight: 600,
                  boxShadow: "0 4px 20px rgba(5,10,48,0.18)",
                }}
              >
                Shop Now <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="btn-outline"
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.04em",
                  background: "transparent",
                  color: "#050a30",
                  textDecoration: "none",
                  padding: "13px 32px",
                  borderRadius: 999,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontWeight: 500,
                  border: "1.5px solid rgba(5,10,48,0.25)",
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
