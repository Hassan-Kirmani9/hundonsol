'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import StartSteps1 from '../components/StartSteps1';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <div className="text-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            {/* Main circular object */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-800 to-amber-800 shadow-lg shadow-amber-500/50 animate-pulse"></div>

            {/* Inner glow effect */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-black to-black-300 opacity-50 blur-sm"></div>

            {/* Central image */}
            <div className="absolute w-20 h-20 md:w-52 md:h-32  flex items-center justify-center  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <img
                src="new2.png"
                alt="Central"
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            {/* Logo placeholders */}
            {['weex', 'm', 'c', 'b'].map((exchange, index) => {
              let link;
              switch (exchange) {
                case 'm':
                  link = 'https://www.mexc.com/exchange/HUND_USDT?_from=search_spot_trade';
                  break;
                case 'b':
                  link = 'https://www.bitmart.com/trade/en-US?symbol=HUND_USDT';
                  break;
                case 'weex':
                  link = 'https://www.weex.com/de/trade/HUND-USDT';
                  break;
                case 'c':
                  link = 'https://www.coinstore.com/spot/hundusdt?ts=1735472936909';
                  break;
                default:
                  link = '#'; // Fallback link
              }

              return (
                <a
                  key={index}
                  href={link}
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // For security purposes
                  className="absolute w-20 h-20 bg-black border-2 border-solid border-amber-400 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110"
                  style={{
                    top: `${50 + 40 * Math.sin((index * Math.PI) / 2)}%`,
                    left: `${50 + 40 * Math.cos((index * Math.PI) / 2)}%`,
                    transform: `translate(-50%, -50%)`,
                  }}
                >
                  <img
                    src={`/${exchange}.png`}
                    alt={exchange}
                    className={`w-32 ${index === 0 ? 'h-12' : 'h-[22rem]'} object-contain rounded-full cursor-pointer`}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Exchanges " />
        <TitleText title={<>Listed on Top Exchanges</>} />
        <p className="mt-[16px] font-normal lg:text-[20px] mb-1 !text-[12px] text-secondary-white">
          Together, we shape the future of HUND on Solana.
        </p>
        <button className="button-85 w-[10rem] mt-3" type="button" onClick={() => window.open('https://hub.xyz/hund', '_blank')}
        >
          BUY NOW
        </button>
        <style jsx>{`
          .button-85 {
            padding: 0.6em 2em;
            border: none;
            outline: none;
            color: rgb(255, 255, 255);
            background: #111;
            cursor: pointer;
            position: relative;
            z-index: 0;
            border-radius: 10px;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
          }

          .button-85:before {
            content: "";
            background: linear-gradient(
              45deg,
              #ff0000,
              #ff7300,
              #fffb00,
              #48ff00,
              #00ffd5,
              #002bff,
              #7a00ff,
              #ff00c8,
              #ff0000
            );
            position: absolute;
            top: -2px;
            left: -2px;
            background-size: 400%;
            z-index: -1;
            filter: blur(5px);
            -webkit-filter: blur(5px);
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            animation: glowing-button-85 20s linear infinite;
            transition: opacity 0.3s ease-in-out;
            border-radius: 10px;
          }

          @keyframes glowing-button-85 {
            0% {
              background-position: 0 0;
            }
            50% {
              background-position: 400% 0;
            }
            100% {
              background-position: 0 0;
            }
          }

          .button-85:after {
            z-index: -1;
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: black;
            left: 0;
            top: 0;
            border-radius: 10px;
          }
        `}</style>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
