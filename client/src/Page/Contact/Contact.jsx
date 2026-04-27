import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Leaf,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const styleSheet = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Lora:wght@400;500;600&display=swap');

  :root {
    --primary-cream: #FDF8F3;
    --primary-dark: #2A1F14;
    --primary-gold: #C8973A;
    --accent-warm: #A67828;
    --accent-red: #81190B;
    --text-light: #5C4033;
    --border-soft: #E8DCC8;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes softGlow {
    0%, 100% {
      box-shadow: 0 8px 32px rgba(168, 120, 40, 0.08);
    }
    50% {
      box-shadow: 0 8px 48px rgba(168, 120, 40, 0.15);
    }
  }

  .animate-fade-up {
    animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    opacity: 0;
  }

  .stagger-1 { animation-delay: 0.1s; }
  .stagger-2 { animation-delay: 0.2s; }
  .stagger-3 { animation-delay: 0.3s; }
  .stagger-4 { animation-delay: 0.4s; }
  .stagger-5 { animation-delay: 0.5s; }

  .glow-soft {
    animation: softGlow 3s ease-in-out infinite;
  }

  .grain-texture {
    background-image: 
      url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' seed='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    background-size: 200px 200px;
  }

  .ornament::before,
  .ornament::after {
    content: '✦';
    color: var(--primary-gold);
    opacity: 0.6;
    margin: 0 8px;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    Phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({});
  const [errors, setErrors] = useState({});

  const handleFetchSetting = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:7912/api/v1/admin/settings"
      );
      setSettings(data.data);
    } catch (error) {
      console.log("Failed to fetch settings:", error);
      // Set fallback defaults
      setSettings({
        siteName: "Asvadvadat Spice & Tea Co.",
        contactNumber: "+91 9876543210",
        supportEmail: "support@example.com",
        address: "New Delhi, India",
      });
    }
  };

  useEffect(() => {
    handleFetchSetting();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.Phone.trim()) newErrors.Phone = "Phone is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all fields correctly");
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:7912/api/v1/support-request",
        formData
      );
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        Phone: "",
        message: "",
      });
      toast.success(res.data.message || "Message sent successfully!");

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      info: settings.contactNumber || "+91 XXXX XXXX",
      description: "Mon-Sat 10 AM - 06 PM",
      bgColor: "from-[#C8973A] to-[#A67828]",
    },
    {
      icon: Mail,
      title: "Email",
      info: settings.supportEmail || "support@example.com",
      description: "We reply within 24 hours",
      bgColor: "from-[#81190B] to-[#6F1508]",
    },
    {
      icon: MapPin,
      title: "Address",
      info: settings.address || "New Delhi, India",
      description: "Visit our store",
      bgColor: "from-[#C8973A] to-[#A67828]",
    },
    {
      icon: Clock,
      title: "Hours",
      info: "Mon - Sat",
      description: "10 AM - 06 PM",
      bgColor: "from-[#81190B] to-[#6F1508]",
    },
  ];

  const siteName = settings.siteName || "Asvadvadat Spice & Tea Co.";

  return (
    <>
      <style>{styleSheet}</style>

      <div className="min-h-screen bg-gradient-to-b from-[#FDF8F3] to-[#FAF6EF] grain-texture">
        {/* Hero Section */}
        <div className="relative overflow-hidden pt-20 pb-16 md:pb-24">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 right-10 w-72 h-72 bg-[#C8973A] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#81190B] rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center px-6">
            <div className="inline-block mb-6 animate-fade-up">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-[#E8DCC8] rounded-full">
                <Leaf className="w-4 h-4 text-[#C8973A]" />
                <span className="text-sm text-[#5C4033] font-light">
                  {siteName}
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#2A1F14] mb-6 tracking-tight animate-fade-up stagger-1">
              Get in Touch
            </h1>

            <p className="text-lg text-[#5C4033] font-light max-w-2xl mx-auto animate-fade-up stagger-2">
              Have questions about our premium spices or need support? We're here
              to help. Reach out and let's connect.
            </p>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${method.bgColor} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up stagger-${idx + 1}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 opacity-90" />
                    <ChevronRight className="w-5 h-5 opacity-50" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm font-light mb-2 opacity-90">
                    {method.info}
                  </p>
                  <p className="text-xs font-light opacity-75">
                    {method.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-up stagger-1">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-[#E8DCC8] glow-soft">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2A1F14] mb-2">
                  Send us a Message
                </h2>
                <p className="text-[#5C4033] font-light mb-8 text-lg">
                  We'd love to hear from you. Drop us a line and we'll respond as
                  soon as possible.
                </p>

                {isSubmitted && (
                  <div className="mb-8 p-5 bg-[#6B9E7E]/10 border border-[#6B9E7E] rounded-xl flex items-start gap-3 animate-fade-up">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#6B9E7E]">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#2A1F14] font-semibold">
                        Message Sent Successfully!
                      </p>
                      <p className="text-[#5C4033] text-sm font-light">
                        Thank you for reaching out. We'll get back to you shortly.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#2A1F14] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 border rounded-xl font-light focus:ring-2 focus:ring-[#C8973A] focus:border-transparent outline-none transition ${
                          errors.name
                            ? "border-red-500 bg-red-50"
                            : "border-[#E8DCC8] bg-white"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-600 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2A1F14] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 border rounded-xl font-light focus:ring-2 focus:ring-[#C8973A] focus:border-transparent outline-none transition ${
                          errors.email
                            ? "border-red-500 bg-red-50"
                            : "border-[#E8DCC8] bg-white"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Subject Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#2A1F14] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="Phone"
                        value={formData.Phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXXXXXXX"
                        className={`w-full px-4 py-3 border rounded-xl font-light focus:ring-2 focus:ring-[#C8973A] focus:border-transparent outline-none transition ${
                          errors.Phone
                            ? "border-red-500 bg-red-50"
                            : "border-[#E8DCC8] bg-white"
                        }`}
                      />
                      {errors.Phone && (
                        <p className="text-red-600 text-xs mt-1">{errors.Phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2A1F14] mb-2">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl font-light focus:ring-2 focus:ring-[#C8973A] focus:border-transparent outline-none transition ${
                          errors.subject
                            ? "border-red-500 bg-red-50"
                            : "border-[#E8DCC8] bg-white"
                        }`}
                      >
                        <option value="">Select a subject...</option>
                        <option value="order">Order & Shipping</option>
                        <option value="returns">Returns & Refunds</option>
                        <option value="product">Product Questions</option>
                        <option value="bulk">Bulk Orders</option>
                        <option value="wholesale">Wholesale Inquiry</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.subject && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-[#2A1F14] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className={`w-full px-4 py-3 border rounded-xl font-light focus:ring-2 focus:ring-[#C8973A] focus:border-transparent outline-none transition resize-none ${
                        errors.message
                          ? "border-red-500 bg-red-50"
                          : "border-[#E8DCC8] bg-white"
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-600 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#C8973A] to-[#A67828] hover:from-[#A67828] hover:to-[#81190B] text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#5C4033] font-light text-center">
                    We respect your privacy. Your information is safe with us.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar - Map & Info */}
            <div className="space-y-8 animate-fade-up stagger-2">
              {/* Store Location Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#E8DCC8] glow-soft h-80">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224321.99615187824!2d77.05362179185872!3d28.538782213942742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdf0017871669%3A0x19f6e3672f8e9e3e!2sJai%20Hind!5e0!3m2!1sen!2sin!4v1757331443153!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Quick Info Card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#E8DCC8]">
                <div className="flex items-start gap-3 mb-6 pb-6 border-b border-[#E8DCC8]">
                  <Phone className="w-5 h-5 text-[#C8973A] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-[#5C4033] font-light">
                      Phone Number
                    </p>
                    <p className="text-lg font-semibold text-[#2A1F14]">
                      {settings.contactNumber || "+91 XXXX XXXX"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-6 pb-6 border-b border-[#E8DCC8]">
                  <Mail className="w-5 h-5 text-[#C8973A] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-[#5C4033] font-light">
                      Email Address
                    </p>
                    <p className="text-lg font-semibold text-[#2A1F14]">
                      {settings.supportEmail || "support@example.com"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C8973A] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-[#5C4033] font-light">Address</p>
                    <p className="text-lg font-semibold text-[#2A1F14]">
                      {settings.address || "New Delhi, India"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-[#FDF8F3] to-[#FAF6EF] rounded-2xl p-6 border border-[#E8DCC8]">
                <h3 className="text-lg font-semibold text-[#2A1F14] mb-4">
                  Follow Us
                </h3>
                <div className="space-y-2">
                  {settings.socialMediaLinks && (
                    <>
                      {settings.socialMediaLinks.instagram && (
                        <a
                          href={settings.socialMediaLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#5C4033] hover:text-[#C8973A] transition group"
                        >
                          <span className="text-sm font-light">Instagram</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                        </a>
                      )}
                      {settings.socialMediaLinks.facebook && (
                        <a
                          href={settings.socialMediaLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#5C4033] hover:text-[#C8973A] transition group"
                        >
                          <span className="text-sm font-light">Facebook</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                        </a>
                      )}
                      {settings.socialMediaLinks.youtube && (
                        <a
                          href={settings.socialMediaLinks.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#5C4033] hover:text-[#C8973A] transition group"
                        >
                          <span className="text-sm font-light">YouTube</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="max-w-4xl mx-auto px-6 py-12 text-center animate-fade-up stagger-5">
          <p className="text-[#5C4033] font-light text-lg">
            Thank you for choosing {siteName}
            <br />
            <span className="text-sm">
              Where every spice tells a story of quality and tradition
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;