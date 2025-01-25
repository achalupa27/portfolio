import FirebaseIcon from '../components/icons/skills/FirebaseIcon';
import NextIcon from '../components/icons/skills/NextIcon';
import PostgreSQLIcon from '../components/icons/skills/PostgreSQLIcon';
import PythonIcon from '../components/icons/skills/PythonIcon';
import ReactIcon from '../components/icons/skills/ReactIcon';
import ReduxIcon from '../components/icons/skills/ReduxIcon';
import SupabaseIcon from '../components/icons/skills/SupabaseIcon';
import TailwindIcon from '../components/icons/skills/TailwindIcon';
import TypeScriptIcon from '../components/icons/skills/TypeScriptIcon';
import VercelIcon from '../components/icons/skills/VercelIcon';

export const cleantradesProject: Project = {
    id: 1,
    name: 'CleanTrades',
    logo: 'cleantrades.svg',
    url: 'https://www.cleantrades.com',
    category: 'Stock Trading Journal',
    period: '2022 - Present',
    technologies: [
        { icon: <NextIcon />, name: 'next-logo' },
        { icon: <ReactIcon />, name: 'react-logo' },
        { icon: <TypeScriptIcon />, name: 'typescript-logo' },
        { icon: <TailwindIcon />, name: 'tailwind-logo' },
        { icon: <ReduxIcon />, name: 'redux-logo' },
        { icon: <VercelIcon />, name: 'vercel-logo' },
        { icon: <SupabaseIcon />, name: 'supabase-logo' },
        { icon: <PostgreSQLIcon />, name: 'postgresql-logo' },
        { icon: <PythonIcon />, name: 'python-logo' },
    ],
    hasWalkthrough: true,
};

export const lightsuiteProject: Project = {
    id: 2,
    name: 'Lightsuite',
    logo: '/lightsuite.svg',
    url: 'https://www.lightsuite.ca',
    category: 'Self Improvement Platform',
    period: '2023 - Present',
    technologies: [
        { icon: <NextIcon />, name: 'next-logo' },
        { icon: <ReactIcon />, name: 'react-logo' },
        { icon: <TypeScriptIcon />, name: 'typescript-logo' },
        { icon: <TailwindIcon />, name: 'tailwind-logo' },
        { icon: <ReduxIcon />, name: 'redux-logo' },
        { icon: <VercelIcon />, name: 'vercel-logo' },
        { icon: <FirebaseIcon />, name: 'firebase-logo' },
    ],
    hasWalkthrough: true,
};

export const lunariaProject: Project = {
    id: 3,
    name: 'Lunaria',
    logo: 'lunaria.svg',
    url: 'https://www.lunaria.space',
    category: 'Personal Finance Dashboard',
    period: '2023 - Present',
    technologies: [
        { icon: <NextIcon />, name: 'next-logo' },
        { icon: <ReactIcon />, name: 'react-logo' },
        { icon: <TypeScriptIcon />, name: 'typescript-logo' },
        { icon: <TailwindIcon />, name: 'tailwind-logo' },
        { icon: <ReduxIcon />, name: 'redux-logo' },
        { icon: <VercelIcon />, name: 'vercel-logo' },
        { icon: <SupabaseIcon />, name: 'supabase-logo' },
    ],
    hasWalkthrough: true,
};
