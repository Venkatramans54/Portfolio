import styles from "../style";
import { motion } from "framer-motion";
import React, { Suspense } from "react";
import animationData from "../lotties/person-coding.json";
import { aboutMe } from "../constants";

const Lottie = React.lazy(() => import("react-lottie-player/dist/LottiePlayerLight"));

const defaultOptions = {
  loop: true,
  play: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  const [pointer, setPointer] = React.useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;

    setPointer({
      x: px,
      y: py,
    });
  };

  const resetPointer = () => {
    setPointer({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="hero-parallax-scene flex flex-col py-2 md:flex-row md:items-center md:py-6"
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
    >
      <div
        className={`relative flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 md:pr-6 lg:pr-10`}
      >
        <motion.div
          className="pointer-events-none absolute -left-10 top-4 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(51,187,207,0.18)_0%,rgba(51,187,207,0.08)_32%,rgba(51,187,207,0)_72%)] blur-2xl"
          animate={{ x: pointer.x * -18, y: pointer.y * -14 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, mass: 0.9 }}
        />
        <motion.div
          className="pointer-events-none absolute left-24 top-24 h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle_at_center,rgba(165,245,255,0.12)_0%,rgba(165,245,255,0)_72%)] blur-3xl"
          animate={{ x: pointer.x * 10, y: pointer.y * 8 }}
          transition={{ type: "spring", stiffness: 90, damping: 18, mass: 0.9 }}
        />

        <motion.div
          className="relative flex flex-row items-start justify-between w-full text-white"
          animate={{ x: pointer.x * -4, y: pointer.y * -3 }}
          transition={{ type: "spring", stiffness: 110, damping: 18, mass: 0.8 }}
        >
          <div className="flex-1 max-w-[600px]">
            <p className="font-poppins text-[20px] font-medium leading-[28px] text-slate-200/85 sm:text-[22px]">
              Hi there, I&apos;m
            </p>
            <h1 className="mt-1 font-poppins font-semibold text-[50px] leading-[54px] text-white ss:text-[70px] ss:leading-[72px]">
              <span className="text-gradient hero-name-glow">{aboutMe.name}</span>
            </h1>
            <div className="hero-role-badge mt-4">
              <span className="hero-role-dot" aria-hidden="true" />
              <span className="hero-role-text">{aboutMe.heroRole}</span>
            </div>
            <motion.div
              className="mt-3 flex max-w-[540px] flex-wrap gap-2.5"
              animate={{ x: pointer.x * -8, y: pointer.y * -6 }}
              transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.8 }}
            >
              {[
                "AI-Driven Quality Engineering",
                "Quality Infrastructure",
                "Developer Enablement",
              ].map((label) => (
                <div
                  key={label}
                  className="inline-flex rounded-full border border-teal-200/10 bg-slate-900/50 px-3.5 py-1.5 font-poppins text-[12px] font-medium tracking-[0.04em] text-slate-200/88"
                >
                  {label}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <p
          className={`${styles.paragraph} relative mt-4 max-w-[540px] text-[17px] leading-[29px] text-slate-300`}
        >
          {aboutMe.intro}
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} relative mt-8 md:mt-0 md:min-h-[480px]`}
      >
        <div className="hero-orbit-system pointer-events-none absolute inset-[6%] z-[1]">
          <div className="hero-orbit hero-orbit-a">
            <span className="hero-orbit-node hero-orbit-node-a" />
          </div>
          <div className="hero-orbit hero-orbit-b">
            <span className="hero-orbit-node hero-orbit-node-b" />
          </div>
          <div className="hero-orbit hero-orbit-c">
            <span className="hero-orbit-node hero-orbit-node-c" />
          </div>
        </div>
        <motion.div
          className="hero-illustration-spotlight pointer-events-none absolute inset-[8%] z-[0] rounded-full"
          animate={{
            x: pointer.x * 18,
            y: pointer.y * 14,
          }}
          transition={{ type: "spring", stiffness: 55, damping: 16, mass: 1.1 }}
        />
        <motion.div
          className="relative z-index-[5] h-[88%] w-[78%] md:w-[82%]"
          animate={{ x: pointer.x * 12, y: pointer.y * 10 }}
          transition={{ type: "spring", stiffness: 70, damping: 20, mass: 1 }}
        >
          <Suspense fallback={<div className="h-full min-h-[320px] w-full" />}>
            <Lottie {...defaultOptions} />
          </Suspense>
        </motion.div>
        <motion.div
          className="absolute bottom-20 z-[1] h-[50%] w-[50%] rounded-full white__gradient"
          animate={{ x: pointer.x * 8, y: pointer.y * 6 }}
          transition={{ type: "spring", stiffness: 60, damping: 18, mass: 1 }}
        />
      </div>
    </section>
  );
};

export default Hero;
