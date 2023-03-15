"use client";

import { motion } from "framer-motion";

import { TypingText, NewFeatures, TitleText } from "@/components";
import styles from "@/styles";
import {
  staggerContainer,
  fadeIn,
  zoomIn,
} from "@/utils/motion";
import { partners } from "@/public/partners";

const Partnerships = () => (
  <section
    className={`${styles.paddings} relative z-10 bg-primary-black`}
    id="partnerships"
  >
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
        <TypingText title="| Our Global Network" />
        <TitleText title={<>Our partnerships span the spectrum</>} />
        <div className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
          We have previously partnered with numerous stakeholders in the biotech
          ecosystem, spanning across all sizes and geographies, and including
          government entities, regulatory authorities, non-profit organizations
          and foundations, corporate sponsors, and biotech companies of all
          sizes, from startup spinoffs to dominant regional players and Fortune
          500 players.
        </div>
        <br />
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={`mx-auto flex-row partnerships`}
        >
          {partners.map((partner) => (
            <div>
              <img src={partner} className="max-h-[100px] bg-white cursor-pointer p-[4px]" key={partner} />
            </div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        variants={zoomIn(0.4, 1)}
        className={`flex-[0.40] ${styles.flexCenter}`}
      >
        <img
          src="/process.jpg"
          alt="process"
          className="w-[75%] h-[75%] object-cover"
          style={{ borderRadius: 50 }}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Partnerships;
