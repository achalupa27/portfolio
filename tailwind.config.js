/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './themes.ts', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Inter'],
        },
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {},
            animation: {
                meteor: 'meteor 5s linear infinite',
            },
            keyframes: {
                meteor: {
                    '0%': {
                        transform: 'rotate(215deg) translateX(0)',
                        opacity: '1',
                    },
                    '70%': {
                        opacity: '1',
                    },
                    '100%': {
                        transform: 'rotate(215deg) translateX(-500px)',
                        opacity: '0',
                    },
                },
            },
        },
    },
    plugins: [require('tailwind-scrollbar'), require('tailwindcss-animate')],
};
