"use client"

import React, { useEffect, useState } from "react"
import { X, Plus, Minus, ShoppingBag, Trash2, Tag, ChevronRight, Leaf, ArrowRight, Shield, Truck, RotateCcw } from "lucide-react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { useSelector, useDispatch } from "react-redux"
import {
  updateQuantity, removeItem, moveToCart,
  setPromoCode, removeCoupon, loadExistingCoupon, applyPromoCode,
} from "../store/slices/cartSlice"
import { fetchUserDetails } from "../store/slices/userSlice"
import { findSettings } from "../../utils/Api"

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price || 0)
}

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`

/* ── Font loader ── */
const FontLoader = () => {
  useEffect(() => {
    if (document.getElementById("cart-fonts")) return
    const link = document.createElement("link")
    link.id = "cart-fonts"
    link.rel = "stylesheet"
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&family=Cormorant+Garamond:ital,wght@1,300;1,400&display=swap"
    document.head.appendChild(link)
  }, [])
  return null
}

/* ── Qty button ── */
const QtyBtn = ({ onClick, children }) => {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200"
      style={{
        border: `1.5px solid ${hov ? "rgba(200,151,58,0.5)" : "rgba(200,151,58,0.2)"}`,
        background: hov ? "rgba(200,151,58,0.08)" : "transparent",
        color: hov ? "#C8973A" : "rgba(42,31,20,0.5)",
      }}
    >
      {children}
    </button>
  )
}

/* ── Single cart row ── */
const CartRow = ({ item, onQty, onRemove }) => {
  const [removing, setRemoving] = useState(false)

  const handleRemove = () => {
    setRemoving(true)
    setTimeout(() => onRemove(item.product), 300)
  }

  return (
    <div
      className="flex gap-4 py-5 transition-all duration-300"
      style={{
        borderBottom: "1px solid rgba(200,151,58,0.1)",
        opacity: removing ? 0 : 1,
        transform: removing ? "translateX(-10px)" : "translateX(0)",
      }}
    >
      {/* Product image */}
      <div
        className="flex-shrink-0 rounded-xl overflow-hidden"
        style={{ width: 80, height: 80, background: "linear-gradient(135deg,#F5EDD8,#EDE0C4)", border: "1px solid rgba(200,151,58,0.15)" }}
      >
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.product_name}
          className="w-full h-full object-cover"
          onError={e => { e.target.src = "/placeholder.svg" }}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(0.88rem,2.5vw,1rem)", fontWeight: 600, color: "#2A1F14", lineHeight: 1.3 }}>
          {item.product_name}
        </h3>
        {item.size && (
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", color: "rgba(42,31,20,0.45)", letterSpacing: "0.04em" }}>
            Size: <span style={{ color: "#C8973A" }}>{item.size}</span>
          </p>
        )}

        <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
          {/* Qty control */}
          <div className="flex items-center gap-2">
            <QtyBtn onClick={() => onQty(item.product, item.quantity - 1)}><Minus size={12} /></QtyBtn>
            <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", fontWeight: 700, color: "#2A1F14", minWidth: 24, textAlign: "center" }}>
              {item.quantity}
            </span>
            <QtyBtn onClick={() => onQty(item.product, item.quantity + 1)}><Plus size={12} /></QtyBtn>
          </div>

          {/* Price */}
         <div className="text-right">
  <p
    style={{
      fontFamily: "'Playfair Display',serif",
      fontSize: "1.1rem",
      fontWeight: 700,
      color: "#2A1F14",
      lineHeight: 1
    }}
  >
  ₹{formatPrice(item.price * item.quantity)}
  </p>

  <p
    style={{
      fontFamily: "'DM Sans',sans-serif",
      fontSize: "0.65rem",
      color: "rgba(42,31,20,0.38)",
      marginTop: 2
    }}
  >
   ₹{formatPrice(item.price)} × {item.quantity}
  </p>
</div>
        </div>

        {/* Remove */}
        <button
          onClick={handleRemove}
          className="flex items-center gap-1 mt-1 transition-colors duration-200 w-fit"
          style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.65rem", color: "rgba(42,31,20,0.35)", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.04em" }}
          onMouseEnter={e => e.currentTarget.style.color = "#B94040"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(42,31,20,0.35)"}
        >
          <Trash2 size={11} /> Remove
        </button>
      </div>
    </div>
  )
}

/* ── Main Cart ── */
const Cart = () => {

  const [setting, setSetting] = useState(null)
  const dispatch = useDispatch()
  const { cartItems, savedItems, promoCode, promoApplied, discountAmount, couponError, loading } = useSelector(s => s.cart)

  const load = async () => {
    try {
      const res = await findSettings()
      if (res) {
        setSetting(res)
      }
    } catch (error) {
      console.log(error)

    }
  }
  useEffect(() => {
    const token = sessionStorage.getItem("token_login")
    load()
    if (token) dispatch(fetchUserDetails())
    dispatch(loadExistingCoupon())
  }, [dispatch])
const subtotal = cartItems.reduce(
  (t, i) => t + Number(i.price) * Number(i.quantity),
  0
);

const shipping = setting?.shippingEnabled
  ? subtotal >= Number(setting?.freeShippingThreshold || 0)
    ? 0
    : Number(setting?.shippingCost || 0)
  : 0;

const taxRate = Number(setting?.taxRate || 0);

const tax = taxRate > 0
  ? ((subtotal + shipping) * taxRate) / 100
  : 0;

const total = promoApplied
  ? Math.max(subtotal - discountAmount, 0) + shipping + tax
  : subtotal + shipping + tax;
  const handleCheckout = () => {
    const token = sessionStorage.getItem("token_login")

    if (cartItems.length === 0) { toast.error("Your cart is empty!"); return }
    window.location.href = "/checkout"
  }

  return (
    <>
      <FontLoader />
      <style>{`
        @keyframes cart-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cart-enter { animation: cart-fade-up 0.55s cubic-bezier(0.22,1,0.36,1) both; }
        .cart-d1 { animation-delay: 0.05s; }
        .cart-d2 { animation-delay: 0.12s; }
        .cart-d3 { animation-delay: 0.2s; }
      `}</style>

      <div
        className="min-h-screen"
        style={{ background: "linear-gradient(160deg,#FAF6EF 0%,#F2E8D5 55%,#FAF6EF 100%)" }}
      >
        {/* Grain */}
        <div className="fixed inset-0 pointer-events-none opacity-20 z-0"
          style={{ backgroundImage: GRAIN, backgroundSize: "180px" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">

          {/* ── Page title ── */}
          <div className="mb-8 cart-enter">
            <div className="flex items-center gap-3 mb-1">
              <div className="h-px w-8" style={{ background: "linear-gradient(90deg,transparent,#C8973A)" }} />
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.58rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C8973A", display: "flex", alignItems: "center", gap: 5 }}>
                <Leaf size={9} /> Your Order
              </span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, color: "#2A1F14", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Shopping{" "}
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontWeight: 400, background: "linear-gradient(90deg,#C8973A,#A67828)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Cart
              </span>
              {cartItems.length > 0 && (
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.85rem", fontWeight: 400, color: "rgba(42,31,20,0.4)", marginLeft: 12, verticalAlign: "middle" }}>
                  ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
                </span>
              )}
            </h1>
          </div>

          {/* ── Empty state ── */}
          {cartItems.length === 0 ? (
            <div className="cart-enter flex flex-col items-center gap-5 py-20 text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "rgba(200,151,58,0.08)", border: "1.5px solid rgba(200,151,58,0.2)" }}>
                <ShoppingBag size={28} style={{ color: "rgba(200,151,58,0.5)" }} />
              </div>
              <div>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 600, color: "#2A1F14", marginBottom: 8 }}>
                  Your cart is empty
                </h2>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.88rem", color: "rgba(42,31,20,0.45)", fontWeight: 300, lineHeight: 1.7 }}>
                  Looks like you haven't added any spices or teas yet.
                </p>
              </div>
              <Link to="/shop"
                className="flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all duration-300"
                style={{
                  fontFamily: "'DM Sans',sans-serif", fontSize: "0.82rem", letterSpacing: "0.05em",
                  background: "linear-gradient(135deg,#C8973A,#A67828)", color: "#FAF6EF", textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(200,151,58,0.3)",
                }}>
                Start Shopping <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

              {/* ── LEFT: Cart items (2/3) ── */}
              <div className="lg:col-span-2 flex flex-col gap-4">

                {/* Items card */}
                <div className="cart-enter cart-d1 rounded-2xl overflow-hidden"
                  style={{ background: "rgba(250,246,239,0.9)", border: "1px solid rgba(200,151,58,0.15)", backdropFilter: "blur(12px)", boxShadow: "0 4px 24px rgba(42,31,20,0.07)" }}>
                  <div className="px-5 sm:px-6 pt-5 pb-3 flex items-center justify-between"
                    style={{ borderBottom: "1px solid rgba(200,151,58,0.1)" }}>
                    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", fontWeight: 600, color: "#2A1F14" }}>
                      Cart Items
                    </h2>
                    <Link to="/shop" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", color: "#C8973A", textDecoration: "none", letterSpacing: "0.06em", display: "flex", alignItems: "center", gap: 4 }}>
                      Continue Shopping <ChevronRight size={12} />
                    </Link>
                  </div>
                  <div className="px-5 sm:px-6">
                    {cartItems.map(item => (
                      <CartRow
                        key={`${item.product}_${item.variantId}`}
                        item={item}
                        onQty={(id, qty) =>
                          dispatch(updateQuantity({ id, newQuantity: qty }))
                        }
                        onRemove={() =>
                          dispatch(
                            removeItem({
                              productId: item.product,
                              variantId: item.variantId,
                            })
                          )
                        }
                      />
                    ))}
                  </div>
                </div>

                {/* Saved items */}
                {savedItems.length > 0 && (
                  <div className="cart-enter cart-d2 rounded-2xl overflow-hidden"
                    style={{ background: "rgba(250,246,239,0.9)", border: "1px solid rgba(200,151,58,0.15)", backdropFilter: "blur(12px)", boxShadow: "0 4px 24px rgba(42,31,20,0.07)" }}>
                    <div className="px-5 sm:px-6 pt-5 pb-3" style={{ borderBottom: "1px solid rgba(200,151,58,0.1)" }}>
                      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", fontWeight: 600, color: "#2A1F14" }}>
                        Saved for Later ({savedItems.length})
                      </h2>
                    </div>
                    <div className="px-5 sm:px-6 py-4 flex flex-col gap-4">
                      {savedItems.map(item => (
                        <div key={item.product} className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden"
                            style={{ background: "linear-gradient(135deg,#F5EDD8,#EDE0C4)", border: "1px solid rgba(200,151,58,0.15)" }}>
                            <img src={item.image || "/placeholder.svg"} alt={item.product_name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.88rem", fontWeight: 600, color: "#2A1F14", lineHeight: 1.3 }}>
                              {item.product_name}
                            </p>
                            <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.85rem", fontWeight: 700, color: "#C8973A", marginTop: 2 }}>
                            ₹{formatPrice(item.price)}
                            </p>
                          </div>
                          <button onClick={() => dispatch(moveToCart(item))}
                            className="px-4 py-1.5 rounded-full text-sm transition-all duration-200"
                            style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", background: "linear-gradient(135deg,#2A1F14,#3D2B18)", color: "#FAF6EF", border: "none", cursor: "pointer" }}>
                            Add to Cart
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trust row */}
                <div className="cart-enter cart-d2 grid grid-cols-3 gap-3">
                  {[
                    { icon: Truck, label: "Free Shipping", sub: `on orders ₹${setting?.freeShippingThreshold}+` },
                    { icon: RotateCcw, label: "Easy Returns", sub: "7-day policy" },
                    { icon: Shield, label: "100% Natural", sub: "quality assured" },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div key={label} className="flex flex-col items-center text-center gap-1.5 py-3.5 px-2 rounded-xl"
                      style={{ background: "rgba(200,151,58,0.05)", border: "1px solid rgba(200,151,58,0.12)" }}>
                      <Icon size={16} style={{ color: "#C8973A" }} />
                      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", fontWeight: 500, color: "#2A1F14" }}>{label}</p>
                      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.58rem", color: "rgba(42,31,20,0.4)" }}>{sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── RIGHT: Order summary (1/3) ── */}
              <div className="lg:col-span-1">
                <div className="cart-enter cart-d3 rounded-2xl overflow-hidden sticky top-6"
                  style={{ background: "rgba(250,246,239,0.95)", border: "1px solid rgba(200,151,58,0.18)", backdropFilter: "blur(16px)", boxShadow: "0 8px 40px rgba(42,31,20,0.1)" }}>

                  {/* Header */}
                  <div className="px-5 sm:px-6 pt-5 pb-4" style={{ borderBottom: "1px solid rgba(200,151,58,0.1)" }}>
                    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", fontWeight: 600, color: "#2A1F14" }}>
                      Order Summary
                    </h2>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col gap-5">

                    {/* Promo code */}
                    <div>
                      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8973A", marginBottom: 8, display: "flex", alignItems: "center", gap: 5 }}>
                        <Tag size={11} /> Promo Code
                      </p>

                      {promoApplied ? (
                        <div className="flex items-center justify-between px-3 py-2.5 rounded-xl"
                          style={{ background: "rgba(78,104,69,0.08)", border: "1px solid rgba(78,104,69,0.25)" }}>
                          <div>
                            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.78rem", fontWeight: 500, color: "#4E6845" }}>{promoCode}</p>
                            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.62rem", color: "rgba(78,104,69,0.7)" }}>Coupon applied ✓</p>
                          </div>
                          <button onClick={() => dispatch(removeCoupon())} style={{ color: "rgba(42,31,20,0.4)", background: "none", border: "none", cursor: "pointer" }}>
                            <X size={14} />
                          </button>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={promoCode}
                            onChange={e => dispatch(setPromoCode(e.target.value))}
                            placeholder="Enter code…"
                            className="flex-1 px-3 py-2.5 rounded-xl focus:outline-none"
                            style={{
                              fontFamily: "'DM Sans',sans-serif", fontSize: "0.78rem",
                              background: "rgba(200,151,58,0.05)", border: "1.5px solid rgba(200,151,58,0.2)",
                              color: "#2A1F14",
                            }}
                            onFocus={e => e.target.style.borderColor = "rgba(200,151,58,0.5)"}
                            onBlur={e => e.target.style.borderColor = "rgba(200,151,58,0.2)"}
                          />
                          <button
                            onClick={() => dispatch(applyPromoCode({ code: promoCode, orderAmount: subtotal }))}
                            disabled={loading || !promoCode.trim()}
                            className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                            style={{
                              fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem",
                              background: promoCode.trim() ? "linear-gradient(135deg,#C8973A,#A67828)" : "rgba(200,151,58,0.1)",
                              color: promoCode.trim() ? "#FAF6EF" : "rgba(42,31,20,0.3)",
                              border: "none", cursor: promoCode.trim() ? "pointer" : "not-allowed",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {loading ? "…" : "Apply"}
                          </button>
                        </div>
                      )}
                      {couponError && (
                        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", color: "#B94040", marginTop: 6 }}>{couponError}</p>
                      )}
                    </div>

                    {/* Free shipping nudge */}
                    {subtotal < setting?.freeShippingThreshold && (
                      <div className="px-3 py-2.5 rounded-xl"
                        style={{ background: "rgba(200,151,58,0.06)", border: "1px solid rgba(200,151,58,0.2)" }}>
                        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", color: "#8A6040", lineHeight: 1.5 }}>
                          🚚 Add <strong style={{ color: "#C8973A" }}>₹{formatPrice(setting?.freeShippingThreshold - subtotal)}</strong> more for <strong>FREE delivery!</strong>
                        </p>
                        {/* Progress bar */}
                        <div className="mt-2 h-1 rounded-full overflow-hidden" style={{ background: "rgba(200,151,58,0.15)" }}>
                          <div className="h-full rounded-full" style={{ width: `${Math.min((subtotal / setting?.freeShippingThreshold) * 100, 100)}%`, background: "linear-gradient(90deg,#C8973A,#A67828)", transition: "width 0.5s ease" }} />
                        </div>
                      </div>
                    )}

                    {/* Price breakdown */}
                    <div className="flex flex-col gap-3">
                      {[
                        { label: `Subtotal (${cartItems.length} items)`, value: `₹${formatPrice(subtotal)}`, muted: true },

                        { label: "Shipping", value: shipping === 0 ? "Free" : `₹${shipping}`, muted: true, green: shipping === 0 },
                                                { label: `GST (${setting?.taxRate}%)`, value: `₹${formatPrice(tax)}`, muted: true },

                        ...(promoApplied ? [{ label: `Discount (${promoCode})`, value: `-₹${formatPrice(discountAmount)}`, muted: false, discount: true }] : []),
                      ].map(row => (
                        <div key={row.label} className="flex items-center justify-between">
                          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.82rem", color: "rgba(42,31,20,0.55)", fontWeight: 300 }}>
                            {row.label}
                          </span>
                          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.82rem", fontWeight: 400, color: row.discount ? "#4E6845" : row.green ? "#4E6845" : "#2A1F14" }}>
                            {row.value}
                          </span>
                        </div>
                      ))}

                      {/* Total */}
                      <div className="pt-3 flex items-center justify-between" style={{ borderTop: "1px solid rgba(200,151,58,0.18)" }}>
                        <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", fontWeight: 600, color: "#2A1F14" }}>Total</span>
                        <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 800, color: "#2A1F14", letterSpacing: "-0.01em" }}>
                         ₹{formatPrice(total)}
                        </span>
                      </div>
                      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.6rem", color: "rgba(42,31,20,0.35)", textAlign: "right", marginTop: -4 }}>
                        Inclusive of all taxes
                      </p>
                    </div>

                    {/* Checkout */}
                    <button
                      onClick={handleCheckout}
                      className="w-full py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300"
                      style={{
                        fontFamily: "'DM Sans',sans-serif", fontSize: "0.85rem", letterSpacing: "0.05em",
                        background: "linear-gradient(135deg,#C8973A,#A67828)",
                        color: "#FAF6EF", border: "none", cursor: "pointer",
                        boxShadow: "0 4px 20px rgba(200,151,58,0.35)",
                      }}
                      onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 28px rgba(200,151,58,0.5)"}
                      onMouseLeave={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(200,151,58,0.35)"}
                    >
                      Proceed to Checkout <ChevronRight size={15} />
                    </button>

                    {/* Continue shopping */}
                    <Link to="/shop"
                      className="w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-200"
                      style={{
                        fontFamily: "'DM Sans',sans-serif", fontSize: "0.8rem", letterSpacing: "0.04em",
                        border: "1.5px solid rgba(200,151,58,0.3)", color: "#8A6040",
                        textDecoration: "none", background: "rgba(200,151,58,0.03)",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(200,151,58,0.5)"; e.currentTarget.style.color = "#C8973A" }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(200,151,58,0.3)"; e.currentTarget.style.color = "#8A6040" }}
                    >
                      Continue Shopping
                    </Link>

                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart