"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { TypingText, DrugClassCard, TitleText, PipelineElement } from "@/components";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { drugClasses, drugs } from "@/constants";

const Pipeline = () => {
  const [active, setActive] = useState("diabetes");

  return (
    <section className={`${styles.paddings}  bg-primary-black`} id="pipeline">
      <br />
      <br />
      <br />
      <div className="gradient-04 z-0" />
      <motion.div
        id="pipeline"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="|  Pipeline" textStyles="text-center" />
        <TitleText
          title={
            <>
              Our product pipeline tackles
              <br className="md:block" /> major disease classes
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {drugClasses.map((drugclass, index) => (
            <DrugClassCard
              key={drugclass.id}
              {...drugclass}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
      <div className="mt-[-3rem]">
        {drugs.map((drug, index) => (
          <PipelineElement key={drug.name} {...drug} />
        ))}
      </div>
    </section>
  );
};

export default Pipeline;
