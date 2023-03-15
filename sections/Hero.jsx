'use-client'

import React from "react";
import { motion } from "framer-motion";

import { staggerContainer, fadeIn, textVariant } from "@/utils/motion";
import { TypingText } from "@/components";
import styles from "@/styles";

const Hero = () => {
  return (
    <section className="hero overflow-clip">
      <div className="hero-overlay" />
      <video
        src="https://player.vimeo.com/video/808436350?h=cb4f6605b4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        autoPlay
        loop
        muted
        poster="./cover.jpg"
        className="hero-video"
      />
      {/* <div className="p-5 text-white z-[2] mt-[2rem]"> */}
      <div className="hero-content">
        <motion.div
          id="hero"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`mx-auto flex flex-col`}
        >
          <motion.h1
            variants={textVariant(1)}
            className="absolute top-0 left-20"
          >
            {/* <Image
              src="/logo-name.svg"
              alt="logo"
              className="w-[100%] h-auto min-w-[256px] min-h-[60px] max-h-[150px] max-w-[1024px] object-fit align-middle"
            /> */}
            <br />
            <motion.div
              variants={textVariant(1.5)}
              className={styles.heroHeading}
            >
              <h1>Innovating for Equity</h1>
              <p className={styles.heroFooter}>
                Biosimilars Development for better Healthcare Outcomes
              </p>
            </motion.div>
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
