import React, { useEffect, useRef, useState } from "react";
import { projects } from "../constants";
import { motion } from "framer-motion";

const Project = (props) => {
  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    event.currentTarget.style.setProperty("--spotlight-x", `${x}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${y}px`);
  };

  return (
    <motion.div
      className={`project-card spotlight-card snap-start flex-shrink-0 px-8 py-6 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card w-[320px] sm:w-[400px] md:w-[500px] mr-6 sm:mr-8 md:mr-10 ${
        props.isActive
          ? "project-card-active"
          : props.isAdjacent
          ? "project-card-adjacent"
          : "project-card-distant"
      }`}
      initial={{ y: 26, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: props.index * 0.08, ease: "easeOut" }}
      onMouseMove={handlePointerMove}
    >
      <div className="flex flex-col items-start">
        <img
          className="project-card-logo flex-shrink-0 object-contain w-20 h-20"
          src={props.image}
          alt=""
        />

        <div className="mt-4 w-full">
          <h1 className="font-poppins text-[24px] font-semibold capitalize leading-[30px] tracking-[-0.015em] text-gray-700 text-gradient group-hover:text-white md:text-[28px] md:leading-[34px]">
            {props.title}
          </h1>
          <p className="mt-4 mb-3 font-poppins text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
            Tech Stack
          </p>
          <div className="capitalize text-gray-500 dark:text-gray-300 group-hover:text-gray-300">
            <div className="flex flex-wrap gap-4">
              {props.stack.map((tech, index) => (
                <div
                  key={tech.id}
                  index={index}
                  className="text-dimWhite text-[20px] hover:text-teal-200 tooltip"
                >
                  {React.createElement(tech.icon)}
                  <span className="tooltiptext">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 font-poppins text-[15px] leading-[26px] text-slate-300 group-hover:text-gray-300">
        {props.content}
      </p>
    </motion.div>
  );
};

const Projects = () => {
  const headingReveal = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const [cardTotalWidth, setCardTotalWidth] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const card = containerRef.current.querySelector(".project-card");
        if (card) {
          const cardWidth = card.offsetWidth;
          const cardMargin = parseInt(
            window.getComputedStyle(card).marginRight,
            10
          );
          setCardTotalWidth(cardWidth + cardMargin);
        }
      }
    };

    const updateScrollState = () => {
      if (!containerRef.current) return;

      const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
      const scrollTolerance = 8;
      setCanScrollPrev(scrollLeft > scrollTolerance);
      setCanScrollNext(scrollLeft + clientWidth < scrollWidth - scrollTolerance);

      const viewportCenter = scrollLeft + clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(viewportCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
      setCanScrollPrev(scrollLeft > scrollTolerance && closestIndex > 0);
    };

    updateCardWidth();
    updateScrollState();
    window.addEventListener("resize", updateCardWidth);
    window.addEventListener("resize", updateScrollState);
    containerRef.current?.addEventListener("scroll", updateScrollState);

    return () => {
      window.removeEventListener("resize", updateCardWidth);
      window.removeEventListener("resize", updateScrollState);
      containerRef.current?.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  const scrollProjects = (direction) => {
    if (!containerRef.current || !cardTotalWidth) return;

    containerRef.current.scrollBy({
      left: direction * cardTotalWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="section-divider overflow-hidden pt-6 md:pt-7">
      <motion.h1
        className="heading-reveal flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[76px] leading-[70px] tracking-[-0.02em]"
        variants={headingReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.65 }}
      >
        Projects
      </motion.h1>

      <div className="container px-2 pt-3 pb-3 mx-auto mb-3">
        <div className="relative">
          <button
            onClick={() => scrollProjects(-1)}
            disabled={!canScrollPrev}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-white transition-colors hover:border-teal-300 hover:text-teal-200 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous project"
          >
            &lt;
          </button>
          <div
            ref={containerRef}
            className="mb-8 flex snap-x snap-mandatory overflow-x-auto scroll-smooth px-12 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
              >
                <Project
                  index={index}
                  isActive={activeIndex === index}
                  isAdjacent={Math.abs(activeIndex - index) === 1}
                  {...project}
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollProjects(1)}
            disabled={!canScrollNext}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-white transition-colors hover:border-teal-300 hover:text-teal-200 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Next project"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
