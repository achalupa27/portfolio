import CssIcon from '../components/icons/skills/CssIcon';
import DjangoIcon from '../components/icons/skills/DjangoIcon';
import DockerIcon from '../components/icons/skills/DockerIcon';
import GoogleCloudIcon from '../components/icons/skills/GoogleCloudIcon';
import HtmlIcon from '../components/icons/skills/HtmlIcon';
import JavascriptIcon from '../components/icons/skills/JavascriptIcon';
import MySQLIcon from '../components/icons/skills/MySQLIcon';
import PythonIcon from '../components/icons/skills/PythonIcon';
import ReactIcon from '../components/icons/skills/ReactIcon';
import TailwindIcon from '../components/icons/skills/TailwindIcon';
import VercelIcon from '../components/icons/skills/VercelIcon';

export const workExperience: WorkExperience = {
    company: 'VG Meats',
    role: 'Lead Developer',
    period: '2022 - Present',
    responsibilities: ['Developed an ERP system', 'Built data pipelines', 'Automated repetitive workflows'],
    technologies: [
        { icon: <ReactIcon />, name: 'react-icon' },
        { icon: <DjangoIcon />, name: 'django-logo' },
        { icon: <GoogleCloudIcon />, name: 'react-logo' },
        { icon: <PythonIcon />, name: 'python-logo' },
        { icon: <VercelIcon />, name: 'vercel-logo' },
        { icon: <HtmlIcon />, name: 'html-logo' },
        { icon: <CssIcon />, name: 'css-logo' },
        { icon: <JavascriptIcon />, name: 'javascript-logo' },
        { icon: <MySQLIcon />, name: 'mysql-logo' },
        { icon: <TailwindIcon />, name: 'tailwind-logo' },
        { icon: <DockerIcon />, name: 'docker-logo' },
    ],
    hasReferences: true,
    border: 'border-gray-200',
    bgSecondary: 'bg-white',
};
