'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const TestimonialCard = ({ content, name, title, image, index }) => (
    <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className="flex flex-col items-center p-6 border border-orange-500/20 rounded-2xl backdrop-blur-sm bg-black/30"
    >
        <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-orange-500"
        />
        <p className="text-white text-center mb-4">{content}</p>
        <h4 className="text-orange-500 font-bold">{name}</h4>
        <p className="text-gray-400 text-sm">{title}</p>
    </motion.div>
);

const Testimonials = () => {
    const testimonials = [
        {
            content: "HUND has revolutionized the way I interact with blockchain technology. Their innovative approach and user-friendly platform have made it incredibly easy for me to stake and earn rewards.",
            name: "Alex Johnson",
            title: "Crypto Enthusiast",
            image: "https://picsum.photos/80?random=1" // Reliable random image
        },
        {
            content: "As an NFT artist, I'm thrilled to be part of the HUND community. Their NFT collection has provided me with a fantastic platform to showcase my work and connect with other creators.",
            name: "Sophia Lee",
            title: "Digital Artist",
            image: "https://picsum.photos/80?random=2" // Reliable random image
        },
        {
            content: "HUNDPAD has been a game-changer for our blockchain project. The support and resources provided have been instrumental in our growth and success in the Web3 space.",
            name: "Michael Chen",
            title: "Blockchain Developer",
            image: "https://picsum.photos/80?random=3" // Reliable random image
        }
    ];

    return (
        <section className={`${styles.paddings} relative z-10`}>
            <div className="gradient-02 z-0" />
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title="| Testimonials" textStyles="text-center" />
                <TitleText
                    title={<>What Our Community Says</>}
                    textStyles="text-center"
                />

                <motion.div
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className="mt-[50px] flex flex-col gap-8 md:flex-row"
                >
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
                    ))}
                </motion.div>

                <motion.div
                    variants={zoomIn(0.4, 1)}
                    className="mt-[50px] flex justify-center cursor-pointer"
                    onClick={() => window.open("https://t.me/hundcoin", "_blank")}

                >
                    <img
                        src="/stamp.png"
                        alt="stamp"
                        className="w-[155px] h-[155px] object-contain opacity-50 hover:opacity-100 transition-opacity"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Testimonials;
