import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Img from "./bg-about.jpg";
import Spices from "./spice.png";
import Natural from "./hun-natura.png";
import FarmFresh from "./farm-fresh.png";
import SafeHygienic from "./safe-hygienic.png";
import Quality from "./quality.png";
import {
  Heart,
  Shield,
  Zap,
  Target,
  Truck,
  RefreshCw,
  CheckCircle,
  Star,
  TrendingUp,
  Quote,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ── Font loader ── */
const FontLoader = () => {
  useEffect(() => {
    if (document.getElementById("about-fonts")) return;
    const link = document.createElement("link");
    link.id = "about-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=DM+Sans:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
};

const values = [
  {
    icon: Heart,
    title: "Passion for Spices",
    desc: "We believe every meal should be flavorful. Our spices are carefully sourced for authenticity and aroma.",
  },
  {
    icon: Shield,
    title: "Quality First",
    desc: "Every batch undergoes strict quality checks. Only the best, 100% natural spices make it to your kitchen.",
  },
  {
    icon: Zap,
    title: "Innovation",
    desc: "From new blends to convenient packaging, we continuously innovate to enhance your cooking experience.",
  },
  {
    icon: Target,
    title: "Customer Focus",
    desc: "Your satisfaction is our priority. From easy ordering to prompt support, we are here for you.",
  },
];

const features = [
  { icon: Truck, title: "Free Shipping", sub: "On orders over ₹299" },
  { icon: RefreshCw, title: "7-Day Returns", sub: "Satisfaction guaranteed" },
  { icon: CheckCircle, title: "100% Natural", sub: "No artificial additives" },
  { icon: Star, title: "10AM–6PM Support", sub: "Always here to help" },
];

const whyUs = [
  {
    img: Natural,
    title: "100% Natural",
    desc: "Pure, natural ingredients. No shortcuts.",
  },
  {
    img: FarmFresh,
    title: "Farm Fresh",
    desc: "Directly sourced from trusted farmers.",
  },
  {
    img: SafeHygienic,
    title: "Safe & Hygienic",
    desc: "Processed under strict hygiene standards.",
  },
  {
    img: Quality,
    title: "Premium Quality",
    desc: "Handpicked spices for authentic flavour.",
  },
];

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;

const SectionEyebrow = ({ label }) => (
  <div className="flex items-center justify-center gap-3 mb-3">
    <div
      className="h-px w-10"
      style={{ background: "linear-gradient(90deg,transparent,#C8973A)" }}
    />
    <span
      style={{
        fontFamily: "'DM Sans',sans-serif",
        fontSize: "0.6rem",
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        color: "#C8973A",
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      <Leaf size={10} /> {label}
    </span>
    <div
      className="h-px w-10"
      style={{ background: "linear-gradient(90deg,#C8973A,transparent)" }}
    />
  </div>
);

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <FontLoader />
      <Helmet>
        <title>About Us | Asvadvadat Spice & Tea Co.</title>
        <meta
          name="description"
          content="Founded with a passion for pure, authentic spices and teas. Asvadvadat Spice & Tea Co. brings farm-fresh flavour directly to your kitchen."
        />
      </Helmet>

      <style>{`
        @keyframes about-fade-up {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ab-enter { animation: about-fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .ab-d1 { animation-delay: 0.05s; }
        .ab-d2 { animation-delay: 0.13s; }
        .ab-d3 { animation-delay: 0.21s; }
        .ab-d4 { animation-delay: 0.29s; }
        .val-card:hover .val-icon { transform: scale(1.1) rotate(-4deg); }
        .why-card:hover .why-img { transform: scale(1.06); }
      `}</style>

      <div
        className="min-h-screen"
        style={{
          background:
            "linear-gradient(160deg,#FAF6EF 0%,#F2E8D5 55%,#FAF6EF 100%)",
        }}
      >
        {/* ━━━━━ HERO ━━━━━ */}
        <div
          className="relative text-white overflow-hidden"
          style={{
            minHeight: 420,
            backgroundImage: `url(${Img})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.55) 60%, rgba(242,232,213,1) 100%)",
            }}
          />
          {/* grain */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ backgroundImage: GRAIN, backgroundSize: "180px" }}
          />

          <div className="relative max-w-5xl mx-auto px-6 py-24 sm:py-32 text-center ab-enter">
            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#E6C882",
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <Leaf size={10} /> Est. 2020 · Pure · Aromatic · Handcrafted
            </p>
            <h1
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(2.2rem,6vw,4rem)",
                fontWeight: 800,
                color: "#FAF6EF",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              About{" "}
              <span
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  background: "linear-gradient(90deg,#C8973A,#E6C882)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Asvadvadat
              </span>
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "1rem",
                color: "rgba(250,246,239,0.65)",
                fontWeight: 300,
                marginTop: 16,
                lineHeight: 1.75,
                maxWidth: 500,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Spice & Tea Co. — where tradition meets purity in every jar and
              every brew.
            </p>
          </div>
        </div>

        {/* ━━━━━ OUR STORY ━━━━━ */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{ backgroundImage: GRAIN, backgroundSize: "180px" }}
          />
          <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Image side */}
              <div className="relative flex justify-center ab-enter ab-d1">
                <div
                  className="absolute w-72 h-72 rounded-full pointer-events-none hidden lg:block"
                  style={{
                    border: "1px dashed rgba(200,151,58,0.2)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                />
                <div
                  className="relative z-10 w-full max-w-sm rounded-2xl overflow-hidden"
                  style={{
                    boxShadow:
                      "0 16px 56px rgba(42,31,20,0.15), 0 0 0 1px rgba(200,151,58,0.15)",
                  }}
                >
                  <img
                    src={Spices}
                    alt="Our Spices"
                    className="w-full object-cover"
                    style={{ height: "clamp(260px,42vw,400px)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top,rgba(42,31,20,0.45) 0%,transparent 55%)",
                    }}
                  />
                  {/* Quote overlay */}
                  <div className="absolute bottom-5 left-4 right-4">
                    <div
                      className="flex items-start gap-2 p-3 rounded-xl"
                      style={{
                        background: "rgba(250,246,239,0.12)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(200,151,58,0.2)",
                      }}
                    >
                      <Quote
                        size={14}
                        style={{
                          color: "#C8973A",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      />
                      <div>
                        <p
                          style={{
                            fontFamily: "'Cormorant Garamond',serif",
                            fontStyle: "italic",
                            fontSize: "0.88rem",
                            color: "#FAF6EF",
                            lineHeight: 1.4,
                          }}
                        >
                          "Every dish deserves the perfect flavour."
                        </p>
                        <p
                          style={{
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "0.6rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "#C8973A",
                            marginTop: 4,
                          }}
                        >
                          — Founder, Asvadvadat
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating stat badge */}
                <div
                  className="absolute -bottom-3 -right-2 lg:-right-5 z-20 px-4 py-2.5 rounded-2xl hidden sm:flex flex-col items-center"
                  style={{
                    background: "linear-gradient(135deg,#C8973A,#A67828)",
                    boxShadow: "0 8px 24px rgba(200,151,58,0.35)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "#FAF6EF",
                      lineHeight: 1,
                    }}
                  >
                    50+
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: "0.58rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(250,246,239,0.8)",
                    }}
                  >
                    Varieties
                  </span>
                </div>
              </div>

              {/* Text side */}
              <div className="ab-enter ab-d2 flex flex-col gap-6">
                <div>
                  <SectionEyebrow label="Our Journey" />
                  <h2
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: "clamp(1.9rem,4vw,2.8rem)",
                      fontWeight: 700,
                      color: "#2A1F14",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                      textAlign: "center",
                    }}
                  >
                    The{" "}
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond',serif",
                        fontStyle: "italic",
                        fontWeight: 400,
                        background: "linear-gradient(90deg,#C8973A,#A67828)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Asvadvadat
                    </span>{" "}
                    Story
                  </h2>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    "Founded with a simple but powerful mission — to deliver authentic, natural spices and teas directly to your kitchen. Our founders sourced the finest varieties from across India, blending generations of tradition with uncompromising quality.",
                    "Over the years, we've grown into a brand trusted by households who refuse to settle for anything less than pure. Every product is carefully tested for aroma, freshness, and taste to ensure only the best reaches you.",
                    "Today, Asvadvadat Spice & Tea Co. continues to inspire culinary creativity, offering over 50 varieties of premium spices and hand-blended teas — while staying true to our core values: purity, authenticity, and delight.",
                  ].map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(42,31,20,0.65)",
                        fontWeight: 300,
                        lineHeight: 1.85,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {[
                    { v: "2020", l: "Founded" },
                    { v: "50+", l: "Products" },
                    { v: "25k+", l: "Happy Customers" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="flex flex-col items-center py-3 rounded-xl gap-0.5"
                      style={{
                        background: "rgba(200,151,58,0.06)",
                        border: "1px solid rgba(200,151,58,0.14)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Playfair Display',serif",
                          fontSize: "1.3rem",
                          fontWeight: 700,
                          color: "#C8973A",
                          lineHeight: 1,
                        }}
                      >
                        {s.v}
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Sans',sans-serif",
                          fontSize: "0.6rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "rgba(42,31,20,0.45)",
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

        {/* ━━━━━ WHY CHOOSE US ━━━━━ */}
        <section
          className="py-14 lg:py-20 relative"
          style={{
            background: "linear-gradient(160deg,#F2E8D5 0%,#FAF6EF 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{ backgroundImage: GRAIN, backgroundSize: "180px" }}
          />
          <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-10 ab-enter">
              <SectionEyebrow label="Our Promise" />
              <h2
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "clamp(1.7rem,4vw,2.5rem)",
                  fontWeight: 700,
                  color: "#2A1F14",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Why Choose{" "}
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    background: "linear-gradient(90deg,#C8973A,#A67828)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Us?
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {whyUs.map((w, i) => (
                <div
                  key={w.title}
                  className="why-card ab-enter group flex flex-col items-center text-center gap-3 p-4 sm:p-6 rounded-2xl cursor-default"
                  style={{
                    background: "rgba(250,246,239,0.9)",
                    border: "1px solid rgba(200,151,58,0.14)",
                    boxShadow: "0 2px 14px rgba(42,31,20,0.05)",
                    transition:
                      "box-shadow 0.3s, border-color 0.3s, transform 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 10px 36px rgba(42,31,20,0.12)";
                    e.currentTarget.style.borderColor = "rgba(200,151,58,0.35)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 14px rgba(42,31,20,0.05)";
                    e.currentTarget.style.borderColor = "rgba(200,151,58,0.14)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg,#F5EDD8,#EDE0C4)",
                      border: "1px solid rgba(200,151,58,0.2)",
                    }}
                  >
                    <img
                      src={w.img}
                      alt={w.title}
                      className="why-img w-9 h-9 object-contain transition-transform duration-500"
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: "clamp(0.82rem,2vw,0.95rem)",
                      fontWeight: 600,
                      color: "#2A1F14",
                      lineHeight: 1.2,
                    }}
                  >
                    {w.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: "clamp(0.68rem,1.8vw,0.78rem)",
                      color: "rgba(42,31,20,0.52)",
                      fontWeight: 300,
                      lineHeight: 1.65,
                    }}
                  >
                    {w.desc}
                  </p>
                  <Link
                    to="/shop"
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#C8973A",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                    className="hover:opacity-70 transition-opacity"
                  >
                    Explore <ArrowRight size={10} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━ VALUES ━━━━━ */}
        <section className="py-14 lg:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{ backgroundImage: GRAIN, backgroundSize: "180px" }}
          />
          <div
            className="absolute top-0 right-1/4 w-80 h-80 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(200,151,58,0.06) 0%,transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-10 ab-enter">
              <SectionEyebrow label="What Drives Us" />
              <h2
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "clamp(1.7rem,4vw,2.5rem)",
                  fontWeight: 700,
                  color: "#2A1F14",
                  letterSpacing: "-0.02em",
                }}
              >
                Our{" "}
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    background: "linear-gradient(90deg,#C8973A,#A67828)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Values
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="val-card ab-enter group flex gap-5 p-5 sm:p-6 rounded-2xl"
                  style={{
                    background: "rgba(250,246,239,0.88)",
                    border: "1px solid rgba(200,151,58,0.14)",
                    boxShadow: "0 2px 14px rgba(42,31,20,0.05)",
                    transition: "box-shadow 0.3s, border-color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 10px 36px rgba(42,31,20,0.11)";
                    e.currentTarget.style.borderColor = "rgba(200,151,58,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 14px rgba(42,31,20,0.05)";
                    e.currentTarget.style.borderColor = "rgba(200,151,58,0.14)";
                  }}
                >
                  <div
                    className="val-icon flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg,#2A1F14,#3D2B18)",
                      boxShadow: "0 4px 14px rgba(42,31,20,0.2)",
                    }}
                  >
                    <v.icon size={20} style={{ color: "#C8973A" }} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3
                      style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#2A1F14",
                        lineHeight: 1.2,
                      }}
                    >
                      {v.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: "0.83rem",
                        color: "rgba(42,31,20,0.55)",
                        fontWeight: 300,
                        lineHeight: 1.75,
                      }}
                    >
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━ FEATURES STRIP ━━━━━ */}
        <section
          className="py-12 lg:py-16 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg,#2A1F14 0%,#3D2B18 50%,#2A1F14 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{ backgroundImage: GRAIN, backgroundSize: "180px" }}
          />
          <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-10">
              <SectionEyebrow label="Our Commitments" />
              <h2
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "clamp(1.5rem,3.5vw,2.2rem)",
                  fontWeight: 700,
                  color: "#FAF6EF",
                  letterSpacing: "-0.02em",
                }}
              >
                The{" "}
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "#C8973A",
                  }}
                >
                  Asvadvadat
                </span>{" "}
                Promise
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="ab-enter flex flex-col items-center text-center gap-3 p-4 sm:p-5 rounded-2xl group"
                  style={{
                    background: "rgba(200,151,58,0.07)",
                    border: "1px solid rgba(200,151,58,0.15)",
                    transition: "background 0.3s, border-color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(200,151,58,0.13)";
                    e.currentTarget.style.borderColor = "rgba(200,151,58,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(200,151,58,0.07)";
                    e.currentTarget.style.borderColor = "rgba(200,151,58,0.15)";
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: "rgba(200,151,58,0.12)",
                      border: "1px solid rgba(200,151,58,0.2)",
                    }}
                  >
                    <f.icon size={18} style={{ color: "#C8973A" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: "clamp(0.82rem,2vw,0.95rem)",
                      fontWeight: 600,
                      color: "#FAF6EF",
                      lineHeight: 1.2,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: "0.72rem",
                      color: "rgba(250,246,239,0.5)",
                      fontWeight: 300,
                      lineHeight: 1.6,
                    }}
                  >
                    {f.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━ CTA ━━━━━ */}
        <section
          className="py-16 lg:py-24 relative overflow-hidden"
          style={{
            background: "linear-gradient(160deg,#FAF6EF 0%,#F2E8D5 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{ backgroundImage: GRAIN, backgroundSize: "180px" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(200,151,58,0.08) 0%,transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center gap-6">
            <SectionEyebrow label="Get Started" />
            <h2
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(1.8rem,4.5vw,3rem)",
                fontWeight: 700,
                color: "#2A1F14",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Ready to Elevate{" "}
              <span
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  background: "linear-gradient(90deg,#C8973A,#A67828)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Your Cooking?
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "0.9rem",
                color: "rgba(42,31,20,0.55)",
                fontWeight: 300,
                lineHeight: 1.8,
                maxWidth: 440,
              }}
            >
              Join the Asvadvadat family and bring authentic flavours to your
              kitchen. Explore our premium 100% natural spices and teas today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium tracking-wide transition-all duration-300"
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  background: "linear-gradient(135deg,#C8973A,#A67828)",
                  color: "#FAF6EF",
                  textDecoration: "none",
                  boxShadow: "0 4px 22px rgba(200,151,58,0.35)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 6px 30px rgba(200,151,58,0.5)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 4px 22px rgba(200,151,58,0.35)")
                }
              >
                Shop Now <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium tracking-wide transition-all duration-300"
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  border: "1.5px solid rgba(200,151,58,0.4)",
                  color: "#8A6040",
                  textDecoration: "none",
                  background: "rgba(200,151,58,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg,#2A1F14,#3D2B18)";
                  e.currentTarget.style.color = "#FAF6EF";
                  e.currentTarget.style.borderColor = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(200,151,58,0.04)";
                  e.currentTarget.style.color = "#8A6040";
                  e.currentTarget.style.borderColor = "rgba(200,151,58,0.4)";
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
