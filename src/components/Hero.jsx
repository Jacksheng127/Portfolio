import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../assets/resume_cv.pdf";
import { useState, useEffect } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const AnimatedTitle = () => {
  const words = ["Student", "Developer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentWordIndex} // Ensure React re-renders with a new key for word animation
        variants={wordAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
      >
        {words[currentWordIndex]}
      </motion.span>
    </AnimatePresence>
  );
};

const Hero = () => {
  return (
    <section id="home">
      <div className="border-b border-neutral-900 pb-4 lg:scroll-mb-3.5">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-14 text-4xl font-thin tracking-tight lg:mt-14 lg:text-6xl"
              >
                LIM JACK SHENG
              </motion.h1>
              <div>
                <AnimatedTitle />
              </div>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter"
              >
                {HERO_CONTENT}
              </motion.p>
              <motion.p
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
              >
                <a
                  href={resume}
                  download="resume.pdf"
                  className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
                >
                  DOWNLOAD RESUME
                </a>
              </motion.p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src={profilePic}
                alt="Jack Sheng"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;