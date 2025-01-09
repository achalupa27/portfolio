type ThemeName = 'light' | 'dark' | 'ice' | 'water' | 'earth' | 'fire' | 'rain' | 'wind' | 'space';

interface ThemeColors {
    text: string;
    bg: string;
    bgSecondary: string;
    border: string;
    hover: {
        bg: string;
        text: string;
    };
    placeholder: string;
    inverted: {
        text: string;
        bg: string;
    };
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
    logo: string;
    url: string;
    category: string;
    period: string;
    technologies: Array<{
        name: string;
        src: string;
        alt: string;
    }>;
    hasWalkthrough?: boolean;
}

interface Skill {
    name: string;
    logo: string;
    category?: string;
}
