import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./style";

import {
  Navbar,
  Hero,
  Education,
  SkillsAndExperience,
  Footer,
  Projects,
  Loading,
  Achievements,
  BackToTop,
} from "./components";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    // A div to wrap the entire application
    <div className="site-shell bg-primary w-full overflow-hidden">
      <div className="site-grain pointer-events-none fixed inset-0 z-[1]" />
      <AnimatePresence>
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <motion.section
            key="content"
            className="relative z-[2]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar />
              </div>
            </div>

            <div className={`bg-primary ${styles.flexStart} pt-[36px] md:pt-[44px]`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>

            <div
              className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}
            >
              <div className={`${styles.boxWidth}`}>
                <SkillsAndExperience />
                <Education />
              </div>
            </div>
            <Achievements />
            <div
              className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}
            >
              <div className={`${styles.boxWidth}`}>
                <Projects />
              </div>
            </div>
            <Footer />
            <BackToTop />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
