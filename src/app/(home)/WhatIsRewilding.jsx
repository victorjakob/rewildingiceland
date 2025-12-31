"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function WhatIsRewilding() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    once: true,
  });

  const sections = [
    {
      icon: "/icons/Icon-01.png",
      title: "Grounding",
      items: ["Walking Barefoot", "Lay on the ground", "Submerse in water"],
    },
    {
      icon: "/icons/Icon-02.png",
      title: "Connect to the land",
      items: ["Sleep under the stars", "Step into nature"],
    },
    {
      icon: "/icons/Icon-03.png",
      title: "Nature Entertainment",
      items: ["Communicate with nature", "Nature Immersion"],
    },
    {
      icon: "/icons/Icon-04.png",
      title: "Primal Fitness",
      items: ["Your body has wisdom", "Learn to listen"],
    },
    {
      icon: "/icons/Icon-05.png",
      title: "Rewild your mind",
      items: ["Find your inner nature", "Your natural birthright"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div ref={ref} className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl text-white text-center 
                     mb-8 sm:mb-12 md:mb-20 font-light tracking-wide"
        >
          What is ReWilding?
        </motion.h2>

        {/* Introduction Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-base sm:text-lg text-center 
                     max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 
                     leading-relaxed font-light
                     px-4 sm:px-6 md:px-8"
        >
          My name is Hinrik and I'm the founder. We here at ReWilding Iceland
          are a dedicated team that works for mother earth. Our aim is to help
          people slow down and connect with nature. We work with a concept
          called Rewilding, coming back to nature. We use ancient and new tools
          to assist us on that journey. Here you will find tours, expeditions
          and adventures that speak to your soul, join us!
        </motion.p>

        {/* Sections Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 
                     gap-8 sm:gap-10 md:gap-6
                     max-w-lg sm:max-w-2xl lg:max-w-none mx-auto"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center 
                         px-4 py-6 sm:py-8 md:py-4
                         bg-white/5 rounded-xl backdrop-blur-sm
                         hover:bg-white/10 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="w-20 sm:w-16 h-20 sm:h-16 mb-6 sm:mb-4 relative">
                <Image
                  src={section.icon}
                  alt={section.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80px, 64px"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-xl text-white mb-4 sm:mb-2 font-light">
                {section.title}
              </h3>

              {/* Items */}
              <ul className="space-y-2 sm:space-y-1">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-white/80 text-lg sm:text-base font-light"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
