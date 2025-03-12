type ThemeName = 'light' | 'dark' | 'ice' | 'water' | 'earth' | 'fire' | 'rain' | 'wind' | 'space' | string;

interface ThemeColors {
    text: string;
    bg: string;
    bgSecondary: string;
    border: string;
    rounded: string;
    hover: string;
    invertedText: string;
    invertedBg: string;
    font: string;
}

interface WorkExperience {
    company: string;
    role: string;
    period: string;
    responsibilities: string[];
    technologies: Skill[];
    hasReferences: boolean;
    border: string;
    bgSecondary: string;
}

interface Project {
    id: number;
    name: string;
    logo: JSX.Element;
    url: string;
    category: string;
    period: string;
    technologies: Skill[];
    hasWalkthrough?: boolean;
    description: string;
}

interface Skill {
    name: string;
    icon: JSX.Element;
    category?: string;
}
