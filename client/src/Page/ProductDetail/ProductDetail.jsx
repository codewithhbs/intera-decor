"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Star,
  Shield,
  Truck,
  RotateCcw,
  Check,
  Trash2,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProduct,
  setSelectedImage,
  setSelectedVariant,
  incrementQuantity,
  decrementQuantity,
  resetProductState,
} from "../store/slices/productSlice";
import { addToCart, removeItem } from "../store/slices/cartSlice";
import { fetchUserDetails } from "../store/slices/userSlice";
import { API } from "../../constant/api";
import { toast } from "react-toastify";
import "./ProductDetail.css";

/* ── Loading ── */
const LoadingSkeleton = () => (
  <div className="pd-loading">
    <div className="pd-loading-inner">
      <div className="pd-spinner-wrap">
        <div className="pd-spinner-ping" />
        <div className="pd-spinner-ring" />
      </div>
      <p className="pd-loading-text">Loading…</p>
    </div>
  </div>
);

/* ── Related Card ── */
const RelatedCard = ({ item }) => {
  const price =
    item.Varient?.[0]?.price_after_discount ||
    item.Varient?.[0]?.price ||
    item.afterDiscountPrice ||
    item.price;
  const original =
    item.Varient?.[0]?.discount_percentage > 0
      ? item.Varient?.[0]?.price
      : null;
  const discount = item.Varient?.[0]?.discount_percentage || 0;

  return (
    <div className="pd-rel-card">
      <div className="pd-rel-img-wrap">
        <img
          src={item.ProductMainImage?.url || "/placeholder.svg"}
          alt={item.product_name}
          className="pd-rel-img"
        />
        {discount > 0 && (
          <span className="pd-rel-discount-badge">-{discount}%</span>
        )}
      </div>

      <div className="pd-rel-info">
        {item.category?.name && (
          <span className="pd-rel-cat">{item.category.name}</span>
        )}
        <p className="pd-rel-name">{item.product_name}</p>

        <div className="pd-rel-stars">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={11}
              fill={i < 4 ? "#c9a84c" : "none"}
              color="#c9a84c"
            />
          ))}
        </div>

        <div className="pd-rel-price-row">
          <span className="pd-rel-price">₹{price}</span>
          {original && (
            <span className="pd-rel-price-original">₹{original}</span>
          )}
        </div>
      </div>

      <Link to={`/product-page/${item._id}`} className="pd-rel-btn">
        VIEW DETAILS
      </Link>
    </div>
  );
};

/* ── Main Component ── */
const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { product, loading, selectedImage, selectedVariant, quantity } =
    useSelector((s) => s.product);
  const { cartItems } = useSelector((s) => s.cart);

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("description");
  const [imgLoaded, setImgLoaded] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);

  /* ── URL variant sync ── */
  useEffect(() => {
    if (!product?.Varient?.length) return;
    const params = new URLSearchParams(location.search);
    const variantIdFromUrl = params.get("varient-select");
    if (variantIdFromUrl) {
      const variantIndex = product.Varient.findIndex(
        (v) => v._id === variantIdFromUrl,
      );
      if (variantIndex !== -1) {
        dispatch(setSelectedVariant(variantIndex));
        setTimeout(() => {
          document
            .querySelector("[data-variant-section]")
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 800);
      }
    }
  }, [product, location.search, dispatch]);

  useEffect(() => {
    const token = sessionStorage.getItem("token_login");
    if (token) dispatch(fetchUserDetails());
  }, [dispatch]);

  useEffect(() => {
    dispatch(resetProductState());
    dispatch(fetchProduct(id));
    setImgLoaded(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch, id]);

  useEffect(() => {
    if (product?._id) {
      fetch(`${API}/get-product`)
        .then((r) => r.json())
        .then((data) =>
          setRelatedProducts(
            (data.products || [])
              .filter((p) => p._id !== product._id)
              .slice(0, 4),
          ),
        )
        .catch(() => setRelatedProducts([]));
    }
  }, [product]);

  /* ── Cart logic ── */
  const currentVariant = product?.Varient?.[selectedVariant];

  const cartItem = useMemo(() => {
    if (!product?._id || !currentVariant?._id) return null;
    return (
      cartItems?.find(
        (item) =>
          String(item.product) === String(product._id) &&
          String(item.variantId) === String(currentVariant._id),
      ) ?? null
    );
  }, [cartItems, product?._id, currentVariant?._id]);

  const isInCart = !!cartItem;

  const handleAddToCart = async () => {
    if (!currentVariant) {
      toast.warning("Please select a size first", { position: "top-center" });
      return;
    }
    setAddLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    dispatch(
      addToCart({
        product: product._id,
        product_name: product.product_name,
        image: product.ProductMainImage?.url || "",
        size: currentVariant.quantity,
        price: currentVariant.price_after_discount,
        quantity,
        variantId: currentVariant._id,
      }),
    );
    setAddLoading(false);
    toast.success(
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <ShoppingCart size={18} />
        <div>
          <div style={{ fontWeight: 700 }}>Added to Cart</div>
          <div style={{ fontSize: "0.8rem", opacity: 0.8 }}>
            {product.product_name} — {currentVariant.quantity}
          </div>
        </div>
      </div>,
      { position: "top-right", autoClose: 2200 },
    );
  };

  const handleRemoveFromCart = async () => {
    if (!cartItem) return;
    setRemoveLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    dispatch(
      removeItem({ productId: product._id, variantId: currentVariant._id }),
    );
    setRemoveLoading(false);
    toast.info(
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Trash2 size={18} />
        <div>
          <div style={{ fontWeight: 700 }}>Removed from Cart</div>
          <div style={{ fontSize: "0.8rem", opacity: 0.8 }}>
            {product.product_name}
          </div>
        </div>
      </div>,
      { position: "top-right", autoClose: 2000 },
    );
  };

  const handleBuyNow = () => {
    if (!currentVariant) {
      toast.warning("Please select a size first", { position: "top-center" });
      return;
    }
    handleAddToCart();
    setTimeout(() => navigate("/cart"), 800);
  };

  const images = [
    product?.ProductMainImage?.url,
    product?.SecondImage?.url,
    product?.ThirdImage?.url,
    product?.FourthImage?.url,
    product?.FifthImage?.url,
  ].filter(Boolean);

  if (loading || !product) return <LoadingSkeleton />;

  const discountAmt =
    currentVariant && currentVariant.price > currentVariant.price_after_discount
      ? Math.round(currentVariant.price - currentVariant.price_after_discount)
      : null;

  return (
    <div className="pd-root">
      <div className="pd-bg" />

      <div className="pd-container">
        {/* Breadcrumb */}
        <nav className="pd-breadcrumb">
          <Link to="/">Home</Link>
          <span className="pd-breadcrumb-sep">›</span>
          <Link to="/shop">Shop</Link>
          {product?.category?.name && (
            <>
              <span className="pd-breadcrumb-sep">›</span>
              <span className="pd-breadcrumb-current">
                {product.category.name}
              </span>
            </>
          )}
        </nav>

        {/* ── Main Card ── */}
        <div className="pd-card">
          {/* ── Image Column ── */}
          <div className="pd-image-col">
            {/* Main Image */}
            <div className="pd-main-img-wrap">
              {images[selectedImage] && (
                <img
                  src={images[selectedImage]}
                  alt={product.product_name}
                  onLoad={() => setImgLoaded(true)}
                  className="pd-main-img"
                  style={{ opacity: imgLoaded ? 1 : 0 }}
                />
              )}

              {/* Nav Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    className="pd-nav-btn left"
                    onClick={() =>
                      dispatch(
                        setSelectedImage(
                          selectedImage > 0
                            ? selectedImage - 1
                            : images.length - 1,
                        ),
                      )
                    }
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    className="pd-nav-btn right"
                    onClick={() =>
                      dispatch(
                        setSelectedImage(
                          selectedImage < images.length - 1
                            ? selectedImage + 1
                            : 0,
                        ),
                      )
                    }
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}

              {currentVariant?.discount_percentage > 0 && (
                <span className="pd-discount-badge">
                  -{currentVariant.discount_percentage}% OFF
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="pd-thumbs">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`pd-thumb ${idx === selectedImage ? "active" : ""}`}
                    onClick={() => dispatch(setSelectedImage(idx))}
                  >
                    <img src={img} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Info Column ── */}
          <div className="pd-info-col">
            {/* Category + Title */}
            <div>
              {product.category?.name && (
                <span className="pd-category">{product.category.name}</span>
              )}
              <h1 className="pd-title">{product.product_name}</h1>
              {product.sku && <p className="pd-sku">SKU: {product.sku}</p>}

              <div className="pd-stars">
                <div className="pd-stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < 4 ? "#c9a84c" : "none"}
                      color="#c9a84c"
                    />
                  ))}
                </div>
                <span className="pd-stars-count">
                  ( {product.reviews?.length || 0} reviews )
                </span>
                {product.stock > 0 && (
                  <div className="pd-instock">
                    <div className="pd-instock-dot" />
                    In Stock
                  </div>
                )}
              </div>
            </div>

            {/* Price */}
            <div className="pd-price-row">
              {currentVariant ? (
                <>
                  <span className="pd-price-main">
                    ₹
                    {(
                      currentVariant.price_after_discount ||
                      currentVariant.price
                    ).toFixed(0)}
                  </span>
                  {currentVariant.price >
                    currentVariant.price_after_discount && (
                    <>
                      <span className="pd-price-original">
                        ₹{currentVariant.price.toFixed(0)}
                      </span>
                      <span className="pd-price-save">Save ₹{discountAmt}</span>
                    </>
                  )}
                </>
              ) : (
                <span className="pd-price-empty">Select size to see price</span>
              )}
            </div>

            {/* Variants */}
            {product.isVarient && product.Varient?.length > 0 && (
              <div data-variant-section>
                <span className="pd-label">Size</span>
                <div className="pd-variants">
                  {product.Varient.map((v, i) => (
                    <button
                      key={v._id}
                      className={`pd-variant-btn ${selectedVariant === i ? "active" : ""}`}
                      onClick={() => dispatch(setSelectedVariant(i))}
                    >
                      {v.quantity}
                      {v.discount_percentage > 0 && (
                        <span className="pd-variant-discount">
                          -{v.discount_percentage}%
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <span className="pd-label">Quantity</span>
              <div className="pd-qty-wrap">
                <button
                  className="pd-qty-btn"
                  onClick={() => dispatch(decrementQuantity())}
                  disabled={quantity <= 1}
                >
                  <Minus size={15} />
                </button>
                <span className="pd-qty-num">{quantity}</span>
                <button
                  className="pd-qty-btn"
                  onClick={() => dispatch(incrementQuantity())}
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pd-actions">
              {isInCart ? (
                <>
                  <button
                    className="pd-btn-danger"
                    onClick={handleRemoveFromCart}
                    disabled={removeLoading}
                  >
                    {removeLoading ? (
                      <span className="pd-btn-spinner-dark" />
                    ) : (
                      <Trash2 size={16} />
                    )}
                    {removeLoading ? "Removing..." : "Remove"}
                  </button>

                  <Link to="/cart" className="pd-btn-incart">
                    <Check size={16} />
                    Go to Cart
                  </Link>
                </>
              ) : (
                <>
                  <button
                    className="pd-btn-primary"
                    onClick={handleAddToCart}
                    disabled={addLoading || !currentVariant}
                  >
                    {addLoading ? (
                      <span className="pd-btn-spinner" />
                    ) : (
                      <ShoppingCart size={17} />
                    )}
                    {addLoading ? "Adding..." : "Add to Cart"}
                  </button>

                  <button
                    className="pd-btn-secondary"
                    onClick={handleBuyNow}
                    disabled={addLoading || !currentVariant}
                  >
                    Buy Now
                  </button>
                </>
              )}
            </div>

            {/* Trust Strip */}
            <div className="pd-trust">
              <div className="pd-trust-item">
                <Shield className="pd-trust-icon" size={16} />
                Secure Payment
              </div>
              <div className="pd-trust-item">
                <RotateCcw className="pd-trust-icon" size={16} />
                7-Day Returns
              </div>
              <div className="pd-trust-item">
                <Truck className="pd-trust-icon" size={16} />
                Fast Delivery
              </div>
            </div>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="pd-tabs">
          <div className="pd-tab-bar">
            {["description", "details"].map((tab) => (
              <button
                key={tab}
                className={`pd-tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "description" ? "Description" : "Specifications"}
              </button>
            ))}
          </div>

          <div className="pd-tab-content">
            {activeTab === "description" && (
              <div>
                <p className="pd-desc-text">{product.product_description}</p>
                {product.extra_description &&
                  product.extra_description !== product.product_description && (
                    <p className="pd-desc-text" style={{ marginTop: 16 }}>
                      {product.extra_description}
                    </p>
                  )}
              </div>
            )}

            {activeTab === "details" && (
              <div className="pd-details-grid">
                {[
                  { label: "Category", value: product.category?.name || "—" },
                  {
                    label: "Stock",
                    value: product.stock ? `${product.stock} units` : "—",
                  },
                  { label: "Tags", value: product.tag || "—" },
                  {
                    label: "Variants",
                    value: product.Varient?.length
                      ? `${product.Varient.length} available`
                      : "Single size",
                  },
                ].map((item) => (
                  <div key={item.label} className="pd-detail-item">
                    <div className="pd-detail-label">{item.label}</div>
                    <div className="pd-detail-value">{item.value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Related Products ── */}
        {relatedProducts.length > 0 && (
          <div className="pd-related">
            <h2 className="pd-related-title">You May Also Like</h2>
            <div className="pd-related-grid">
              {relatedProducts.map((item) => (
                <RelatedCard key={item._id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
