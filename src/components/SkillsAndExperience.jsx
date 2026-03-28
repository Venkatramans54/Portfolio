import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { experiences, skills } from "../constants";
import { layout } from "../style";
import { motion } from "framer-motion";

export const SkillIcon = ({ icon, name }) => {
  return (
    <div className="w-[110px] min-h-[78px] flex flex-col items-center text-center">
      <span className="text-white text-[30px] leading-none hover:text-teal-200">
        {React.createElement(icon)}
      </span>
      <p className="mt-3 font-poppins text-[11px] leading-[15px] text-slate-400">
        {name}
      </p>
    </div>
  );
};

const SkillCard = (props) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-4 mb-6 border-l border-gray-200 dark:border-gray-700 mx-4"
    >
      <div className="relative w-3 h-3 bg-gray-200 rounded-full top-5 right-[6.2px] border dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="flex flex-row items-center mb-6 ml-6">
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[28px] tracking-[-0.01em]">
          {props.title}
        </h4>
      </div>
      <div className="grid grid-cols-3 gap-x-6 gap-y-10 px-4 sm:px-6 justify-items-start">
        {props.items.map((item, index) => (
          <SkillIcon key={item.id} index={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

const Content = ({ text, segments, link }) => {
  return (
    <div>
      <p className="mt-4 font-poppins text-[14px] leading-[23px] text-slate-300">
        {segments
          ? segments.map((segment, index) => (
              <span
                key={`${segment.text}-${index}`}
                className={
                  segment.highlight
                    ? "font-medium decoration-teal-300/70 underline underline-offset-4"
                    : undefined
                }
              >
                {segment.text}
              </span>
            ))
          : text}{" "}
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <BsLink45Deg
              size="1rem"
              className="inline hover:text-teal-200"
            ></BsLink45Deg>
          </a>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

const ExperienceCard = (props) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-row items-center mb-6">
        <img
          src={props.logo}
          alt={props.organisation}
          className="w-[52px] h-[52px] rounded-full z-[2]"
        />
        <h4 className="ml-2 font-poppins font-semibold text-[21px] text-gradient leading-[28px] tracking-[-0.01em]">
          {props.organisation}
        </h4>
      </div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-6">
        {props.positions.map((position, index) => (
          <li
            key={index}
            className={`${
              index === props.positions.length - 1 ? "mb-0" : "mb-4"
            } ml-4`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="font-poppins text-[18px] font-semibold leading-[26px] text-gray-900 dark:text-white">
              {position.title}
            </h3>
            <time className="mb-2 mt-1 block font-poppins text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 dark:text-gray-500">
              {position.duration}
            </time>
            {position.content.map((info, index) => (
              <Content key={index} index={index} {...info} />
            ))}
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
          </li>
        ))}
      </ol>
    </motion.div>
  );
};

const SkillsAndExperience = () => {
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
      id="skills"
      className="section-divider mb-6 pt-6 md:pt-7"
      initial={{ opacity: 0.92, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <motion.h1
        className="heading-reveal flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[76px] leading-[70px] tracking-[-0.02em]"
        variants={headingReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.65 }}
      >
        Skills & Experience
      </motion.h1>
      <div className={`${layout.section} pt-2 md:pt-3`}>
        {/* Skills */}
        <motion.div className={`ml-2 mb-6 ${layout.sectionInfo}`}>
          {skills.map((skill, index) => (
            <SkillCard key={index} index={index} {...skill} />
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div className="flex flex-1 items-center justify-start flex-col">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} index={index} {...exp} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsAndExperience;
