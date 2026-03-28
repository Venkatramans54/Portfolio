import React, { Suspense } from "react";
import styles, { layout } from "../style";
import { educationList } from "../constants";
import animationData from "../lotties/quiz-mode-teal-dark.json";
import { motion } from "framer-motion";

const Lottie = React.lazy(() => import("react-lottie-player/dist/LottiePlayerLight"));

// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const FeatureCard = ({
  icon,
  title,
  degree,
  duration,
  content1,
  content2,
  content3,
  index,
}) => (
  <motion.div
    className={`flex flex-row p-6 rounded-[20px]
	${index === educationList.length - 1 ? "mb-0" : "mb-6"}`}
    initial={{ y: 24, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[80%] h-[80%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-4">
      <h4 className="mb-1 font-poppins text-[22px] font-semibold leading-[30px] tracking-[-0.015em] text-white text-gradient">
        {title}
      </h4>
      <p className="mb-1 font-poppins text-[16px] font-medium leading-[26px] text-slate-100">
        {degree}
      </p>
      <p className="mb-2 font-poppins text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
        {duration}
      </p>
      <div className="mt-1 flex flex-col gap-3">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-4">
          <p className="shrink-0 whitespace-nowrap font-poppins text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:w-[128px]">
            CGPA
          </p>
          <p className="flex-1 font-poppins text-[15px] font-normal leading-[25px] text-slate-300">
            {content1.replace("CGPA: ", "")}
          </p>
        </div>
        {content2 && (
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-4">
            <p className="shrink-0 whitespace-nowrap font-poppins text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:w-[128px]">
              Foundation
            </p>
            <p className="flex-1 font-poppins text-[15px] font-normal leading-[25px] text-slate-300">
              {content2}
            </p>
          </div>
        )}
        {content3 && (
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-4">
            <p className="shrink-0 whitespace-nowrap font-poppins text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:w-[128px]">
              Coursework
            </p>
            <p className="flex-1 font-poppins text-[15px] font-normal leading-[25px] text-slate-300">
              {content3.replace("Relevant coursework: ", "")}
            </p>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  const headingReveal = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.section
      id="education"
      className="section-divider pt-6 md:pt-7"
      initial={{ opacity: 0.92, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <motion.h1
        className="heading-reveal flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[76px] leading-[70px] tracking-[-0.02em]"
        variants={headingReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.65 }}
      >
        Education
      </motion.h1>
      <motion.div
        className={`${layout.sectionReverse} pt-2 md:pt-3 pb-2 md:pb-3`}
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={layout.sectionImgReverse}>
          <div className="w-[80%] h-[80%] relative z-[5]">
            <Suspense fallback={<div className="h-full min-h-[280px] w-full" />}>
              <Lottie {...defaultOptions} />
            </Suspense>
          </div>

          {/* gradient start */}
          <div className="parallax-glow absolute z-[3] -left-[38%] top-[10%] h-[38%] w-[38%] rounded-full white__gradient opacity-60" />
          {/* gradient end */}
        </div>

        <div className={`${layout.sectionInfo} flex-col`}>
          {educationList.map((feature, index) => (
            <FeatureCard key={feature.id} index={index} {...feature} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Education;
