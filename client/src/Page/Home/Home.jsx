import React from "react";
import Hero from "../../Components/Hero/Hero";
import Features from "../../Components/Features/Features";
import FeatureProduct from "../../Components/FeatureProduct/FeatureProduct";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Blog from "../../Components/Blog/Blog";
import "./home.css";
import StatsCounter from "../../Components/Counter/Counter";
import Marquee from "../../Components/Marquee/Marquee";
import BgMoving from "../../Components/BgSec/BgMoving";
import ShopByCategory from "../../Components/Category/Category";

const Home = () => {
  return (
    <>
      <Hero />
      <ShopByCategory />
      <FeatureProduct />
      <Features />
      <BgMoving />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;
