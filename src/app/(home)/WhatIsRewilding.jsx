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
    <div ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-5xl text-white text-center mb-20"
        >
          What is ReWilding?
        </motion.h2>

        {/* Introduction Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-lg text-center max-w-3xl mx-auto mb-20 leading-relaxed font-light"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center px-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src={section.icon}
                  alt={section.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 64px) 100vw, 64px"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl text-white mb-2 font-light">
                {section.title}
              </h3>

              {/* Items */}
              <ul className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-white/80 text-base font-light"
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
