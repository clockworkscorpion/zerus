"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { TypingText, TitleText } from "@/components";
import { fadeIn, staggerContainer } from "@/utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="overview">
    <br />
    <br />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="|  About Us" textStyles="text-center" />
      <TitleText
        title={<>Innovating for Affordable Healthcare</>}
        textStyles="text-center"
      />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[20px] text-[20px] align-middle justify-start text-secondary-white"
      >
        Zerus Life Sciences specializes in the discovery and development of
        biosimilars to serve unmet medical needs. Utilizing the latest process
        innovations, as well as our own proprietary technologies, we seek to
        reduce the cost of healthcare. We are extremely passionate about what we
        sought out to do.
        <br />
        <br />
        Zerus was spun off from research efforts conducted jointly by the Indian
        Institute of Technology (IIT), Delhi, and the Department of
        Biotechnology (DBT), Government of India. The company has multiple
        biosimilar assets in its portfolio, targeting a combined market value of
        $56 Billion, which is projected to grow to $85 Billion by 2030.
        <br />
        <br />
        Our innovative research and cutting-edge proprietary technologies enable
        us to deliver biosimilars that meet the stringent safety, efficacy, and
        quality standards of the healthcare industry. We are driven by a passion
        for improving patient outcomes globally, with a special focus on
        developing markets.
        <br />
        <br />
        As a biosimilars-focused company, we bring together a team of highly
        skilled scientific experts who are committed to pushing the boundaries
        of biotechnology. Partnering with us means gaining access to a team of
        specialists who are at the forefront of the biosimilars industry.
        <br />
        <br />
        Everyone deserves affordable access to safe and effective treatments. We
        are dedicated to making this a reality.
      </motion.p>
    </motion.div>
  </section>
);

export default About;
