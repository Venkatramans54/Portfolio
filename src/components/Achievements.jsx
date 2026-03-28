import { motion } from "framer-motion";
import { achievements } from "../constants";
import styles from "../style";

const Achievements = () => {
  const headingReveal = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      className="section-divider bg-primary text-white mt-4 md:mt-6 relative pt-6 md:pt-7"
      id="achievements"
    >
      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <motion.h1
            className="heading-reveal flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[76px] leading-[70px] tracking-[-0.02em]"
            variants={headingReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.65 }}
          >
            Impact Highlights
          </motion.h1>
        </div>
      </div>
      <div className="parallax-glow absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-40" />
      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="container px-2 pt-3 pb-6 mx-auto mb-6">
            <div className="grid grid-cols-1 gap-8 mt-2 md:mt-3 md:grid-cols-2 lg:grid-cols-3">
              {/* Render all achievement cards in scrollable grid */}
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} index={index} {...achievement} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AchievementCard = (props) => {
  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    event.currentTarget.style.setProperty("--spotlight-x", `${x}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${y}px`);
  };

  return (
    <motion.div
      className="impact-card spotlight-card flex flex-col justify-around rounded-[20px] border px-6 py-4 transition-all duration-300 transform hover:border-teal-200 hover:shadow-lg hover:shadow-teal-200/20 dark:border-gray-700 dark:hover:border-transparent"
      initial={{ y: 28, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: props.index * 0.07, ease: "easeOut" }}
      onMouseMove={handlePointerMove}
    >
      {/* Achievement icon/logo */}
      <img
        src={props.icon}
        alt={props.event}
        className="w-[45px] h-[45px] rounded-full mt-1 mb-1"
      />
      <div className="flex flex-col justify-end mt-4 mb-1">
        <p className="font-poppins font-semibold text-[23px] text-white leading-[30px] tracking-[-0.015em] mb-2">
          {props.event}
        </p>
        <p className="font-poppins text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-100/70 mb-4">
          {props.position}
        </p>
        {props.content1 && (
          <p className="font-poppins font-normal text-slate-300 text-[14px] leading-[23px] mb-2">
            🚀 {props.content1}
          </p>
        )}
        {props.content2 && (
          <p className="font-poppins font-normal text-slate-300 text-[14px] leading-[23px] mb-2">
            ⚡ {props.content2}
          </p>
        )}
        {props.content3 && (
          <p className="font-poppins font-normal text-slate-300 text-[14px] leading-[23px] mb-4">
            🔥 {props.content3}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Achievements;
