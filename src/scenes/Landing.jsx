import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SocialMediaIcons from '../components/SocialMediaIcons';
const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

    const openCV = () => {
        const cv = '../assets/AMINE HEROUAL.pdf';

        window.open(cv, '_blank');
    };

    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >
            {/* Main section */}
            <div className="z-30 mt-24 md:mt-32 mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <p className="text-6xl md:text-8xl font-playfair z-10 text-center md:text-start">
                        Amine {''}
                        <span
                            className="xs:relative xs:text-deep-blue xs:font-bold z-20
                             before:absolute before:-left-[35px] before:-top-[130px] before:z-[-1]"
                        >
                            Heroual
                        </span>
                    </p>
                    <p className="mt-5 mb-7 text-3xl md:text-6xl font-playfair text-center md:text-start">
                        I'm a FullStack{' '}
                        <span
                            className="xs:relative xs:text-deep-blue xs:font-bold z-20
                             before:absolute before:-left-[35px] before:-top-[130px] before:z-[-1]"
                        >
                            Developer
                        </span>{' '}
                    </p>
                </motion.div>
                {/* Call to Actions */}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <AnchorLink
                        className="bg-white text-deep-blue rounded-sm py-3 px-7 font-semibold
                        hover:bg-teal hover:text-white transition duration-500"
                        onClick={() => setSelectedPage('contact')}
                        href="#contact"
                    >
                        Contact me
                    </AnchorLink>
                    <button
                        className=" bg-teal text-white rounded-sm py-3 px-7 font-semibold
                        hover:bg-white hover:text-deep-blue transition duration-500"
                        onClick={openCV}
                    >
                        Resume
                    </button>
                </motion.div>
                <motion.dev
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <SocialMediaIcons />
                </motion.dev>
            </div>
        </section>
    );
};

export default Landing;
