/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './features/**/*.{js,ts,jsx,tsx}', './themes.ts', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        // fontFamily: {
        //     sans: ['Inter'],
        // },
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {},
            animation: {
                meteor: 'meteor 5s linear infinite',
                gradient: 'gradient 8s linear infinite',
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'frost-shimmer': 'frost-shimmer 3s linear infinite',
                'ice-float': 'ice-float 3s ease-in-out infinite',
                'crystal-spin': 'crystal-spin 4s linear infinite',
                freeze: 'freeze 0.5s ease-out forwards',
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
                gradient: {
                    to: {
                        backgroundPosition: 'var(--bg-size) 0',
                    },
                },
                'accordion-down': {
                    from: {
                        height: '0',
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                    to: {
                        height: '0',
                    },
                },
                'frost-shimmer': {
                    '0%, 100%': {
                        'background-position': '0% 50%',
                    },
                    '50%': {
                        'background-position': '100% 50%',
                    },
                },
                'ice-float': {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                    },
                    '50%': {
                        transform: 'translateY(-10px)',
                    },
                },
                'crystal-spin': {
                    '0%': {
                        transform: 'rotate(0deg)',
                    },
                    '100%': {
                        transform: 'rotate(360deg)',
                    },
                },
                freeze: {
                    '0%': {
                        opacity: '0',
                        transform: 'scale(0.9)',
                        filter: 'blur(10px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'scale(1)',
                        filter: 'blur(0)',
                    },
                },
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
