import React from "react";

import TestimonialCarousel from "./TestimonialCarousel";
import { testimonialData } from "../../data";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonial = () => {
  const { title, subtitle, slider } = testimonialData;
  return (
    <section className="bg-testimonial bg-cover bg-no-repeat relative top-[240px] lg:top-[290px] h-[1000px] pt-[60px] md:pt-[120px]">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="text-center capitalize flex flex-col items-center"
        >
          <h2 className="h2 text-white">{title}</h2>
          <p className="text-white/70 capitalize mb-8">{subtitle}</p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex justify-center items-center"
        >
          <TestimonialCarousel slider={slider} />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
