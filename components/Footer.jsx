'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Token Address
        </h4>
        <button
          type="button"
          className="mt-4 flex items-center h-fit py-4 px-6 bg-[#8b45135f] rounded-[32px] gap-[12px]"
        >
          <span className="font-normal text-[16px] text-white">
            2XPqoKfJitk8YcMDGBKy7CMzRRyF2X9PniZeCykDUZev
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            HUNDONSOL
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2024 HUNDONSOL. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url} // Image URL
                alt={social.name} // Alt text for accessibility
                className="w-[24px] h-[24px] object-contain cursor-pointer text-white" // Tailwind CSS classes
                onClick={() => window.open(social.link, '_blank')} // Open link in a new tab
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
