import React from "react";
import Hero from "./hero";
import Perks from "./features";
import FAQ from "./faq";
import CTA from "./cta";


import WebAnalytics from "./WebAnalytics";
import ProductAnalytics from "./ProductAnalytics";



const HomePage = () => {
  return (
    <div className=" flex gap-12  flex-col w-full overflow-x-hidden">
      <div
        className="top-0 left-0 z-[10] absolute w-full h-[200px] rotate-[180deg]"
        style={{
          maskImage: "linear-gradient(transparent, black 85%)",
          backgroundColor: "#c05d5d65",
        }}
      />


      <Hero />
      <WebAnalytics />
      <Perks />
      <ProductAnalytics/>
        <FAQ />
     
        <CTA />
      
    </div>
  );
};

export default HomePage;
