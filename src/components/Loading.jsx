import styles from "../style";
import { motion } from "framer-motion";
import { venkatLogo } from "../assets";

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className={`w-[100vw] h-[100vh] ${styles.flexCenter} relative overflow-hidden bg-primary`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeOut" } }}
      transition={{
        duration: 0.45,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="loader-grid"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <div className="relative w-[290px] h-[290px] flex items-center justify-center">
          <div className="loader-ring loader-ring-atmosphere"></div>
          <div className="loader-glow"></div>
          <div className="loader-ring loader-ring-outermost"></div>
          <div className="loader-ring loader-ring-outer"></div>
          <div className="loader-ring loader-ring-mid"></div>
          <div className="loader-ring loader-ring-inner"></div>
          <div className="loader-ring loader-ring-core"></div>
          <div className="loader-ring loader-ring-core-inner"></div>

          <div className="loader-orbit loader-orbit-a">
            <span className="loader-node"></span>
          </div>
          <div className="loader-orbit loader-orbit-b">
            <span className="loader-node loader-node-alt"></span>
          </div>
          <div className="loader-orbit loader-orbit-c">
            <span className="loader-node loader-node-small"></span>
          </div>
          <div className="loader-orbit loader-orbit-d">
            <span className="loader-node loader-node-d"></span>
          </div>
          <div className="loader-orbit loader-orbit-e">
            <span className="loader-node loader-node-e"></span>
          </div>

          <motion.div
            className="relative z-[2] w-[120px] h-[120px] rounded-[34px] border border-white/10 bg-[#09101d]/80 backdrop-blur-md shadow-[0_0_48px_rgba(51,187,207,0.18)] flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={venkatLogo}
              alt="Venkatraman Sundararajan"
              className="w-[92px] h-[92px]"
            />
          </motion.div>
        </div>

        <motion.p
          className="mt-2 font-poppins text-[15px] tracking-[0.18em] uppercase text-cyan-100/80"
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
        >
          Initializing Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loading;
