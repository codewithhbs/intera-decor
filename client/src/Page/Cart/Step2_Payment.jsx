import React from "react";
import { Smartphone, Truck, CheckCircle, Zap } from "lucide-react";

const Step2_Payment = ({ onSelect, setting }) => {
  const showOnline = setting?.onlinePaymentAvailable !== false;
  const showCOD = setting?.codAvailable !== false;
  const codFee = setting?.shippingCost || 40;

  const options = [
    showOnline && {
      key: "ONLINE",
      icon: Smartphone,
      iconBg: "linear-gradient(135deg,#C8973A,#A67828)",
      title: "Online Payment",
      sub: "UPI, Net Banking, Credit / Debit Card",
      badge: { icon: Zap, label: "Instant Confirmation", color: "#C8973A" },
      borderHover: "rgba(200,151,58,0.5)",
      bgHover: "rgba(200,151,58,0.04)",
    },
    showCOD && {
      key: "COD",
      icon: Truck,
      iconBg: "linear-gradient(135deg,#4E6845,#3a5032)",
      title: "Cash on Delivery",
      sub: `Pay on delivery`,
      badge: { icon: CheckCircle, label: "Safe & Secure", color: "#4E6845" },
      borderHover: "rgba(78,104,69,0.4)",
      bgHover: "rgba(78,104,69,0.04)",
    },
  ].filter(Boolean);

  return (
    <div className="co-card">
      <div className="co-card-header">
        <div className="co-icon-wrap" style={{ background: "linear-gradient(135deg,#2A1F14,#3D2B18)" }}>
          <Smartphone size={18} style={{ color: "#C8973A" }} />
        </div>
        <div>
          <h2 className="co-card-title">Payment Method</h2>
          <p className="co-card-sub">Choose your preferred payment option</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-2">
        {options.map(opt => {
          const Icon = opt.icon;
          const BadgeIcon = opt.badge.icon;
          return (
            <button
              key={opt.key}
              onClick={() => onSelect(opt.key)}
              className="co-payment-btn group"
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = opt.borderHover;
                e.currentTarget.style.background = opt.bgHover;
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(42,31,20,0.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(200,151,58,0.15)";
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200"
                style={{ background: opt.iconBg }}>
                <Icon size={20} style={{ color: "#FAF6EF" }} />
              </div>
              <div className="flex-1 text-left">
                <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", fontWeight: 600, color: "#2A1F14" }}>
                  {opt.title}
                </p>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.78rem", color: "rgba(42,31,20,0.5)", marginTop: 2 }}>
                  {opt.sub}
                </p>
                <p className="flex items-center gap-1 mt-1.5"
                  style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.65rem", color: opt.badge.color }}>
                  <BadgeIcon size={11} /> {opt.badge.label}
                </p>
              </div>
              <div style={{ color: "rgba(200,151,58,0.4)", fontSize: "1.2rem" }}>›</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Step2_Payment;