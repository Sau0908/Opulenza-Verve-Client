import React from "react";
import { teamData } from "../../data";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Team = () => {
  const { pretitle, title, sub1, sub2, name, occupation, chefImg } = teamData;
  return (
    <section className="relative top-52 lg:top-[290px] min-h-[420px] ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[120px] items-center lg:items-start">
          <motion.div
            variants={fadeIn("down", "tween", 0.6, 1.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 text-center lg:text-left lg:pt-16"
          >
            <div className="pretitle">{pretitle}</div>
            <div className="h2 capitalize">{title}</div>
            <p className="mb-60px">{sub1}</p>
            <p>{sub2}</p>

            <div className="my-[26px]">
              <div className="text-2xl capitalize font-semibold text-accent">
                {name}
              </div>
              <div className="text-[15px] font-semibold capitalize text-grey/70">
                {occupation}
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.7, 1.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
          >
            <img src={chefImg} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
