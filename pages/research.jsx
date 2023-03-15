"use client";

import { motion } from "framer-motion";

import { TypingText, TitleText, NewResearchFeatures } from "@/components";
import styles from "@/styles";
import {
  staggerContainer,
  fadeIn,
  zoomIn,
  imageMotionVariants,
} from "@/utils/motion";
import { researchAreas } from "@/constants";

const Research = () => (
  <section className={`${styles.paddings} relative z-10`} id="research">
    <div className="relative">
      <div className="gradient-02 z-0" />
      <br />
      <br />
      <br />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-0`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| R&D Platform" />
          <TitleText title={<>Research & Development Capabilities</>} />
          <div className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
            Developing and leveraging our own proprietary technologies as well
            as the latest in-process innovations in the research and technology
            transfer phases, we ensure a manufacturing edge over the status quo.
            We do not shy away from using Next Generation Manufacturing
            paradigms and radical technologies to drive down process runtimes,
            costs and inefficiencies, as part of our push to bring
            manufacturing to resource-strained regions.
          </div>
          <div className="mt-[10px] flex flex-wrap justify-between gap-[12px]">
            {researchAreas.map((feature) => (
              <NewResearchFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className={`flex-[0.40] ${styles.flexCenter}`}
        >
          <img
            src="/rndplatform.jpg"
            alt="rndplatform"
            className="w-[75%] h-[75%] object-cover"
            style={{ borderRadius: 50 }}
          />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Research;
