import React from "react";
import Navbar from "@/app/components/Navbar/Navbar";
import Header from "@/app/components/Home/Header/Header";
import Section1 from "../../components/Home/Header/Section1";
import BentoGrid from "@/app/components/BentoGrid/index";

import Footer from "../../components/Footer/Footer";

import Usecase from "../../components/Home/UseCase/Usecase";
import Stories from '../../components/Stories/Stories'
import Testimonial from '../../components/Home/Testimonial/testimonial'
import Pricing from '../../components/Home/Pricing/PricingSection'
const Home1 = () => {
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

export default Home1;
