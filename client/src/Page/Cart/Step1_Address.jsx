import React, { useState } from "react";
import { MapPin, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "react-toastify";

const STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
  "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
  "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh",
  "Uttarakhand","West Bengal","Delhi","Jammu & Kashmir","Ladakh",
];

const Step1_Address = ({ address, updateAddress, onSubmit, error }) => {
  const [gstVerifying, setGstVerifying] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [gstVerified, setGstVerified] = useState(false);

  const handleVerifyGst = () => {
    const gst = address.gst?.trim();
    if (!gst || gst.length < 10) {
      alert("Please enter a valid GST number");
      return;
    }

    setGstVerifying(true);
    setOtpError("");
    setShowOtpField(false);

    // Fake API delay (1.5–2 seconds)
    setTimeout(() => {
      setGstVerifying(false);
      setShowOtpField(true);
      toast.info("OTP sent to registered mobile/email (demo: 123456)", {
        position: "top-center",
        autoClose: 4000,
      });
    }, 1800);
  };

  const handleVerifyOtp = () => {
    if (otp.trim() === "123456") {
      setGstVerified(true);
      setShowOtpField(false);
      setOtp("");
      setOtpError("");
      toast.success("GST verified successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      setOtpError("Invalid OTP. Please try 123456 (demo)");
    }
  };

  const fields = [
    { label: "Full Name", key: "name", placeholder: "Recipient name", type: "text", col: 4 },
    { label: "Address Line", key: "addressLine", placeholder: "House / Street / Area", type: "text", col: 8 },
    { label: "City", key: "city", placeholder: "City", type: "text", col: 6 },
    { label: "PIN Code", key: "postCode", placeholder: "110001", type: "number", col: 3 },
  ];

  return (
    <div className="co-card">
      <div className="co-card-header">
        <div className="co-icon-wrap" style={{ background: "linear-gradient(135deg,#C8973A,#A67828)" }}>
          <MapPin size={18} style={{ color: "#FAF6EF" }} />
        </div>
        <div>
          <h2 className="co-card-title">Delivery Address</h2>
          <p className="co-card-sub">Where should we deliver your order?</p>
        </div>
      </div>

      <div className="co-grid">
        {fields.map(f => (
          <div key={f.key} className={`co-field co-col-${f.col}`}>
            <label className="co-label">{f.label}</label>
            <input
              type={f.type}
              value={address[f.key] || ""}
              onChange={e => updateAddress({ [f.key]: e.target.value })}
              className="co-input"
              placeholder={f.placeholder}
            />
          </div>
        ))}

        {/* State */}
        <div className="co-field co-col-5">
          <label className="co-label">State</label>
          <div className="co-select-wrap">
            <select
              value={address.state || ""}
              onChange={e => updateAddress({ state: e.target.value })}
              className="co-select"
            >
              <option value="">Select state</option>
              {STATES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <span className="co-select-arrow">▾</span>
          </div>
        </div>

        {/* GST with verification */}
        <div className="co-field co-col-6">
          <label className="co-label">GST (optional for business orders)</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={address.gst || ""}
              onChange={e => updateAddress({ gst: e.target.value.toUpperCase() })}
              className="co-input flex-1"
              placeholder="22AAAAA0000A1Z5"
              maxLength={15}
              disabled={gstVerified}
            />

            {!gstVerified ? (
              <button
                type="button"
                onClick={handleVerifyGst}
                disabled={gstVerifying || !address.gst?.trim()}
                className="co-btn-outline px-4 min-w-[100px]"
              >
                {gstVerifying ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    Verifying...
                  </span>
                ) : (
                  "Verify GST"
                )}
              </button>
            ) : (
              <div className="flex items-center gap-2 px-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium">
                <CheckCircle size={16} />
                Verified
              </div>
            )}
          </div>

          {/* OTP verification UI */}
          {showOtpField && !gstVerified && (
            <div className="mt-3 p-3 bg-amber-50/60 border border-amber-200 rounded-xl">
              <p className="text-sm text-amber-800 mb-2">
                Enter OTP sent to registered mobile/email (demo: <strong>123456</strong>)
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={otp}
                  onChange={e => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="co-input flex-1"
                  maxLength={6}
                />
              
              </div>
                <button
                  onClick={handleVerifyOtp}
                  className="co-btn-gold mt-1 px-5"
                >
                  Verify OTP
                </button>
              {otpError && <p className="text-red-600 text-xs mt-1">{otpError}</p>}
            </div>
          )}
        </div>

        {/* Address Type */}
        <div className="co-field co-col-4">
          <label className="co-label">Address Type</label>
          <div className="flex gap-2 mt-1">
            {["Home", "Office", "Other"].map(t => (
              <button
                key={t}
                onClick={() => updateAddress({ addressType: t })}
                className="co-type-btn"
                style={{
                  background: address.addressType === t ? "linear-gradient(135deg,#C8973A,#A67828)" : "rgba(200,151,58,0.06)",
                  color: address.addressType === t ? "#FAF6EF" : "rgba(42,31,20,0.55)",
                  border: `1.5px solid ${address.addressType === t ? "transparent" : "rgba(200,151,58,0.2)"}`,
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {error && <p className="co-error">{error}</p>}

      <button onClick={onSubmit} className="co-btn-gold mt-6">
        Continue to Payment →
      </button>
    </div>
  );
};

export default Step1_Address;