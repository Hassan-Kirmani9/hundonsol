'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const RoadmapCard = ({ number, title, description }) => (
  <motion.div
    variants={fadeIn('up', 'tween', 0.2, 1)}
    className="relative flex-1 min-w-[250px]"
  >
    <div className="bg-[#1A1A1A] border border-orange-500/20 rounded-lg p-6 backdrop-blur-sm h-full">
      <h3 className="text-2xl font-bold mb-4 text-white uppercase">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="bg-orange-500 rounded-lg px-4 py-2 text-black font-bold">
        {number.toString().padStart(2, '0')}
      </div>
      <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-orange-500 mx-auto" />
    </div>
  </motion.div>
);

const WhatsNew = () => {
  const roadmapItems = [
    {
      number: 1,
      title: "Staking & Rewards",
      description: "Gain the exclusive ability to accumulate $HUND tokens through our innovative staking program. Maximize your earnings potential by leveraging your existing token holdings."
    },
    {
      number: 2,
      title: "NFT Collection",
      description: "Introducing our NFT collection, merging digital art with blockchain for unique ownership. Join our vibrant HUND community through engaging marketing and outreach. Shape the future with us!"
    },
    {
      number: 3,
      title: "HUNDPAD",
      description: "HundPAD is the base for high quality, well planned and passioned web3 projects, developers, and investors on the Blockchain"
    }
  ];

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex justify-center flex-col text-center"
        >
          <TypingText title="| Roadmap" />
          <TitleText title={<>HUND ROADMAP</>} />
        </motion.div>

        <motion.div 
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="mt-[48px] relative"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-orange-500/20 blur-3xl" />
          </div>

          {/* Roadmap Cards */}
          <div className="grid md:grid-cols-3 gap-16 mt-20 relative z-10">
            {roadmapItems.map((item, index) => (
              <RoadmapCard
                key={item.number}
                number={item.number}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {/* Connecting Line */}
          <div className="hidden md:block absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent top-1/2 transform -translate-y-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;