import React from 'react';
import { motion } from 'framer-motion';
const Skills = () => {
    return (
        <div className="grid grid-cols-4 gap-x-4 mx-auto -ml-3">
            <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="relative w-20  md:w-24 lg:28 h-8">
                    <div className="z-10 border-2 border-teal hover:bg-teal hover: hover:text-white transition duration-300">
                        <p className="font-playfair font-semibold text-sm md:text-xl m-3 mx-auto text-center">
                            HTML
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="relative w-20  md:w-24 lg:28 h-8">
                    <div className="z-10 border-2 border-teal hover:bg-teal hover:text-white transition duration-300">
                        <p className="font-playfair font-semibold text-sm md:text-xl m-3 mx-auto text-center">
                            CSS
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="relative w-20  md:w-24 lg:28 h-8">
                    <div className="z-10 border-2 border-teal hover:bg-teal hover:text-white transition duration-300">
                        <p className="font-playfair font-semibold text-sm md:text-xl m-3 mx-auto text-center">
                            JavaScript
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="relative w-20  md:w-24 lg:28 h-8">
                    <div className="z-10 border-2 border-teal hover:bg-teal hover:text-white transition duration-300">
                        <p className="font-playfair font-semibold text-sm md:text-xl m-3 mx-auto text-center">
                            ReactJS
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="relative w-20  md:w-24 lg:28 h-8">
                    <div className="z-10 border-2 border-teal hover:bg-teal hover:text-white transition duration-300">
                        <p className="font-playfair font-semibold text-sm md:text-xl m-3 mx-auto text-center">
                            NextJS
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 1, duration: 0.8 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="relative w-20  md:w-24 lg:28 h-8">
                    <div className="z-10 border-2 border-teal hover:bg-teal hover:text-white transition duration-300">
                        <p className="font-playfair font-semibold text-sm md:text-xl m-3 mx-auto text-center">
                            PHP
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="relative w-20  md:w-24 lg:28 h-8">
                    <div className="z-10 border-2 border-teal hover:bg-teal hover:text-white transition duration-300">
                        <p className="font-playfair font-semibold text-sm md:text-xl m-3 mx-auto text-center">
                            Laravel
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="relative w-20  md:w-24 lg:28 h-8">
                    <div className="z-10 border-2 border-teal hover:bg-teal hover:text-white transition duration-300">
                        <p className="font-playfair font-semibold text-sm md:text-xl m-3 mx-auto text-center">
                            MySQL
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="relative w-20  md:w-24 lg:28 h-8">
                    <div className="z-10 border-2 border-teal hover:bg-teal hover:text-white transition duration-300">
                        <p className="font-playfair font-semibold text-sm md:text-xl m-3 mx-auto text-center">
                            MongoDB
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="relative w-20  md:w-24 lg:28 h-8">
                    <div className="z-10 border-2 border-teal hover:bg-teal hover:text-white transition duration-300">
                        <p className="font-playfair font-semibold text-sm md:text-xl m-3 mx-auto text-center">
                            NodeJS
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 2, duration: 0.8 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="relative w-20  md:w-24 lg:28 h-8">
                    <div className="z-10 border-2 border-teal hover:bg-teal hover:text-white transition duration-300">
                        <p className="font-playfair font-semibold text-sm md:text-xl m-3 mx-auto text-center">
                            Git
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;
