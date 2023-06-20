import React from 'react';

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-3 ">
            <a
                href="https://www.linkedin.com/in/amine-heroual-9066b3ab/"
                className="border-4 border-teal p-1.5 bg-teal rounded-full hover:opacity-50 transition duration-500"
                target="_blank"
                rel="noreferrer"
            >
                <img src="../assets/linkedin.png" alt="linkedin-link" />
            </a>

            <a
                href="https://www.twitter.com"
                className="border-4 border-teal p-1.5 bg-teal rounded-full hover:opacity-50 transition duration-500"
                target="_blank"
                rel="noreferrer"
            >
                <img src="../assets/twitter.png" alt="twitter-link" />
            </a>

            <a
                href="https://www.facebook.com"
                className="border-4 border-teal p-1.5 bg-teal rounded-full hover:opacity-50 transition duration-500"
                target="_blank"
                rel="noreferrer"
            >
                <img src="../assets/facebook.png" alt="facebook-link" />
            </a>
            <a
                href="https://github.com/AmineHeroual"
                className="border-4 border-teal p-1.5 bg-teal rounded-full hover:opacity-50 transition duration-500"
                target="_blank"
                rel="noreferrer"
            >
                <img src="../assets/github.png" alt="github-link" />
            </a>
        </div>
    );
};

export default SocialMediaIcons;
