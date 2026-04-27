import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../constant/api";
import ProductCard from "./ProductCard";
import ProductModel from './ProductModel';
import './FeaturedProducts.css';  // ← import CSS here

/* ── Skeleton card ── */
const SkeletonCard = () => (
  <div className="fp-skeleton">
    <div className="fp-skeleton-img" />
    <div className="fp-skeleton-body">
      <div className="fp-skeleton-line" style={{ width: '55%' }} />
      <div className="fp-skeleton-line" style={{ width: '80%' }} />
      <div className="fp-skeleton-line" style={{ width: '40%' }} />
      <div className="fp-skeleton-line" style={{ width: '100%', height: 32, marginTop: 4, borderRadius: 10 }} />
    </div>
  </div>
);

/* ── Main Component ── */
const FeatureProduct = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [selectedVariants, setSelectedVariants] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFetchProduct = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${API}/get-product`);
      const filtered = (data?.products || []).filter((p) => p?.isShowOnHomeScreen === true);
      setFeaturedProducts(filtered);

      const initVariants = {};
      filtered.forEach((product) => {
        if (product.isVarient && product.Varient?.length) {
          initVariants[product._id] = product.Varient[0]._id;
        }
      });
      setSelectedVariants(initVariants);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleVariantChange = (productId, variantId) => {
    setSelectedVariants((prev) => ({ ...prev, [productId]: variantId }));
  };

  useEffect(() => {
    handleFetchProduct();
  }, []);

  const handleOpenQuickView = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="fp-section">
        {/* ── Section Header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fp-header">
            <div className="fp-eyebrow">
              <span className="fp-eyebrow-line" />
              <Leaf size={11} />
              Handicraft For You
              <span className="fp-eyebrow-line right" />
            </div>

            <h2 className="fp-title">
              Featured{" "}
              <span>Products</span>
            </h2>

            <p className="fp-subtitle">
              Curated selection of our finest spices &amp; teas — pure, aromatic, and handcrafted.
            </p>
          </div>

          {/* ── Product Grid ── */}
          {loading ? (
            <div className="fp-grid">
              {[1, 2, 3, 4].map((i) => <SkeletonCard key={i} />)}
            </div>
          ) : featuredProducts.length === 0 ? (
            <div className="fp-empty">No featured products at the moment.</div>
          ) : (
            <div className="fp-grid">
              {featuredProducts.map((product, index) => (
                <div key={product._id} className="fp-card-wrap">
                  <ProductCard
                    product={product}
                    index={index}
                    onQuickView={() => handleOpenQuickView(product)}
                    selectedVariants={selectedVariants}
                    onVariantChange={handleVariantChange}
                  />
                </div>
              ))}
            </div>
          )}

          {/* ── View All CTA ── */}
          {!loading && featuredProducts.length > 0 && (
            <div className="fp-cta-wrap">
              <Link to="/shop" className="fp-cta">
                View All Products
                <ArrowRight size={14} className="fp-cta-icon" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <ProductModel
        isOpen={modalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </>
  );
};

export default FeatureProduct;