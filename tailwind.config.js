/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                blue: '#0369a1',
                teal: '#6366f1',
                green: '#facc15',
                grey: '#EDEDED',
                'deep-blue': '#4338ca',
                'dark-grey': '#757575',
                'opaque-black': 'rgba(0,0,0,0.35)',
            },
            backgroundImage: (theme) => ({
                'gradient-rainbow':
                    'linear-gradient(90deg, rgba(101,96,191,1) 0%, rgba(141,87,213,1) 63%, rgba(165,82,226,1) 100%);',

                'gradient-rainblue':
                    ' linear-gradient(90deg, rgba(101,96,191,1) 0%, rgba(141,87,213,1) 63%, rgba(165,82,226,1) 100%);',
            }),
            fontFamily: {
                playfair: ['Playfair Display', 'serif'],
                opensans: ['Open Sans', 'sans-serif'],
            },
            content: {
                brush: "url('./assets/brush.png')",
                // person1: "url('./assets/person-1.png')",
                // person2: "url('./assets/person-2.png')",
                // person3: "url('./assets/person-3.png')",
                person1: "url('./assets/Armin_Arlelt.png')",
                person2: "url('./assets/Gabi_Braun.png')",
                person3: "url('./assets/Bertholdt_Hoover.png')",
            },
        },
        screens: {
            xs: '480px',
            ss: '620px',
            sm: '768px',
            md: '1060px',
            lg: '1200px',
            xl: '1700px',
        },
    },
    plugins: [],
};
