import React from "react";

import { menuData } from "../../data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../variants";
const Menu = () => {
  const { title, subtitle, menuItems, btnText } = menuData;
  return (
    <section className="min-h-[580px]">
      <div className="h-full bg-repeat-round bg-menu absolute w-full max-w-[1800px]"></div>
      <div className="relative  top-32 lg:top-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="container mx-auto felx flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeIn("down", "tween", 0.2, 1.6)}
            className="h2 capitalize text-white text-center"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.6)}
            className="text-white/70 capitalize mb-8"
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 150,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "tween",
          delay: 0.2,
          duration: 1.6,
          ease: "easeOut",
        }}
        className=" relative top-40 lg:top-56"
      >
        <div className="container  mx-auto md:w-[500px] xl:w-auto lg:w-auto ">
          <div className="lg:-mt-24 min-h-[590px] z-30 mb-8 md:mb-4 xl:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[590px] gap-5">
              {menuItems.map((item, index) => {
                const { image, name, price, description } = item;
                return (
                  <div key={index}>
                    <div className="flex flex-row lg:flex-col h-full">
                      <div
                        className={`w-[45%] md:aspect-square lg:aspect-auto lg:w-full`}
                      >
                        <img src={image} alt="" />
                      </div>
                      <div className="bg-[#5a5a5a] text-white flex-1 felx felx-col justify-center px-6 lg:p-12 lg:max-h-[250px] xl:max-h-max">
                        <div className="text-center">
                          <div className="text-xl font-semibold text-dark xl:text-2xl">
                            {name}
                          </div>
                          <div className="my-1 text-[20px] lg:text-[40px] lg:my-6  font-semibold">
                            {price}
                          </div>
                          <div>{description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button className="btn mx-auto flex justify-center items-center capitalize">
            {btnText}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;
