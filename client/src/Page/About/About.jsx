import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Img from "./bg-about.jpg";
import Spices from "./about-us.webp";
import Natural from "./hun-natura.png";
import FarmFresh from "./farm-fresh.png";
import SafeHygienic from "./safe-hygienic.png";
import Quality from "./quality.png";
import { Link } from "react-router-dom";

/* ─── Font Loader ─── */
const FontLoader = () => {
  useEffect(() => {
    if (document.getElementById("cnc-fonts")) return;
    const link = document.createElement("link");
    link.id = "cnc-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
};

/* ─── SVG Icons ─── */
const Icons = {
  Truck: () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 5v4h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  Refresh: () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  ),
  Hand: () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  ),
  Star: () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Heart: () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  Shield: () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Palette: () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="8.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="6.5" cy="12.5" r="1" fill="currentColor" stroke="none" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  Target: () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  ArrowRight: ({ size = 14 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Sparkle: () => (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
    </svg>
  ),
  Quote: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  ),
  Check: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
};

/* ─── Design Tokens ─── */
const C = {
  navy: "#050a30",
  navyMid: "#0d1a5e",
  gold: "#c49015",
  goldLight: "#f0c040",
  goldPale: "#fdf8ed",
  cream: "#fafaf6",
  white: "#ffffff",
  body: "#4b4640",
  muted: "#8c8680",
  border: "#e8e2d8",
};
const F = "'Poppins', sans-serif";

/* ─── Data ─── */
const values = [
  {
    Icon: Icons.Heart,
    title: "Handcrafted with Love",
    desc: "Every product is lovingly made by skilled artisans who pour heart and soul into each creation.",
    accent: "#fff0f3",
    border: "#ffc0cb",
    iconBg: "#c0394b",
  },
  {
    Icon: Icons.Shield,
    title: "Quality Craftsmanship",
    desc: "We use only premium materials — each piece carefully inspected for lasting beauty.",
    accent: "#fffbeb",
    border: "#fde68a",
    iconBg: "#b45309",
  },
  {
    Icon: Icons.Palette,
    title: "Creative Vision",
    desc: "From vibrant colours to bold designs — we push boundaries to bring truly one-of-a-kind pieces.",
    accent: "#f0fdf4",
    border: "#bbf7d0",
    iconBg: "#16a34a",
  },
  {
    Icon: Icons.Target,
    title: "Customer Delight",
    desc: "Your joy is our purpose. From personalised gifts to custom orders — every experience is memorable.",
    accent: "#f5f3ff",
    border: "#ddd6fe",
    iconBg: "#7c3aed",
  },
];

const whyUs = [
  {
    img: Natural,
    title: "Authentic Artistry",
    desc: "Real artisans, real craft — every piece carries a generational story.",
  },
  {
    img: FarmFresh,
    title: "Vibrant & Unique",
    desc: "Bold colours and creative designs that you won't find anywhere else.",
  },
  {
    img: SafeHygienic,
    title: "Premium Materials",
    desc: "Finest materials selected for lasting beauty and durability.",
  },
  {
    img: Quality,
    title: "Gift-Ready",
    desc: "Beautifully packaged — perfect for every occasion and celebration.",
  },
];

const commitments = [
  {
    Icon: Icons.Truck,
    title: "Free Delivery",
    sub: "On all orders above ₹499",
  },
  {
    Icon: Icons.Refresh,
    title: "Easy Returns",
    sub: "Hassle-free 7-day returns",
  },
  {
    Icon: Icons.Hand,
    title: "100% Handmade",
    sub: "Every piece, artisan crafted",
  },
  {
    Icon: Icons.Star,
    title: "Custom Orders",
    sub: "Personalised just for you",
  },
];

const stats = [
  { v: "2018", l: "Founded" },
  { v: "100+", l: "Products" },
  { v: "15k+", l: "Customers" },
];
const checks = [
  "Artisan-made — each piece truly unique",
  "Sourced from craftspeople across India",
  "Thoughtfully packaged for gifting",
];
const storyP = [
  "Born from a love of colour and craftsmanship, Creative N Colourful was founded with a single dream — to celebrate the timeless art of handmade creations. From vibrant wall hangings to intricate jewellery and home décor, every piece carries the fingerprint of a skilled artisan.",
  "Over the years, we've built a community of passionate craftspeople across India, each bringing their regional heritage and artistic flair to our growing collection. We believe handmade is not just a product — it's a connection between the maker and the receiver.",
];

/* ─── Shared Atoms ─── */
const Tag = ({ label, dark }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 14,
      justifyContent: "flex-start",
    }}
  >
    <div
      style={{
        width: 26,
        height: 1,
        background: dark ? "rgba(255,255,255,0.28)" : C.gold,
      }}
    />
    <span
      style={{
        fontFamily: F,
        fontSize: "0.58rem",
        letterSpacing: "0.26em",
        textTransform: "uppercase",
        fontWeight: 600,
        color: dark ? "rgba(255,255,255,0.48)" : C.gold,
      }}
    >
      {label}
    </span>
    <div
      style={{
        width: 26,
        height: 1,
        background: dark ? "rgba(255,255,255,0.28)" : C.gold,
      }}
    />
  </div>
);

const STITCH_GOLD = `repeating-linear-gradient(90deg,rgba(196,144,21,0.48) 0px,rgba(196,144,21,0.48) 8px,transparent 8px,transparent 16px)`;
const STITCH_NAVY = `repeating-linear-gradient(90deg,rgba(5,10,48,0.14) 0px,rgba(5,10,48,0.14) 8px,transparent 8px,transparent 16px)`;

/* ─── About Page ─── */
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
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes floatY {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-8px); }
        }
        @keyframes spinRing {
          from { transform:translate(-50%,-50%) rotate(0deg); }
          to   { transform:translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes goldShine {
          0%   { background-position:-200% center; }
          100% { background-position: 200% center; }
        }

        .au  { animation:fadeUp 0.72s cubic-bezier(0.22,1,0.36,1) both; }
        .d1  { animation-delay:.08s; } .d2 { animation-delay:.16s; }
        .d3  { animation-delay:.24s; } .d4 { animation-delay:.32s; }

        .float-badge { animation:floatY 3.6s ease-in-out infinite; }

        .spin-ring {
          position:absolute; width:390px; height:390px; border-radius:50%;
          border:1px dashed rgba(5,10,48,0.09);
          top:50%; left:50%;
          animation:spinRing 32s linear infinite;
          pointer-events:none;
        }

        .gold-text {
          background:linear-gradient(90deg,#c49015 0%,#f0c040 40%,#fffbe0 50%,#f0c040 60%,#c49015 100%);
          background-size:200% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:goldShine 4s linear infinite;
        }

        .val-card  { transition:transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s; }
        .val-card:hover { transform:translateY(-6px); box-shadow:0 22px 52px rgba(5,10,48,0.1) !important; }

        .why-card  { transition:all .3s cubic-bezier(.22,1,.36,1); cursor:default; }
        .why-card:hover { transform:translateY(-5px); border-color:${C.gold} !important; box-shadow:0 18px 44px rgba(5,10,48,0.09) !important; }
        .why-card:hover .wimg { transform:scale(1.1); }

        .cmt-card  { transition:background .25s, transform .25s; }
        .cmt-card:hover { background:rgba(196,144,21,0.09) !important; transform:translateY(-3px); }

        .btn-p { transition:transform .22s, background .22s, box-shadow .22s; }
        .btn-p:hover { background:${C.navyMid} !important; transform:translateY(-2px); box-shadow:0 10px 30px rgba(5,10,48,0.22) !important; }

        .btn-o { transition:all .22s; }
        .btn-o:hover { background:${C.navy} !important; color:#fff !important; border-color:${C.navy} !important; transform:translateY(-2px); }

        .gold-btn { transition:all .22s; }
        .gold-btn:hover { background:#a87a10 !important; transform:translateY(-2px); box-shadow:0 10px 28px rgba(196,144,21,0.38) !important; }

        @media (max-width:900px) {
          .hero-grid  { grid-template-columns:1fr !important; }
          .story-grid { grid-template-columns:1fr !important; }
          .val-grid   { grid-template-columns:1fr 1fr !important; }
          .why-grid   { grid-template-columns:1fr 1fr !important; }
          .cmt-grid   { grid-template-columns:1fr 1fr !important; }
          .hide-mob   { display:none !important; }
        }
        @media (max-width:520px) {
          .val-grid   { grid-template-columns:1fr !important; }
          .why-grid   { grid-template-columns:1fr !important; }
          .cmt-grid   { grid-template-columns:1fr !important; }
          .cta-row    { flex-direction:column !important; align-items:center !important; }
        }
      `}</style>

      <div style={{ background: C.cream, fontFamily: F }}>
        {/* ══════════════ HERO ══════════════ */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            background: C.navy,
            minHeight: 580,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${Img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.07,
            }}
          />

          {/* Decorative rings */}
          {[
            ["10%", "8%", 260, 260, "1px dashed rgba(255,255,255,0.06)"],
            ["18%", "12%", 175, 175, "1px solid rgba(196,144,21,0.14)"],
            [
              "auto",
              "auto",
              "5%",
              "10%",
              110,
              110,
              "1px dashed rgba(196,144,21,0.1)",
            ],
          ]
            .slice(0, 2)
            .map(([t, r, w, h, b], i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: t,
                  right: r,
                  width: w,
                  height: h,
                  borderRadius: "50%",
                  border: b,
                  pointerEvents: "none",
                }}
              />
            ))}
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "5%",
              width: 110,
              height: 110,
              borderRadius: "50%",
              border: "1px dashed rgba(196,144,21,0.1)",
              pointerEvents: "none",
            }}
          />

          {/* Stitch lines */}
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
            className="hero-grid"
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: 1100,
              margin: "0 auto",
              padding: "100px 32px 90px",
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            {/* Left */}
            <div>
              <div
                className="au"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "5px 16px",
                  borderRadius: 999,
                  marginBottom: 26,
                  background: "rgba(196,144,21,0.12)",
                  border: "1px solid rgba(196,144,21,0.33)",
                }}
              >
                <div style={{ color: C.goldLight }}>
                  <Icons.Sparkle />
                </div>
                <span
                  style={{
                    fontFamily: F,
                    fontSize: "0.58rem",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: C.goldLight,
                    fontWeight: 600,
                  }}
                >
                  Est. 2018 · Handmade · Artisan · Colourful
                </span>
              </div>

              <h1
                className="au d1"
                style={{
                  fontFamily: F,
                  fontSize: "clamp(2.4rem,5.2vw,3.9rem)",
                  fontWeight: 800,
                  color: "#f5f2ec",
                  lineHeight: 1.09,
                  letterSpacing: "-0.03em",
                  marginBottom: 18,
                }}
              >
                About{" "}
                <span className="gold-text">
                  Creative N<br />
                  Colourful
                </span>
              </h1>

              <div
                style={{
                  width: 44,
                  height: 3,
                  background: `linear-gradient(90deg,${C.gold},${C.goldLight})`,
                  borderRadius: 2,
                  marginBottom: 20,
                }}
              />

              <p
                className="au d2"
                style={{
                  fontFamily: F,
                  fontSize: "0.93rem",
                  color: "rgb(245, 242, 236)",
                  fontWeight: 300,
                  lineHeight: 1.85,
                  maxWidth: 420,
                  marginBottom: 32,
                }}
              >
                Where every stitch, stroke, and colour tells a story — bringing
                handcrafted joy into your everyday life.
              </p>

              {/* Stats */}
              <div
                className="au d3"
                style={{
                  display: "flex",
                  gap: 0,
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  paddingTop: 22,
                  marginBottom: 34,
                }}
              >
                {stats.map((s, i) => (
                  <div
                    key={s.l}
                    style={{
                      paddingRight: i < 2 ? 28 : 0,
                      paddingLeft: i > 0 ? 28 : 0,
                      borderRight:
                        i < 2 ? "1px solid rgba(255,255,255,0.09)" : "none",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: F,
                        fontSize: "1.65rem",
                        fontWeight: 800,
                        color: C.goldLight,
                        lineHeight: 1,
                        marginBottom: 4,
                      }}
                    >
                      {s.v}
                    </div>
                    <div
                      style={{
                        fontFamily: F,
                        fontSize: "0.54rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "rgb(165, 139, 139)",
                        fontWeight: 400,
                      }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div
                className="au d4"
                style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
              >
                <Link
                  to="/shop"
                  className="gold-btn"
                  style={{
                    fontFamily: F,
                    fontSize: "0.83rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    background: C.gold,
                    color: "#fff",
                    textDecoration: "none",
                    padding: "12px 28px",
                    borderRadius: 999,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    boxShadow: "0 4px 20px rgba(196,144,21,0.3)",
                  }}
                >
                  Shop Now <Icons.ArrowRight />
                </Link>
                <Link
                  to="/contact"
                  className="btn-o"
                  style={{
                    fontFamily: F,
                    fontSize: "0.83rem",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    background: "transparent",
                    color: "rgba(245,242,236,0.78)",
                    textDecoration: "none",
                    padding: "12px 28px",
                    borderRadius: 999,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right — Image collage */}
            <div
              className="au d2 hide-mob"
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="spin-ring" />

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  maxWidth: 320,
                  borderRadius: 22,
                  overflow: "hidden",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.38)",
                  border: "1px solid rgba(255,255,255,0.09)",
                }}
              >
                <img
                  src={Spices}
                  alt="Our Handicrafts"
                  style={{
                    width: "100%",
                    height: 400,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top,rgba(5,10,48,0.75) 0%,transparent 52%)",
                  }}
                />

                {/* In-image quote */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 14,
                    left: 12,
                    right: 12,
                    zIndex: 3,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 9,
                    padding: "11px 13px",
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.92)",
                    border: "1px solid rgba(196,144,21,0.2)",
                    boxShadow: "0 4px 20px rgba(5,10,48,0.2)",
                  }}
                >
                  <div style={{ color: C.gold, flexShrink: 0, marginTop: 2 }}>
                    <Icons.Quote />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: F,
                        fontStyle: "italic",
                        fontSize: "0.78rem",
                        color: "#1a1208",
                        lineHeight: 1.5,
                        fontWeight: 400,
                        marginBottom: 4,
                      }}
                    >
                      "Every colour has a story. Every craft has a soul."
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="float-badge"
                style={{
                  position: "absolute",
                  bottom: -10,
                  right: -10,
                  zIndex: 5,
                  padding: "10px 16px",
                  borderRadius: 16,
                  background: `linear-gradient(135deg,${C.navy},${C.navyMid})`,
                  boxShadow: "0 12px 32px rgba(5,10,48,0.38)",
                  border: "2px solid rgba(196,144,21,0.28)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: F,
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: C.goldLight,
                    lineHeight: 1,
                  }}
                >
                  100+
                </span>
                <span
                  style={{
                    fontFamily: F,
                    fontSize: "0.49rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    fontWeight: 500,
                    marginTop: 3,
                  }}
                >
                  Crafts
                </span>
              </div>

              
            </div>
          </div>

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
        </section>

        {/* ══════════════ OUR STORY ══════════════ */}
        <section style={{ background: C.white, padding: "88px 0" }}>
          <div
            className="story-grid"
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "0 32px",
              display: "grid",
              gridTemplateColumns: "1fr 1.08fr",
              gap: 72,
              alignItems: "center",
            }}
          >
            {/* Image side */}
            <div className="au" style={{ position: "relative" }}>
              {/* Decorative offset frame */}
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  right: -14,
                  bottom: -14,
                  left: 14,
                  borderRadius: 24,
                  border: `1.5px solid ${C.border}`,
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  borderRadius: 22,
                  overflow: "hidden",
                  boxShadow: "0 24px 64px rgba(5,10,48,0.11)",
                  border: `1px solid ${C.border}`,
                }}
              >
                <img
                  src={Spices}
                  alt="Our Story"
                  style={{
                    width: "100%",
                    height: 440,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Floating stat badge */}
              <div
                className="float-badge"
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: -18,
                  zIndex: 4,
                  padding: "12px 18px",
                  borderRadius: 16,
                  background: C.navy,
                  boxShadow: "0 10px 30px rgba(5,10,48,0.25)",
                  border: `2px solid rgba(196,144,21,0.24)`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: F,
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: C.goldLight,
                    lineHeight: 1,
                  }}
                >
                  15k+
                </span>
                <span
                  style={{
                    fontFamily: F,
                    fontSize: "0.49rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.42)",
                    fontWeight: 500,
                  }}
                >
                  Happy Customers
                </span>
              </div>

              {/* Year chip */}
              <div
                style={{
                  position: "absolute",
                  top: 18,
                  right: -14,
                  zIndex: 4,
                  padding: "7px 14px",
                  borderRadius: 10,
                  background: C.gold,
                  boxShadow: "0 6px 20px rgba(196,144,21,0.32)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: F,
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "0.04em",
                  }}
                >
                  Since 2018
                </span>
              </div>
            </div>

            {/* Text side */}
            <div className="au d1">
              <Tag label="Our Journey" />
              <h2
                style={{
                  fontFamily: F,
                  fontSize: "clamp(1.8rem,3.5vw,2.65rem)",
                  fontWeight: 800,
                  color: C.navy,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                  marginBottom: 22,
                }}
              >
                The{" "}
                <span
                  style={{
                    fontStyle: "italic",
                    fontWeight: 600,
                    color: C.gold,
                  }}
                >
                  Creative N Colourful
                </span>{" "}
                Story
              </h2>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                {storyP.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: F,
                      fontSize: "0.87rem",
                      color: C.body,
                      fontWeight: 300,
                      lineHeight: 1.9,
                      margin: 0,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Checkpoints */}
              <div
                style={{
                  marginTop: 26,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {checks.map((item) => (
                  <div
                    key={item}
                    style={{ display: "flex", alignItems: "center", gap: 9 }}
                  >
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: C.goldPale,
                        border: `1.5px solid ${C.gold}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: C.gold,
                      }}
                    >
                      <Icons.Check />
                    </div>
                    <span
                      style={{
                        fontFamily: F,
                        fontSize: "0.82rem",
                        color: C.body,
                        fontWeight: 400,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats strip */}
              
            </div>
          </div>
        </section>

        {/* ══════════════ OUR VALUES ══════════════ */}
        <section style={{ background: C.cream, padding: "80px 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
            <div
              className="au"
              style={{ textAlign: "center", marginBottom: 48 }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Tag label="What We Stand For" />
              </div>
              <h2
                style={{
                  fontFamily: F,
                  fontSize: "clamp(1.7rem,3.5vw,2.4rem)",
                  fontWeight: 800,
                  color: C.navy,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                Our Core{" "}
                <span
                  style={{
                    fontStyle: "italic",
                    fontWeight: 600,
                    color: C.gold,
                  }}
                >
                  Values
                </span>
              </h2>
            </div>

            <div
              className="au d1 val-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 16,
              }}
            >
              {values.map((v) => (
                <div
                  key={v.title}
                  className="val-card"
                  style={{
                    background: v.accent,
                    border: `1.5px solid ${v.border}`,
                    borderRadius: 20,
                    padding: "28px 22px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    boxShadow: "0 2px 12px rgba(5,10,48,0.04)",
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 14,
                      background: v.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ color: "#fff" }}>
                      <v.Icon />
                    </div>
                  </div>
                  <h3
                    style={{
                      fontFamily: F,
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: C.navy,
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: F,
                      fontSize: "0.74rem",
                      color: C.body,
                      fontWeight: 300,
                      lineHeight: 1.78,
                      margin: 0,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ WHY CHOOSE US ══════════════ */}
        <section style={{ background: C.white, padding: "80px 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
            <div
              className="au"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: 48,
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <div>
                <Tag label="Our Promise" />
                <h2
                  style={{
                    fontFamily: F,
                    fontSize: "clamp(1.7rem,3.5vw,2.4rem)",
                    fontWeight: 800,
                    color: C.navy,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.1,
                    margin: 0,
                  }}
                >
                  Why Choose{" "}
                  <span
                    style={{
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: C.gold,
                    }}
                  >
                    Us?
                  </span>
                </h2>
              </div>
              <Link
                to="/shop"
                className="btn-p"
                style={{
                  fontFamily: F,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  background: C.navy,
                  color: "#fff",
                  textDecoration: "none",
                  padding: "11px 24px",
                  borderRadius: 999,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                }}
              >
                Shop All <Icons.ArrowRight />
              </Link>
            </div>

            <div
              className="au d1 why-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 16,
              }}
            >
              {whyUs.map((w) => (
                <div
                  key={w.title}
                  className="why-card"
                  style={{
                    background: C.cream,
                    border: `1.5px solid ${C.border}`,
                    borderRadius: 20,
                    padding: "28px 22px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 14,
                    boxShadow: "0 2px 12px rgba(5,10,48,0.04)",
                  }}
                >
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 18,
                      background: C.white,
                      border: `1.5px solid ${C.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={w.img}
                      alt={w.title}
                      className="wimg"
                      style={{
                        width: 42,
                        height: 42,
                        objectFit: "contain",
                        transition: "transform 0.4s",
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: F,
                      fontSize: "0.86rem",
                      fontWeight: 700,
                      color: C.navy,
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {w.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: F,
                      fontSize: "0.72rem",
                      color: C.muted,
                      fontWeight: 300,
                      lineHeight: 1.78,
                      margin: 0,
                      flexGrow: 1,
                    }}
                  >
                    {w.desc}
                  </p>
                  <Link
                    to="/shop"
                    style={{
                      fontFamily: F,
                      fontSize: "0.57rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: C.gold,
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    Explore <Icons.ArrowRight size={10} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ COMMITMENTS ══════════════ */}
        <section
          style={{
            background: C.navy,
            padding: "80px 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
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
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: 260,
              height: 260,
              borderRadius: "50%",
              border: "1px dashed rgba(255,255,255,0.04)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-40px",
              left: "-40px",
              width: 190,
              height: 190,
              borderRadius: "50%",
              border: "1px dashed rgba(196,144,21,0.09)",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
            <div
              className="au"
              style={{ textAlign: "center", marginBottom: 52 }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Tag label="Our Commitments" dark />
              </div>
              <h2
                style={{
                  fontFamily: F,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.0rem)",
                  fontWeight: 700,
                  color: "#f5f2ec",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                }}
              >
                The Creative N Colourful{" "}
                <span
                  style={{
                    fontStyle: "italic",
                    fontWeight: 600,
                    color: C.goldLight,
                  }}
                >
                  Promise
                </span>
              </h2>
            </div>

            <div
              className="au d1 cmt-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 16,
              }}
            >
              {commitments.map((c) => (
                <div
                  key={c.title}
                  className="cmt-card"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 20,
                    padding: "28px 22px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 16,
                      background: "rgba(196,144,21,0.12)",
                      border: "1px solid rgba(196,144,21,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: C.goldLight,
                    }}
                  >
                    <c.Icon />
                  </div>
                  <h3
                    style={{
                      fontFamily: F,
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#f5f2ec",
                      margin: 0,
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: F,
                      fontSize: "0.72rem",
                      color: "rgba(245,242,236,0.38)",
                      fontWeight: 300,
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {c.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ CTA ══════════════ */}
        <section
          style={{
            background: C.goldPale,
            padding: "96px 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
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
          {/* Big watermark */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              fontFamily: F,
              fontSize: "clamp(80px,15vw,160px)",
              fontWeight: 900,
              color: "rgba(5,10,48,0.035)",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              userSelect: "none",
              letterSpacing: "-0.04em",
            }}
          >
            CRAFTED
          </div>

          <div
            className="au"
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: 620,
              margin: "0 auto",
              padding: "0 32px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Tag label="Join the Family" />
            </div>

            <h2
              style={{
                fontFamily: F,
                fontSize: "clamp(2rem,5vw,3.1rem)",
                fontWeight: 800,
                color: C.navy,
                letterSpacing: "-0.03em",
                lineHeight: 1.07,
                marginBottom: 18,
              }}
            >
              Ready to Add a Splash of{" "}
              <span
                style={{ fontStyle: "italic", fontWeight: 700, color: C.gold }}
              >
                Colour?
              </span>
            </h2>

            <p
              style={{
                fontFamily: F,
                fontSize: "0.9rem",
                color: C.body,
                fontWeight: 300,
                lineHeight: 1.85,
                maxWidth: 390,
                marginBottom: 34,
              }}
            >
              Join thousands of happy customers who've brought handcrafted joy
              into their homes. Explore our vibrant, 100% handmade collection
              today.
            </p>

            <div
              className="cta-row"
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Link
                to="/shop"
                className="btn-p"
                style={{
                  fontFamily: F,
                  fontSize: "0.85rem",
                  letterSpacing: "0.04em",
                  fontWeight: 600,
                  background: C.navy,
                  color: "#fff",
                  textDecoration: "none",
                  padding: "14px 32px",
                  borderRadius: 999,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  boxShadow: "0 4px 20px rgba(5,10,48,0.18)",
                }}
              >
                Shop Now <Icons.ArrowRight />
              </Link>
              <Link
                to="/contact"
                className="btn-o"
                style={{
                  fontFamily: F,
                  fontSize: "0.85rem",
                  letterSpacing: "0.04em",
                  fontWeight: 500,
                  background: "transparent",
                  color: C.navy,
                  textDecoration: "none",
                  padding: "14px 32px",
                  borderRadius: 999,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  border: `1.5px solid rgba(5,10,48,0.24)`,
                }}
              >
                Contact Us
              </Link>
            </div>

            <div
              style={{
                marginTop: 34,
                paddingTop: 22,
                borderTop: `1px solid ${C.border}`,
                width: "100%",
              }}
            >
              <p
                style={{
                  fontFamily: F,
                  fontSize: "0.69rem",
                  color: C.muted,
                  fontWeight: 300,
                  letterSpacing: "0.04em",
                }}
              >
                🤲 &nbsp;Every purchase directly supports an Indian artisan
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
