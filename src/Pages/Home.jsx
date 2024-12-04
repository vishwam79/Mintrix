
import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Header from "../components/Home/Header/Header.jsx";
import Section1 from "../components/Home/Header/Section1.jsx";
import BentoGrid from "../components/Home/BentoGrid/Bento.jsx";

import Footer from "../components/Footer/Footer.jsx";

import Usecase from "../components/Home/UseCase/Usecase.jsx";
import Stories from "../components/Home/Stories/Stories.jsx";
import Testimonial from "../components/Home/Testimonial/testimonial.jsx";
import Pricing from "../components/Home/Pricing/PricingSection.jsx";
const Home = () => {
  return (
    <>
      <div className="relative h-full w-full bg-[#09090B]  z-10">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src="/header-background.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <Navbar />
        <Header className="relative z-10 mt-[400px] bg-transparent" />

        <Section1 className="relative" />
      </div>

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
