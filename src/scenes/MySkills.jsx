import React from 'react';
import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import Skills from '../components/Skills';
const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
    return (
        <section id="skills" className="pt-10 pb-24">
            {/* Header and Images */}

            <div className="md:flex md:justify-center md:gap-16 mt-44">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        ABOUT <span className="text-teal"> ME</span>
                    </p>
                    <p className="font-playfair font-semibold text-2xl text-teal mb-5">
                        Get to know more about me
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        My Name is{' '}
                        <span className="text-teal"> Amine Heroual</span> and
                        I'm a passionate FullStack Web Developer using web
                        technologies to build amazing products and focusing on
                        solving problems for different niches and different
                        inducstries using the power of technology.
                    </p>
                    <p className="mt-10 mb-7">
                        I will love to hear from you, Whether is't a project,
                        job opportunity, or simply for a friendly chat.Please
                        Feel free to contact me.
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div className="flex  justify-center items-center mt-16">
                            <Skills />
                        </div>
                    ) : (
                        <div className="flex justify-center items-center mt-16 ">
                            <Skills />
                        </div>
                    )}
                </div>
            </div>
            {/* Skills */}
        </section>
    );
};

export default MySkills;
