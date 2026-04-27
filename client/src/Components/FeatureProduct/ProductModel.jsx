import React, { useState, useEffect, useRef } from "react";
import {
  X,
  ShoppingCart,
  Star,
  ChevronLeft,
  ChevronRight,
  Check,
  Trash2,
  Eye,
  Sparkles,
  Package,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeItem } from "../../Page/store/slices/cartSlice";
import { toast } from "react-toastify";
// CSS is already imported in FeatureProduct.jsx — no re-import needed

const ProductModal = ({ isOpen, onClose, product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const allImages = [
    product?.ProductMainImage?.url,
    product?.SecondImage?.url,
    product?.ThirdImage?.url,
    product?.FourthImage?.url,
  ].filter(Boolean);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartLoading, setCartLoading] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const intervalRef = useRef(null);

  const hasMultipleImages = allImages.length > 1;
  const hasVariants = product?.Varient?.length > 0;

  const isInCart = cartItems?.some(
    (item) =>
      item.product === product?._id &&
      item.variantId === (selectedVariant?._id || null),
  );
  const cartItem = cartItems?.find(
    (item) =>
      item.product === product?._id &&
      item.variantId === (selectedVariant?._id || null),
  );

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setImageLoaded(false);
      if (hasVariants) {
        const inCartVariant = product.Varient.find((v) =>
          cartItems.some((item) => item.variantId === v._id),
        );
        setSelectedVariant(inCartVariant || product.Varient[0]);
      } else {
        setSelectedVariant(null);
      }
      setQuantity(cartItem?.quantity || 1);
    }
  }, [isOpen, product]);

  useEffect(() => {
    if (!hasMultipleImages) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [hasMultipleImages, allImages.length]);

  const goToPrevious = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };
  const goToNext = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  const handleClose = () => onClose();

  const handleAddToCart = async () => {
    if (hasVariants && !selectedVariant) {
      toast.warning("Please select a variant first", {
        position: "top-center",
      });
      return;
    }
    setCartLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    dispatch(
      addToCart({
        product: product._id,
        product_name: product.name || product.product_name,
        image: product.ProductMainImage?.url || "",
        size: selectedVariant?.quantity || null,
        price: selectedVariant?.price_after_discount || product.price,
        quantity,
        variantId: selectedVariant?._id || null,
      }),
    );
    setCartLoading(false);
    toast.success(
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 20 }}>🛒</span>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13 }}>Added to Cart!</div>
          <div style={{ fontSize: 11, opacity: 0.8 }}>{product.name}</div>
        </div>
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
        style: {
          background: "#0b1245",
          color: "#f5f0e8",
          border: "1px solid #c8973a",
          borderRadius: 14,
        },
      },
    );
  };

  const handleRemoveFromCart = async () => {
    setRemoveLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    dispatch(
      removeItem({
        productId: product._id,
        variantId: selectedVariant?._id || null,
      }),
    );
    setRemoveLoading(false);
    toast.info(
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 20 }}>🗑️</span>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13 }}>Removed from Cart</div>
          <div style={{ fontSize: 11, opacity: 0.8 }}>{product.name}</div>
        </div>
      </div>,
      {
        position: "top-right",
        autoClose: 2500,
        style: {
          background: "#0b1245",
          color: "#f5f0e8",
          border: "1px solid rgba(200,151,58,0.4)",
          borderRadius: 14,
        },
      },
    );
  };

  const handleBuyNow = () => {
    if (hasVariants && !selectedVariant) {
      toast.warning("Please select a variant first", {
        position: "top-center",
      });
      return;
    }
    handleAddToCart();
    navigate("/cart");
  };

  if (!isOpen || !product) return null;

  const mainImage = allImages[currentIndex] || "/placeholder-spice.jpg";
  const displayPrice = selectedVariant?.price_after_discount || product.price;
  const originalPrice = selectedVariant?.price || product.originalPrice;
  const discountPct =
    originalPrice && displayPrice
      ? Math.round(((originalPrice - displayPrice) / originalPrice) * 100)
      : 0;

  return (
    <>
      <div className="pm-overlay" onClick={handleClose} />

      <div className="pm-container">
        <div className="pm-modal" onClick={(e) => e.stopPropagation()}>
          {/* Close */}
          <button className="pm-close" onClick={handleClose}>
            <X size={17} strokeWidth={2.5} />
          </button>

          <div className="pm-grid">
            {/* ── LEFT: Images ── */}
            <div className="pm-images">
              <div className="pm-main-img-wrap">
                <img
                  src={mainImage}
                  alt={product.name}
                  onLoad={() => setImageLoaded(true)}
                  className={`pm-main-img ${imageLoaded ? "" : "loading"}`}
                />

                {!imageLoaded && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Package
                      size={38}
                      color="rgba(200,151,58,0.35)"
                      strokeWidth={1}
                    />
                  </div>
                )}

                {product.isNew && (
                  <span className="pm-badge-new">
                    <Sparkles size={11} /> New Arrival
                  </span>
                )}
                {discountPct > 0 && (
                  <span className="pm-badge-discount">-{discountPct}%</span>
                )}

                {hasMultipleImages && (
                  <>
                    <button
                      onClick={goToPrevious}
                      className="pm-img-arrow pm-img-arrow--prev"
                    >
                      <ChevronLeft size={17} />
                    </button>
                    <button
                      onClick={goToNext}
                      className="pm-img-arrow pm-img-arrow--next"
                    >
                      <ChevronRight size={17} />
                    </button>
                  </>
                )}

                {hasMultipleImages && (
                  <div className="pm-dots">
                    {allImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`pm-dot ${idx === currentIndex ? "active" : ""}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {hasMultipleImages && (
                <div className="pm-thumbs">
                  {allImages.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`pm-thumb ${idx === currentIndex ? "active" : ""}`}
                    >
                      <img src={imgUrl} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── RIGHT: Details ── */}
            <div className="pm-details">
              <h2 className="pm-product-name">{product.name}</h2>

              {/* Stars */}
              <div className="pm-stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    fill={i < 4 ? "#c8973a" : "none"}
                    color="#c8973a"
                    strokeWidth={1.5}
                  />
                ))}
                <span className="pm-stars-text">
                  4.0 <span style={{ opacity: 0.6 }}>(38 reviews)</span>
                </span>
              </div>

              {/* Price */}
              <div className="pm-price-row">
                <span className="pm-price-main">
                  ₹{displayPrice?.toFixed(2) || "—"}
                </span>
                {originalPrice && originalPrice > displayPrice && (
                  <span className="pm-price-orig">
                    ₹{originalPrice?.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="pm-description">
                {product.description ||
                  "Premium quality — carefully sourced and hand-selected for exceptional taste and purity."}
              </p>

              <div className="pm-divider" />

              {/* Variants */}
              {hasVariants && (
                <div style={{ marginBottom: 18 }}>
                  <label className="pm-variant-label">Select Variant</label>
                  <div className="pm-variants">
                    {product.Varient.map((variant) => (
                      <button
                        key={variant._id}
                        onClick={() => setSelectedVariant(variant)}
                        className={`pm-variant-btn ${selectedVariant?._id === variant._id ? "active" : ""}`}
                      >
                        {variant.quantity || variant.name}
                        {" · "}
                        <span className="pm-variant-price">
                          ₹{variant.price_after_discount || variant.price}
                        </span>
                        {variant.discount_percentage > 0 && (
                          <span
                            style={{
                              marginLeft: 4,
                              fontSize: 11,
                              opacity: 0.75,
                            }}
                          >
                            (-{variant.discount_percentage}%)
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="pm-qty-row">
                <span className="pm-qty-label">Qty</span>
                <div className="pm-qty-ctrl">
                  <button
                    className="pm-qty-btn"
                    disabled={quantity <= 1}
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    −
                  </button>
                  <span className="pm-qty-val">{quantity}</span>
                  <button
                    className="pm-qty-btn"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </button>
                </div>

                {isInCart && (
                  <div className="pm-incart-tag">
                    <Check size={12} strokeWidth={3} /> In Cart
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="pm-cta-stack">
                {isInCart ? (
                  <button
                    onClick={handleRemoveFromCart}
                    disabled={removeLoading}
                    className="pm-cta-btn pm-cta-btn--remove"
                  >
                    {removeLoading ? (
                      <>
                        <span
                          className="pc-spinner"
                          style={{ borderTopColor: "#fca5a5" }}
                        />
                        Removing...
                      </>
                    ) : (
                      <>
                        <Trash2 size={17} strokeWidth={2} /> Remove from Cart
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    disabled={cartLoading}
                    className="pm-cta-btn pm-cta-btn--add"
                  >
                    {cartLoading ? (
                      <>
                        <span
                          className="pc-spinner"
                          style={{
                            borderColor: "rgba(26,18,8,0.3)",
                            borderTopColor: "#1a1208",
                          }}
                        />
                        Adding to Cart...
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={17} strokeWidth={2} /> Add to Cart
                      </>
                    )}
                  </button>
                )}

                <button
                  onClick={() => navigate(`/product-page/${product._id}`)}
                  className="pm-cta-btn pm-cta-btn--view"
                >
                  <Eye size={16} strokeWidth={1.8} /> View Full Product
                </button>
              </div>

              {/* Trust badges */}
              <div className="pm-trust">
                {[
                  "🚚 Free shipping ₹999+",
                  "📦 2–4 day delivery",
                  "🔒 Secure checkout",
                ].map((b) => (
                  <span key={b} className="pm-trust-badge">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
