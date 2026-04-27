"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Leaf, ShoppingBag, Phone, ShoppingCart } from "lucide-react";
import "./header.css";

const FontLoader = () => {
  React.useEffect(() => {
    if (document.getElementById("spice-fonts")) return;
    const link = document.createElement("link");
    link.id = "spice-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
};

const bottomNavItems = [
  { to: "/about", label: "Our Story", icon: Leaf },
  { to: "/shop", label: "Shop", icon: ShoppingBag },
  { to: "/", label: "Home", icon: Home },
  { to: "/contact", label: "Contact", icon: Phone },
  { to: "/cart", label: "Cart", icon: ShoppingCart },
];

const BottomNavigation = () => {
  const location = useLocation();

  return (
    <>
      <FontLoader />
      <nav className="bottom-nav">
        <div className="bottom-nav-container">
          {bottomNavItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={index}
                to={item.to}
                className={`bottom-nav-item ${isActive ? "active" : ""}`}
              >
                <span className="nav-icon-wrap">
                  <Icon size={21} strokeWidth={isActive ? 2 : 1.5} />
                  {isActive && <span className="nav-active-dot" />}
                </span>
                <span className="nav-label">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default BottomNavigation;
