import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-12  pb-32 scroll-mt-20"
    >
      <div className="w-full h-full md:px-20 px-8">
        <TitleHeader title="Work Experience" sub="💼 WHAT I HAVE DONE SO FAR" />
        <div className="mt-32 relative">
          <div className="relative  space-y-10 md:space-y-20 xl:space-y-32">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                {/* Use flex-row on md and larger, stack on mobile */}
                <div className="flex flex-col md:flex-row md:gap-8">
                  {/* GlowCard Section with increased width on mobile */}
                  <div className="w-full md:w-2/6 flex justify-center md:justify-start">
                    <GlowCard card={card} className="w-full max-w-xs md:max-w-none">
                      <div>
                        <h1 className="font-semibold text-xl md:text-3xl">
                            {card.title}
                          </h1>
                        <img
                          src={card.imgPath}
                          alt="exp-img"
                          className="w-12 h-12 md:w-16 md:h-16 object-contain"
                        />
                      </div>
                    </GlowCard>
                  </div>

                  {/* Text Content Section */}
                  <div className="w-full md:w-4/6 mt-4 md:mt-0">
                    <div className="flex items-start">
                      {/* Timeline */}
                      <div className="timeline-wrapper flex-shrink-0">
                        <div className="timeline w-1 h-full bg-gray-700" />
                        <div className="gradient-line w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500" />
                      </div>

                      {/* Text Content */}
                      <div className="expText flex flex-row gap-4 md:gap-10 xl:gap-10 relative z-20 ">
                        <div className="timeline-logo flex-shrink-0">
                          <img
                            src={card.logoPath}
                            alt="logo"
                            className="w-20 h-20 md:w-16 md:h-16 object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="my-3 md:my-5 text-white-50 text-sm md:text-base">
                            🗓️ {card.date}
                          </p>
                          <p className="text-[#839CB5] italic text-sm md:text-base">
                            Addis Ababa University
                          </p>
                          <ul
                            className="list-disc ms-5 mt-3 md:mt-5 flex flex-col gap-3 md:gap-5"
                            style={{ color: "#aaa6c3" }}
                          >
                            {card.responsibilities.map((responsibility, index) => (
                              <li key={index} className="text-sm md:text-lg">
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;