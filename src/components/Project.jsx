import React from 'react';
import { motion } from 'framer-motion';
const Project = ({ title, variants, description, demo, code }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
bg-grey z-30 flex flex-col justify-center items-center text-center p-2 text-deep-blue`;
    const projectTitle = title.split(' ').join('-').toLowerCase();

    return (
        <motion.div variants={variants} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7 text-black">{description}</p>
                <div className="flex items-center justify-center gap-2">
                    <a
                        className="bg-gradient-rainblue text-deep-blue rounded-sm py-2 px-5 mt-3 font-semibold 
                        hover:bg-blue hover:text-white transition duration-500 cursor-pointer"
                        href={demo}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Demo
                    </a>
                    <a
                        className="bg-gradient-rainblue text-deep-blue rounded-sm py-2 px-5 mt-3 font-semibold 
                        hover:bg-blue hover:text-white transition duration-500 cursor-pointer"
                        href={code}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Code
                    </a>
                </div>
            </div>
            <img
                src={`../assets/projects/${projectTitle}.png`}
                alt={projectTitle}
            />
        </motion.div>
    );
};

export default Project;
