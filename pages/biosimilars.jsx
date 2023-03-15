"use client";

import { motion } from "framer-motion";

import { TypingText, NewFeatures, TitleText } from "@/components";
import styles from "@/styles";
import {
  staggerContainer,
  fadeIn,
  zoomIn,
  imageMotionVariants,
} from "@/utils/motion";
import { newFeatures } from "@/constants";
import Image from "next/image";

const Biosimilars = () => (
  <section
    className={`${styles.paddings} relative z-10 bg-primary-black`}
    id="biosimilars"
  >
    <br />
    <br />
    <br />
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-0`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Bridging the Gap" />
        <TitleText title={<>Biosimilars: Sustaining Innovation</>} />
        <div className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
          Biosimilars are biological products highly similar to existing
          biotherapeutics. They are produced in cellular systems through
          sophisticated processes which require significant expertise, and
          sophisticated technologies - which makes them significantly more
          complex to manufacture compared to small-molecule generics. But
          compared to the reference biologic, they can also avail of an
          abbreviated regulatory pathway at a lower cost and timeline.
        </div>
        <div className="mt-[10px] flex flex-wrap justify-between gap-[12px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
        <br />
        <div className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
          At Zerus, we are committed to discovering and developing high-quality,
          cost-competitive biosimilars. We continually evaluate additional
          pipeline opportunities to bring a robust selection of biotherapeuticss
          to patients around the world.
        </div>
      </motion.div>
      <motion.div
        variants={zoomIn(0.4, 1)}
        className={`flex-[0.40] ${styles.flexCenter}`}
      >
        <Image
          src="/biosimilars.png"
          alt="biosimilars"
          className="w-[75%] h-[75%] object-fill"
          style={{ borderRadius: 50 }}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Biosimilars;
