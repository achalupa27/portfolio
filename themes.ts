export const themes: Record<ThemeName, ThemeColors> = {
    light: {
        text: 'text-neutral-900',
        bg: 'bg-neutral-100',
        bgSecondary: 'bg-white',
        border: 'border border-neutral-200',
        rounded: 'rounded-lg',
        invertedText: 'text-neutral-100',
        invertedBg: 'bg-neutral-900',
        hover: 'hover:bg-neutral-900/30',
        font: 'font-[Inter]',
    },
    dark: {
        text: 'text-neutral-100',
        bg: 'bg-neutral-950',
        bgSecondary: 'bg-neutral-900',
        border: 'border border-neutral-800',
        rounded: 'rounded-none',
        hover: 'hover:bg-white',
        invertedText: 'text-neutral-950',
        invertedBg: 'bg-neutral-100',
        font: 'font-[Inter]',
    },
    ice: {
        text: 'text-slate-800',
        bg: 'bg-[#86b4c9]',
        bgSecondary: 'bg-[#eaf6fc]/80 backdrop-blur-sm',
        border: 'border border-white/60',
        rounded: 'rounded-md',
        hover: 'hover:bg-white/20',
        invertedText: 'text-slate-800',
        invertedBg: 'bg-[#86b4c9]',
        font: 'font-[Inter]',
    },
    water: {
        text: 'text-white',
        bg: 'bg-gradient-to-br from-blue-500 to-blue-700',
        bgSecondary: 'bg-blue-600/80 backdrop-blur-sm',
        border: 'border border-blue-400/30',
        rounded: 'rounded-3xl',
        hover: 'hover:bg-blue-400/20',
        invertedText: 'text-blue-600',
        invertedBg: 'bg-white/90',
        font: 'font-[Inter]',
    },
    earth: {
        text: 'text-stone-900',
        bg: 'bg-orange-50',
        bgSecondary: 'bg-white',
        border: 'border border-stone-200',
        rounded: 'rounded-lg',
        hover: 'hover:bg-green-600',
        invertedText: 'text-[#422211]',
        invertedBg: 'bg-green-600',
        font: 'font-serif',
    },
    fire: {
        text: 'text-black',
        bg: 'bg-red-700',
        border: 'border border-black',
        hover: 'hover:bg-black',
        invertedText: 'text-red-500',
        invertedBg: 'bg-black',
        bgSecondary: '',
        rounded: '',
        font: '',
    },
    rain: {
        text: 'text-stone-900',
        bg: 'bg-gray-500',
        border: 'border border-stone-900',
        hover: 'hover:bg-stone-800',
        invertedText: 'text-gray-400',
        invertedBg: 'bg-stone-800',
        bgSecondary: '',
        rounded: '',
        font: '',
    },
    wind: {
        text: 'text-stone-700',
        bg: 'bg-gray-100',
        border: 'border border-stone-700',
        hover: 'hover:bg-stone-700',
        invertedText: 'text-gray-100',
        invertedBg: 'bg-stone-700',
        bgSecondary: '',
        rounded: '',
        font: '',
    },
    space: {
        text: 'text-white',
        bg: 'bg-black',
        border: 'border border-white',
        hover: 'hover:bg-white',
        invertedText: 'text-black',
        invertedBg: 'bg-white',
        bgSecondary: '',
        rounded: '',
        font: 'font-[Oxanium]',
    },
};
