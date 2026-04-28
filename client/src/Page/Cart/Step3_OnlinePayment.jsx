import React from "react";
import { Smartphone, Loader, Shield, Zap, CreditCard } from "lucide-react";

const Step3_OnlinePayment = ({ orderTotal, onPay, loading, setting }) => {
  const siteName = setting?.siteName || "Creative N Colourful ";

  return (
    <div className="co-card">
      <div className="co-card-header">
        <div className="co-icon-wrap" style={{ background: "linear-gradient(135deg,#C8973A,#A67828)" }}>
          <Smartphone size={18} style={{ color: "#FAF6EF" }} />
        </div>
        <div>
          <h2 className="co-card-title">Secure Online Payment</h2>
          <p className="co-card-sub">Powered by Razorpay — UPI · Cards · NetBanking</p>
        </div>
      </div>

      {/* Amount box */}
      <div className="rounded-2xl p-6 text-center my-4"
        style={{ background: "linear-gradient(135deg,rgba(200,151,58,0.06),rgba(200,151,58,0.03))", border: "1.5px solid rgba(200,151,58,0.2)" }}>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(42,31,20,0.4)", marginBottom: 6 }}>
          Amount to Pay
        </p>
        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.2rem", fontWeight: 800, color: "#2A1F14", letterSpacing: "-0.02em" }}>
          ₹{orderTotal?.toFixed(2)}
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", color: "rgba(42,31,20,0.4)", marginTop: 4 }}>
          You'll be redirected to Razorpay secure checkout
        </p>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        {[
          { icon: Shield, label: "256-bit SSL" },
          { icon: Zap, label: "Instant Confirm" },
          { icon: CreditCard, label: "All Cards" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1 py-2 rounded-xl"
            style={{ background: "rgba(200,151,58,0.04)", border: "1px solid rgba(200,151,58,0.1)" }}>
            <Icon size={14} style={{ color: "#C8973A" }} />
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.6rem", color: "rgba(42,31,20,0.5)", textAlign: "center" }}>{label}</p>
          </div>
        ))}
      </div>

      {/* Payment image */}
      {setting?.paymentImage && (
        <div className="flex justify-center mb-4">
          <img src={setting.paymentImage} alt="Payment methods" className="h-6 object-contain opacity-60"
            onError={e => e.target.style.display = "none"} />
        </div>
      )}

      <button onClick={onPay} disabled={loading} className="co-btn-gold">
        {loading
          ? <><Loader size={16} className="co-spin" /> Initiating Payment…</>
          : <>Pay ₹{orderTotal?.toFixed(2)} with Razorpay</>}
      </button>
    </div>
  );
};

export default Step3_OnlinePayment;