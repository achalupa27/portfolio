/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './features/**/*.{js,ts,jsx,tsx}', './themes.ts', './src/components/**/*.{js,ts,jsx,tsx}'],
    safelist: [
        // Base utilities
        'border',
        'backdrop-blur-sm',

        // Font families
        'font-mono',
        'font-serif',
        'font-sans',
        'font-[Inter]',

        // Border radius
        'rounded-none',
        'rounded-sm',
        'rounded-md',
        'rounded-lg',
        'rounded-xl',
        'rounded-2xl',
        'rounded-3xl',
        'rounded-full',

        // Text colors for all major colors
        ...['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'].flatMap((color) => [
            `text-${color}-50`,
            `text-${color}-100`,
            `text-${color}-200`,
            `text-${color}-300`,
            `text-${color}-400`,
            `text-${color}-500`,
            `text-${color}-600`,
            `text-${color}-700`,
            `text-${color}-800`,
            `text-${color}-900`,
            `text-${color}-950`,
        ]),

        // Background colors
        ...['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'].flatMap((color) => [
            `bg-${color}-50`,
            `bg-${color}-100`,
            `bg-${color}-200`,
            `bg-${color}-300`,
            `bg-${color}-400`,
            `bg-${color}-500`,
            `bg-${color}-600`,
            `bg-${color}-700`,
            `bg-${color}-800`,
            `bg-${color}-900`,
            `bg-${color}-950`,
        ]),

        // Border colors
        ...['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'].flatMap((color) => [
            `border-${color}-50`,
            `border-${color}-100`,
            `border-${color}-200`,
            `border-${color}-300`,
            `border-${color}-400`,
            `border-${color}-500`,
            `border-${color}-600`,
            `border-${color}-700`,
            `border-${color}-800`,
            `border-${color}-900`,
            `border-${color}-950`,
        ]),

        // Hover states
        ...['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'].flatMap((color) => [
            `hover:bg-${color}-50`,
            `hover:bg-${color}-100`,
            `hover:bg-${color}-200`,
            `hover:bg-${color}-300`,
            `hover:bg-${color}-400`,
            `hover:bg-${color}-500`,
            `hover:bg-${color}-600`,
            `hover:bg-${color}-700`,
            `hover:bg-${color}-800`,
            `hover:bg-${color}-900`,
            `hover:bg-${color}-950`,
        ]),

        // Opacity variations for backgrounds
        ...['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'].flatMap((color) => [
            `bg-${color}-500/10`,
            `bg-${color}-500/20`,
            `bg-${color}-500/30`,
            `bg-${color}-500/40`,
            `bg-${color}-500/50`,
            `bg-${color}-500/60`,
            `bg-${color}-500/70`,
            `bg-${color}-500/80`,
            `bg-${color}-500/90`,
        ]),

        // Basic colors
        'text-black',
        'text-white',
        'bg-black',
        'bg-white',
        'border-black',
        'border-white',
        'hover:bg-black',
        'hover:bg-white',

        // Gradient backgrounds
        'bg-gradient-to-r',
        'bg-gradient-to-l',
        'bg-gradient-to-t',
        'bg-gradient-to-b',
        'bg-gradient-to-tr',
        'bg-gradient-to-tl',
        'bg-gradient-to-br',
        'bg-gradient-to-bl',

        // Opacity variations for black/white
        'bg-black/10',
        'bg-black/20',
        'bg-black/30',
        'bg-black/40',
        'bg-black/50',
        'bg-white/10',
        'bg-white/20',
        'bg-white/30',
        'bg-white/40',
        'bg-white/50',
    ],
    theme: {
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
                        transform: 'scale(0.3)',
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
