import CleanTradesLogo from '../components/icons/logos/CleanTradesLogo';
import LightSuiteLogo from '../components/icons/logos/LightSuiteLogo';
import LunariaLogo from '../components/icons/logos/LunariaLogo';
import FirebaseIcon from '../components/icons/skills/FirebaseIcon';
import NextIcon from '../components/icons/skills/NextIcon';
import PostgreSQLIcon from '../components/icons/skills/PostgreSQLIcon';
import PythonIcon from '../components/icons/skills/PythonIcon';
import ReactIcon from '../components/icons/skills/ReactIcon';
import ReduxIcon from '../components/icons/skills/ReduxIcon';
import StripeIcon from '../components/icons/skills/StripeIcon';
import SupabaseIcon from '../components/icons/skills/SupabaseIcon';
import TailwindIcon from '../components/icons/skills/TailwindIcon';
import TypeScriptIcon from '../components/icons/skills/TypeScriptIcon';
import VercelIcon from '../components/icons/skills/VercelIcon';

// Define the Project interface
export interface Project {
    id: number;
    name: string;
    logo: JSX.Element;
    url: string;
    category: string;
    period: string;
    description: string;
    technologies: { icon: JSX.Element; name: string }[];
    hasWalkthrough: boolean;
    demoUrl?: string;
    githubUrl?: string;
}

export const cleantradesProject: Project = {
    id: 1,
    name: 'CleanTrades',
    logo: <CleanTradesLogo />,
    url: 'https://www.cleantrades.com',
    category: 'Stock Trading Journal',
    period: '2022 - Present',
    description: 'Stock Journal, Personal Trading Platform',
    technologies: [
        { icon: <NextIcon />, name: 'Next.js' },
        { icon: <ReactIcon />, name: 'React' },
        { icon: <TypeScriptIcon />, name: 'TypeScript' },
        { icon: <TailwindIcon />, name: 'Tailwind CSS' },
        { icon: <ReduxIcon />, name: 'Redux' },
        { icon: <VercelIcon />, name: 'Vercel' },
        { icon: <SupabaseIcon />, name: 'Supabase' },
        { icon: <PostgreSQLIcon />, name: 'PostgreSQL' },
        { icon: <PythonIcon />, name: 'Python' },
        { icon: <StripeIcon />, name: 'Stripe' },
    ],
    hasWalkthrough: true,
    demoUrl: 'https://www.cleantrades.com',
    githubUrl: 'https://github.com/achalupa27/cleantrades',
};

export const lightsuiteProject: Project = {
    id: 2,
    name: 'Lightsuite',
    logo: <LightSuiteLogo />,
    url: 'https://www.lightsuite.ca',
    category: 'Self Improvement Platform',
    period: '2023 - Present',
    description: 'Life, Body, Mind Improvement Platform',
    technologies: [
        { icon: <NextIcon />, name: 'Next.js' },
        { icon: <ReactIcon />, name: 'React' },
        { icon: <TypeScriptIcon />, name: 'TypeScript' },
        { icon: <TailwindIcon />, name: 'Tailwind CSS' },
        { icon: <ReduxIcon />, name: 'Redux' },
        { icon: <VercelIcon />, name: 'Vercel' },
        { icon: <SupabaseIcon />, name: 'Supabase' },
        { icon: <StripeIcon />, name: 'Stripe' },
    ],
    hasWalkthrough: true,
    demoUrl: 'https://www.lightsuite.ca',
    githubUrl: 'https://github.com/achalupa27/lightsuite',
};

export const lunariaProject: Project = {
    id: 3,
    name: 'Lunaria',
    logo: <LunariaLogo />,
    url: 'https://www.lunaria.space',
    category: 'Personal Finance Dashboard',
    period: '2023 - Present',
    description: 'Personal Finance Dashboard',
    technologies: [
        { icon: <NextIcon />, name: 'Next.js' },
        { icon: <ReactIcon />, name: 'React' },
        { icon: <TypeScriptIcon />, name: 'TypeScript' },
        { icon: <TailwindIcon />, name: 'Tailwind CSS' },
        { icon: <ReduxIcon />, name: 'Redux' },
        { icon: <VercelIcon />, name: 'Vercel' },
        { icon: <SupabaseIcon />, name: 'Supabase' },
        { icon: <StripeIcon />, name: 'Stripe' },
    ],
    hasWalkthrough: true,
    demoUrl: 'https://www.lunaria.space',
    githubUrl: 'https://github.com/achalupa27/lunaria',
};
