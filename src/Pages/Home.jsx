import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import BentoGrid from "../components/Home/BentoGrid/Bento.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Usecase from "../components/Home/UseCase/Usecase.jsx";
import Stories from "../components/Home/Stories/Stories.jsx";
import Testimonial from "../components/Home/Testimonial/testimonial.jsx";
import Pricing from "../components/Home/Pricing/PricingSection.jsx";
import HeroSection from "../components/Home/Header/HeroSection.jsx";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BentoGrid />
      <Usecase />
      <Stories />
      <Testimonial />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
