"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -200px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 1 }}
            className="relative h-[700px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://res.cloudinary.com/dy8q4hf0k/image/upload/v1743435514/glacier-tour_awolsv.jpg"
              alt="Glacier Tour"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12 pt-8"
          >
            <div className="space-y-4">
              <motion.h2
                variants={itemVariants}
                className="text-6xl font-light tracking-wide"
              >
                My Services
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="h-[2px] w-24 bg-gradient-to-r from-emerald-400 to-transparent"
              />
            </div>

            <motion.div variants={itemVariants} className="space-y-10">
              <div className="group space-y-3 hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-2xl font-medium text-emerald-400/90">
                  Adventure Expeditions
                </h3>
                <p className="text-gray-100/90 leading-relaxed">
                  Join us for Day tours & Multiday adventures around this
                  amazing island! Explore less traveled areas with like minded
                  people with the Rewilding concepts.
                </p>
              </div>

              <div className="group space-y-3 hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-2xl font-medium text-emerald-400/90">
                  Private Immersions
                </h3>
                <p className="text-gray-100/90 leading-relaxed">
                  Contact us to create your own private adventure for groups and
                  individuals!
                </p>
              </div>

              <div className="group space-y-3 hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-2xl font-medium text-emerald-400/90">
                  Retreat Center
                </h3>
                <p className="text-gray-100/90 leading-relaxed">
                  Checkout our retreat center in the beautiful Snæfellsnes
                  Peninsula right in front of Temple mountain!
                </p>
              </div>

              <div className="group space-y-3 hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-2xl font-medium text-emerald-400/90">
                  SaunaTemple - SaunaGus
                </h3>
                <p className="text-gray-100/90 leading-relaxed">
                  We have a mobile Sauna on wheels and can host session in
                  amazing places around Iceland!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
