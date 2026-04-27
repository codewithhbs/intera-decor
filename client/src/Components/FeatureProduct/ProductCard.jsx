import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  ShoppingCart, Star, Trash2, Eye,
  ChevronLeft, ChevronRight, Package,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeItem } from '../../Page/store/slices/cartSlice';
import { toast } from 'react-toastify';
// CSS is imported in FeatureProduct.jsx (parent) — no re-import needed

const ProductCard = ({
  product,
  onQuickView,
  selectedVariants = {},
  onVariantChange = () => {},
}) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const [currentImg,    setCurrentImg]    = useState(0);
  const [animating,     setAnimating]     = useState(false);
  const [slideDir,      setSlideDir]      = useState('right');
  const [imgLoaded,     setImgLoaded]     = useState(false);
  const [cartLoading,   setCartLoading]   = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);
  const intervalRef = useRef(null);

  /* ── Images ── */
  const allImages = [
    product?.ProductMainImage?.url,
    product?.SecondImage?.url,
    product?.ThirdImage?.url,
    product?.FourthImage?.url,
  ].filter(Boolean);

  const hasMultiple = allImages.length > 1;

  /* ── Slider ── */
  const slideTo = (next, dir = 'right') => {
    if (animating || next === currentImg) return;
    setSlideDir(dir);
    setAnimating(true);
    setImgLoaded(false);
    setTimeout(() => {
      setCurrentImg(next);
      setAnimating(false);
    }, 320);
  };

  const startAuto = () => {
    clearInterval(intervalRef.current);
    if (!hasMultiple) return;
    intervalRef.current = setInterval(() => {
      setCurrentImg((prev) => {
        const next = (prev + 1) % allImages.length;
        slideTo(next, 'right');
        return prev;
      });
    }, 4000);
  };

  useEffect(() => {
    if (!hasMultiple) return;
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, [hasMultiple, allImages.length]);

  const prev = (e) => {
    e.stopPropagation();
    clearInterval(intervalRef.current);
    slideTo((currentImg - 1 + allImages.length) % allImages.length, 'left');
    startAuto();
  };

  const next = (e) => {
    e.stopPropagation();
    clearInterval(intervalRef.current);
    slideTo((currentImg + 1) % allImages.length, 'right');
    startAuto();
  };

  /* ── Variants ── */
  const hasVariants = product?.Varient?.length > 0;
  const selectedVariantId = selectedVariants[product._id];
  const selectedVariant = useMemo(() => {
    if (!hasVariants) return null;
    return (
      product.Varient.find((v) => String(v._id) === String(selectedVariantId)) ||
      product.Varient[0]
    );
  }, [hasVariants, product.Varient, selectedVariantId]);

  const cartItem = useMemo(() => {
    if (!product?._id) return null;
    return (
      cartItems?.find(
        (item) =>
          String(item.product)   === String(product._id) &&
          String(item.variantId) === String(selectedVariant?._id ?? '')
      ) ?? null
    );
  }, [cartItems, product._id, selectedVariant?._id]);

  const isInCart = !!cartItem;

  /* ── Price ── */
  const currentPrice  = selectedVariant?.price_after_discount || selectedVariant?.price || product?.afterDiscountPrice || product?.price || 0;
  const originalPrice = selectedVariant?.price || product?.price || 0;
  const discount = originalPrice > currentPrice
    ? (((originalPrice - currentPrice) / originalPrice) * 100).toFixed(0)
    : 0;

  /* ── Cart actions ── */
  const handleAddToCart = async (e) => {
    e.stopPropagation();
    if (hasVariants && !selectedVariant) {
      toast.warning("Please select a variant", { position: "top-center" });
      return;
    }
    setCartLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    dispatch(addToCart({
      product:      product._id,
      product_name: product.product_name || product.name,
      image:        product.ProductMainImage?.url || '',
      size:         selectedVariant?.quantity || null,
      price:        currentPrice,
      quantity:     1,
      variantId:    selectedVariant?._id || null,
    }));
    setCartLoading(false);
    toast.success(
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 20 }}>🛒</span>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13 }}>Added to Cart</div>
          <div style={{ fontSize: 11, opacity: 0.8 }}>
            {product.product_name}{selectedVariant?.quantity ? ` — ${selectedVariant.quantity}` : ''}
          </div>
        </div>
      </div>,
      {
        position: 'top-right', autoClose: 2200,
        style: { background: '#0b1245', color: '#f5f0e8', border: '1px solid #c8973a', borderRadius: 14 },
      }
    );
  };

  const handleRemove = async (e) => {
    e.stopPropagation();
    if (!cartItem) return;
    setRemoveLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    dispatch(removeItem({ productId: product._id, variantId: selectedVariant?._id || null }));
    setRemoveLoading(false);
    toast.info(
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 20 }}>🗑️</span>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13 }}>Removed from Cart</div>
          <div style={{ fontSize: 11, opacity: 0.8 }}>
            {product.product_name}{selectedVariant?.quantity ? ` — ${selectedVariant.quantity}` : ''}
          </div>
        </div>
      </div>,
      {
        position: 'top-right', autoClose: 2000,
        style: { background: '#0b1245', color: '#f5f0e8', border: '1px solid rgba(200,151,58,0.4)', borderRadius: 14 },
      }
    );
  };

  /* ── Slide class ── */
  const imgClass = animating
    ? (slideDir === 'right' ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full')
    : 'opacity-100 translate-x-0';

  return (
    <div className="pc-card">

      {/* ── Image ── */}
      <div className="pc-image-wrap">
        {allImages.length > 0 ? (
          <img
            src={allImages[currentImg]}
            alt={product?.product_name}
            onLoad={() => setImgLoaded(true)}
            className={`pc-image ${imgLoaded ? '' : 'loading'} ${imgClass}`}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Package size={38} color="rgba(200,151,58,0.35)" strokeWidth={1} />
          </div>
        )}

        {/* Badges */}
        <div className="pc-badges">
          {discount > 0 && <span className="pc-badge pc-badge--discount">{discount}% OFF</span>}
          {product?.isNew && !discount && <span className="pc-badge pc-badge--new">NEW</span>}
        </div>

        {/* Slider arrows */}
        {hasMultiple && (
          <>
            <button onClick={prev} className="pc-arrow pc-arrow--prev"><ChevronLeft size={15} /></button>
            <button onClick={next} className="pc-arrow pc-arrow--next"><ChevronRight size={15} /></button>
          </>
        )}

        {/* Dots */}
        {hasMultiple && (
          <div className="pc-dots">
            {allImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); slideTo(idx, idx > currentImg ? 'right' : 'left'); }}
                className={`pc-dot ${idx === currentImg ? 'active' : ''}`}
              />
            ))}
          </div>
        )}

        {/* Quick View */}
        <button
          onClick={(e) => { e.stopPropagation(); onQuickView?.(); }}
          className="pc-quick-view"
        >
          Quick View
        </button>
      </div>

      {/* ── Body ── */}
      <div className="pc-body">
        <Link
          to={`/product-page/${product._id}`}
          onClick={(e) => e.stopPropagation()}
          className="pc-name"
        >
          {product?.product_name || product?.name}
        </Link>

        {/* Stars */}
        <div className="pc-stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} fill={i < 4 ? "#c8973a" : "none"} color="#c8973a" strokeWidth={1.5} />
          ))}
          <span className="pc-stars-count">({product?.reviews?.length || 38})</span>
        </div>

        {/* Variant selector */}
        {hasVariants && (
          <select
            value={selectedVariantId || product.Varient[0]?._id || ''}
            onChange={(e) => { e.stopPropagation(); onVariantChange(product._id, e.target.value); }}
            className="pc-variant-select"
          >
            {product.Varient.map((v) => (
              <option key={v._id} value={v._id}>
                {v.quantity} — ₹{v.price_after_discount || v.price}
              </option>
            ))}
          </select>
        )}

        {/* Price */}
        <div className="pc-price-row">
          <span className="pc-price">₹{currentPrice}</span>
          {originalPrice > currentPrice && (
            <span className="pc-price-original">₹{originalPrice.toFixed(0)}</span>
          )}
          {discount > 0 && <span className="pc-price-off">{discount}% off</span>}
        </div>

        {/* Actions */}
        <div className="pc-actions">
          {isInCart ? (
            <button onClick={handleRemove} disabled={removeLoading} className="pc-btn pc-btn--remove">
              {removeLoading
                ? <><span className="pc-spinner" /> Removing…</>
                : <><Trash2 size={15} /> Remove</>}
            </button>
          ) : (
            <button onClick={handleAddToCart} disabled={cartLoading} className="pc-btn pc-btn--add">
              {cartLoading
                ? <><span className="pc-spinner" /> Adding…</>
                : <><ShoppingCart size={15} /> Add</>}
            </button>
          )}

          <Link
            to={`/product-page/${product._id}?varient-select=${selectedVariant?._id}`}
            onClick={(e) => e.stopPropagation()}
            className="pc-btn pc-btn--view"
          >
            <Eye size={15} /> View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;