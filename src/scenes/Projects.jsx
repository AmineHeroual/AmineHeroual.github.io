import React from 'react';
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import Project from '../components/Project';
const Projects = () => {
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const projectVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <section id="projects" className="pt-48 pb-48">
            {/* Header */}
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="">
                    <p className="font-playfair font-semibold text-4xl">
                        MY <span className="text-teal">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                {/* <LineGradient width="mx-auto w-1/3" /> */}
                <p className="mt-5 mb-10 font-bold">
                    Here you can find some of the projects that i created
                    recently
                </p>
            </motion.div>
            {/* Projects */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Row #1 */}
                    {/* <div
                        className="flex justify-center text-center items-center p-10 bg-teal
                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        BEAUTIFUK USER INTERFACES
                    </div> */}
                    <Project
                        title="project1"
                        description="Yourcar is a small app  sales cars with some models we using React for building this app and Tailwindcss Redux, Redux-toolkit link-route from react and more features..."
                        demo="https://you-car.vercel.app/"
                        code="https://github.com/AmineHeroual/you-car"
                    />
                    <Project
                        title="project2"
                        description="YourStore is a small cart app for shoes with nice effect  we using NextJS for building this app and Tailwindcss and more features..."
                        demo="https://your-store-ruby.vercel.app//"
                        code="https://github.com/AmineHeroual/your-store"
                    />
                    <Project
                        title="project3"
                        description="DZFLIX is a movie app display the latest movies from api you can save tyour favorite movies in your card we using react and tailwindcss"
                        demo="https://dzflix.surge.sh/"
                        code="https://github.com/AmineHeroual/dzflix"
                    />

                    {/* Row #2 */}
                    <Project
                        title="project4"
                        description="YourNotes is a todo-list app with ability to create new account ,and controle your tod and task in the easy way "
                        demo="https://mern-your-notes.onrender.com/"
                        code="https://github.com/AmineHeroual/younotes-production"
                    />
                    <Project
                        title="project5"
                        description="YourNotes is a todo-list app with ability to create new account ,and controle your tod and task in the easy way "
                        demo="https://mern-jobify-hm9t.onrender.com"
                        code="https://github.com/AmineHeroual/jobify-production"
                    />
                    {/* <Project title="Project 5" /> */}

                    {/* Row #3 */}
                    {/* <Project title="Project 6" /> */}
                    {/* <Project title="Project 7" /> */}

                    {/* <div
                        className="flex justify-center text-center items-center p-10 bg-blue
                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        SMOOTH USER EXPERIENCE
                    </div> */}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
