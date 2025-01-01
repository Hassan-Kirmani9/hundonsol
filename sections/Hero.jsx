'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.play();
    }
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .spin-animation {
          animation: spin 12s linear infinite;
        }
      `}</style>
      <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <div className="flex justify-center items-center flex-col relative z-10">

            <div className="flex justify-center items-center flex-col relative z-10">

              <motion.div
                variants={textVariant(1.2)}
                className="flex flex-row justify-center items-center"
              >
                <h1 className={styles.heroHeading}>Hun</h1>
                <div className={styles.heroDText} />
                <h1 className={styles.heroHeading}>Onsol</h1>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className="relative w-full md:-mt-[20px] -mt-[12px]"
          >
            <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

            <video
              ref={videoRef}
              src="/dog.mp4"
              alt="hero_cover"
              className="w-full sm:h-[550px] h-[550px] object-cover rounded-tl-[140px] z-10 relative"
              autoPlay
              loop
              muted
              playsInline
            ></video>

            <a href="https://t.me/hundcoin" target="_blank">
              <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
                <img
                  src="/stamp.png"
                  alt="stamp"
                  className="sm:w-[200px] w-[250px] sm:h-[195px] h-[100px] spin-animation"
                />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
