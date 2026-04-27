import React, { useState, useEffect, useRef, useCallback } from "react";
import Male from "./male.jpg";
import Female from "./female.jpeg";
import { Leaf, ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import "./Testimonialcarousel.css";

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;

const testimonials = [
  {
    id: 1,
    name: "Krishan Gupta",
    title: "Crafts That Feel Personal",
    review:
      "The handcrafted pieces bring warmth and authenticity to my home. You can truly feel the effort and love of the artisan in every detail.",
    product: "Handcrafted Decor",
    image: Male,
    rating: 5,
  },
  {
    id: 2,
    name: "Aehmad",
    title: "Beautifully Made & Unique",
    review:
      "I ordered a handmade gift set and it exceeded my expectations. The quality, packaging, and uniqueness made it perfect for gifting.",
    product: "Gift Set",
    image: Male,
    rating: 5,
  },
  {
    id: 3,
    name: "Anish Patel",
    title: "Perfect Handmade Touch",
    review:
      "The bookmarks are so elegant and well-crafted. They add a special charm to my reading experience. Truly one-of-a-kind!",
    product: "Handmade Bookmark",
    image: Female,
    rating: 5,
  },
  {
    id: 4,
    name: "Rajendra Singh",
    title: "Authentic Artisan Work",
    review:
      "The craftsmanship is outstanding. Every piece feels authentic and premium. It’s rare to find such genuine handmade products online.",
    product: "Handicraft Collection",
    image: Male,
    rating: 5,
  },
  {
    id: 5,
    name: "Safaraz",
    title: "Perfect for Gifting",
    review:
      "I gifted these handcrafted items to my family and they absolutely loved them. The presentation and quality were top-notch.",
    product: "Curated Gift Box",
    image: Female,
    rating: 5,
  },
  {
    id: 6,
    name: "Imrana Ansari",
    title: "Consistent Quality & Design",
    review:
      "Every product I’ve ordered has been consistently beautiful and well-made. This is now my go-to place for unique handmade items.",
    product: "Premium Handicraft Pack",
    image: Male,
    rating: 5,
  },
];

const TRUST = [
  { value: "25,000+", label: "Happy Customers" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "50+", label: "Products" },
  { value: "100%", label: "Natural Ingredients" },
];

/* ════════════════════════════════════════
   Single Card
════════════════════════════════════════ */
const TestimonialCard = ({ t, isCenter }) => (
  <div className="tc-card-wrap">
    <div
      className={`tc-card ${isCenter ? "tc-card--center" : "tc-card--side"}`}
    >
      <div className="tc-quote-icon">
        <Quote size={20} />
      </div>

      <h3 className="tc-card-title">{t.title}</h3>

      <div className="tc-stars">
        {[...Array(t.rating)].map((_, i) => (
          <Star
            key={i}
            size={11}
            style={{ fill: "#C8973A", color: "#C8973A" }}
          />
        ))}
      </div>

      <p className="tc-review">{t.review}</p>

      <div className="tc-card-divider" />

      <div className="tc-author">
        <div className="tc-author-avatar">
          <img src={t.image} alt={t.name} />
        </div>
        <div>
          <p className="tc-author-name">{t.name}</p>
          <p className="tc-author-product">{t.product}</p>
        </div>
      </div>
    </div>
  </div>
);

/* ════════════════════════════════════════
   Main Carousel
════════════════════════════════════════ */
const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const DURATION = 5000;

  const maxIndex = Math.max(0, testimonials.length - slidesToShow);

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setSlidesToShow(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const next = useCallback(() => {
    setCurrent((p) => (p >= maxIndex ? 0 : p + 1));
    setProgress(0);
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((p) => (p === 0 ? maxIndex : p - 1));
    setProgress(0);
  }, [maxIndex]);

  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    progressRef.current = setInterval(() => {
      setProgress(Math.min(((Date.now() - start) / DURATION) * 100, 100));
    }, 40);
    intervalRef.current = setTimeout(next, DURATION);
    return () => {
      clearInterval(progressRef.current);
      clearTimeout(intervalRef.current);
    };
  }, [current, next]);

  const centerIndex = current + Math.floor(slidesToShow / 2);

  return (
    <section className="tc-section">
      {/* Background layers */}
      <div className="tc-grain" style={{ backgroundImage: GRAIN }} />
      <div className="tc-glow-top" />
      <div className="tc-grid-dots" />

      <div className="tc-container">
        {/* Header */}
        <div className="tc-header tc-enter">
          <div className="tc-eyebrow">
            <div className="tc-eyebrow-line-left" />
            <span className="tc-eyebrow-label">
              <Leaf size={10} /> Customer Stories
            </span>
            <div className="tc-eyebrow-line-right" />
          </div>
          <h2 className="tc-heading">
            What Our <span className="tc-heading-accent">Customers Say</span>
          </h2>
          <p className="tc-subtext">
            Real stories from real kitchens — discover why households trust
            Asvadvadat.
          </p>
        </div>

        {/* Carousel */}
        <div className="tc-carousel-wrap">
          <div className="tc-fade-left" />
          <div className="tc-fade-right" />

          <div className="tc-overflow">
            <div
              className="tc-track"
              style={{
                transform: `translateX(-${current * (100 / slidesToShow)}%)`,
              }}
            >
              {testimonials.map((t, i) => (
                <TestimonialCard
                  key={t.id}
                  t={t}
                  isCenter={i === centerIndex}
                />
              ))}
            </div>
          </div>

          <button className="tc-arrow-btn tc-arrow-prev" onClick={prev}>
            <ChevronLeft size={16} />
          </button>
          <button className="tc-arrow-btn tc-arrow-next" onClick={next}>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Dots + Counter */}
        <div className="tc-controls">
          <div className="tc-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`tc-dot ${i === current ? "tc-dot--active" : "tc-dot--inactive"}`}
                onClick={() => setCurrent(i)}
              >
                {i === current && (
                  <div
                    className="tc-dot-fill"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>
          <p className="tc-counter">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(maxIndex + 1).padStart(2, "0")}
          </p>
        </div>

        {/* Trust strip */}
        <div className="tc-trust-strip">
          {TRUST.map((s, i) => (
            <div key={i} className="tc-trust-item">
              <div>
                <p className="tc-trust-value">{s.value}</p>
                <p className="tc-trust-label">{s.label}</p>
              </div>
              {i < 3 && <div className="tc-trust-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
