import Link from "next/link";
import React from "react";
import AnimationContainer from "@/components/globals/animation-container";
import Wrapper from "@/components/globals/wrapper";
import Images from "@/components/globals/images";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import SectionBadge from "@/components/ui/section-badge";

const Hero = () => {
  const languages = [
    Images.comp1,
    Images.comp2,
    Images.comp3,
    Images.comp4,
    Images.comp6,
    Images.comp7,
    Images.comp8,
  ];

  return (
    <Wrapper className="relative flex-1 pt-20 lg:pt-32 w-full h-full min-h-screen flex items-center justify-center">
      <div className="z-[11] flex flex-col items-center text-center gap-10 w-full max-w-4xl">

        <div className="flex flex-col items-center text-center gap-10 py-8 w-full">
          <div className="flex flex-col items-center text-center gap-4">
            <AnimationContainer animation="fadeUp" delay={0.2}>
              <SectionBadge title="Built using Next.Js" />
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.4}>
              <h1 className="bg-clip-text bg-gradient-to-r from-white to-neutral-500 font-medium text-transparent text-5xl lg:text-6xl !leading-tight">
                {"Unleash Your Website's Full Potential."}
              </h1>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.6}>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              Effortlessly unlock powerful insights. Track visitor behavior, monitor key metrics, and optimize performance with our intuitive <strong>analytics</strong> platform.
              </p>
            </AnimationContainer>
          </div>

          <AnimationContainer animation="fadeUp" delay={0.8}>
            <div className="w-full flex justify-center">
              <Link href="/projects">
                <Button className="bg-[#C05D5D] hover:bg-[#c05d5dcb] w-full md:w-auto">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={1}>
            <div className="flex flex-col items-center text-center gap-4 py-4">
              <p className="text-muted-foreground text-sm md:text-base">
              Harnessing Cutting-Edge Tech for Smarter Insights.
              </p>
              <div className="relative w-full max-w-[calc(100vw-2rem)] lg:max-w-lg">
                <Marquee className="select-none [--duration:30s] [--gap:2rem]">
                  {languages.map((Company, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center h-16 text-muted-foreground"
                    >
                      <Company className="grayscale-[1] w-auto h-12" />
                    </div>
                  ))}
                </Marquee>
                <div className="-right-1 z-40 absolute inset-y-0 bg-gradient-to-l  w-1/3 pointer-events-none"></div>
                <div className="-left-1 z-40 absolute inset-y-0 bg-gradient-to-r  w-1/3 pointer-events-none"></div>
              </div>
            </div>
          </AnimationContainer>
        </div>

        
      </div>
    </Wrapper>
  );
};

export default Hero;