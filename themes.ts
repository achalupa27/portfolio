export const themes: Record<ThemeName, ThemeColors> = {
    light: {
        text: 'text-neutral-900',
        bg: 'bg-neutral-100',
        bgSecondary: 'bg-white',
        border: 'border border-neutral-200',
        rounded: 'rounded-lg',
        hover: {
            bg: 'hover:bg-neutral-900',
            text: 'hover:text-neutral-100',
        },
        placeholder: 'placeholder:text-neutral-900/70',
        inverted: {
            text: 'text-neutral-100',
            bg: 'bg-neutral-900',
        },
    },
    dark: {
        text: 'text-neutral-100',
        bg: 'bg-neutral-950',
        bgSecondary: 'bg-neutral-900',
        border: 'border border-neutral-800',
        rounded: 'rounded-0',
        hover: {
            bg: 'hover:bg-white',
            text: 'hover:text-black',
        },
        placeholder: 'placeholder:text-neutral-100/70',
        inverted: {
            text: 'bg-neutral-950',
            bg: 'text-neutral-100',
        },
    },
    ice: {
        text: 'text-white',
        bg: 'bg-[#9db3b4]',
        border: 'border border-white',
        hover: {
            bg: 'hover:bg-white',
            text: 'hover:text-[#9db3b4]',
        },
        placeholder: 'placeholder:text-white/70',
        inverted: {
            text: 'text-[#9db3b4]',
            bg: 'bg-white',
        },
    },
    water: {
        text: 'text-white',
        bg: 'bg-blue-600',
        border: 'border border-white',
        hover: {
            bg: 'hover:bg-white',
            text: 'hover:text-blue-600',
        },
        placeholder: 'placeholder:text-white/70',
        inverted: {
            text: 'text-blue-600',
            bg: 'bg-white',
        },
    },
    earth: {
        text: 'text-green-600',
        bg: 'bg-[#422211]',
        border: 'border border-green-600',
        hover: {
            bg: 'hover:bg-green-600',
            text: 'hover:text-[#422211]',
        },
        placeholder: 'placeholder:text-green-600/70',
        inverted: {
            text: 'text-[#422211]',
            bg: 'bg-green-600',
        },
    },
    fire: {
        text: 'text-black',
        bg: 'bg-red-700',
        border: 'border border-black',
        hover: {
            bg: 'hover:bg-black',
            text: 'hover:text-red-500',
        },
        placeholder: 'placeholder:text-black/70',
        inverted: {
            text: 'text-red-500',
            bg: 'bg-black',
        },
    },
    rain: {
        text: 'text-stone-900',
        bg: 'bg-gray-400',
        border: 'border border-stone-900',
        hover: {
            bg: 'hover:bg-stone-800',
            text: 'hover:text-gray-400',
        },
        placeholder: 'placeholder:text-stone-900/70',
        inverted: {
            text: 'text-gray-400',
            bg: 'bg-stone-800',
        },
    },
    wind: {
        text: 'text-stone-700',
        bg: 'bg-gray-100',
        border: 'border border-stone-700',
        hover: {
            bg: 'hover:bg-stone-700',
            text: 'hover:text-gray-100',
        },
        placeholder: 'placeholder:text-stone-700/70',
        inverted: {
            text: 'text-gray-100',
            bg: 'bg-stone-700',
        },
    },
    space: {
        text: 'text-white',
        bg: 'bg-black',
        border: 'border border-white',
        hover: {
            bg: 'hover:bg-white',
            text: 'hover:text-black',
        },
        placeholder: 'placeholder:text-white/70',
        inverted: {
            text: 'text-black',
            bg: 'bg-white',
        },
    },
};
