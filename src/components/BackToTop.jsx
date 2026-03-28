import React from "react";
import { arrowUp } from "../assets";

const BackToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 rounded-full border border-slate-700 bg-slate-900/90 p-3 shadow-lg shadow-cyan-500/10 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-teal-300 hover:shadow-cyan-400/20 ${
        isVisible
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-6 scale-90 opacity-0"
      }`}
    >
      <img src={arrowUp} alt="" className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;
