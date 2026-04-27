import React from "react";
import { User, Loader, Leaf } from "lucide-react";

const Step0_GuestDetails = ({ guestDetails, setGuestDetails, onSubmit, loading, error }) => {
  return (
    <div className="co-card">
      <div className="co-card-header">
        <div className="co-icon-wrap" style={{ background: "linear-gradient(135deg,#2A1F14,#3D2B18)" }}>
          <User size={18} style={{ color: "#C8973A" }} />
        </div>
        <div>
          <h2 className="co-card-title">Your Details</h2>
          <p className="co-card-sub">Enter your email and mobile to continue</p>
        </div>
      </div>

      <div className="co-fields">
        <div className="co-field">
          <label className="co-label">Email Address</label>
          <input
            type="email"
            value={guestDetails.Email}
            onChange={e => setGuestDetails(p => ({ ...p, Email: e.target.value }))}
            className="co-input"
            placeholder="your@email.com"
          />
        </div>
        <div className="co-field">
          <label className="co-label">Mobile Number</label>
          <input
            type="tel"
            value={guestDetails.ContactNumber}
            onChange={e => setGuestDetails(p => ({ ...p, ContactNumber: e.target.value }))}
            className="co-input"
            placeholder="10-digit mobile number"
          />
        </div>
      </div>

      {error && <p className="co-error">{error}</p>}

      <button onClick={onSubmit} disabled={loading} className="co-btn-gold mt-6">
        {loading ? <><Loader size={16} className="co-spin" /> Saving…</> : <>Continue <span style={{ marginLeft: 4 }}>→</span></>}
      </button>
    </div>
  );
};

export default Step0_GuestDetails;