import { useAppSelector } from '../../redux/hooks';
import { selectTheme } from '../../redux/slices/themeSlice';
import { useTheme } from '../../hooks/use-theme';
import { cleantradesProject, lightsuiteProject, lunariaProject } from '../../data/websiteData';
import { Play, ExternalLink } from 'lucide-react';

interface ProjectDisplayProps {
    projectId: string;
}

const ProjectDisplay = ({ projectId }: ProjectDisplayProps) => {
    const { bgSecondary, rounded, border } = useTheme();
    const currentTheme = useAppSelector(selectTheme);

    // Get project data based on projectId
    const getProjectData = () => {
        switch (projectId) {
            case 'cleantrades':
                return cleantradesProject;
            case 'lightsuite':
                return lightsuiteProject;
            case 'lunaria':
                return lunariaProject;
            default:
                return null;
        }
    };

    const project = getProjectData();

    if (!project) return null;

    return (
        <section id='project' className={`z-10 flex w-[400px] flex-col items-center justify-center px-8 py-6`}>
            <div className='mb-4 flex flex-col items-center justify-center'>
                <div>{project.logo}</div>

                {/* Project name with external link */}
                <div className='flex items-center'>
                    <a href={project.demoUrl} target='_blank' rel='noopener noreferrer' className='group flex items-center transition-colors hover:text-indigo-400'>
                        <h2 className='ml-3 text-3xl'>{project.name}</h2>
                        <ExternalLink className='ml-2 h-4 w-4 opacity-70 transition-transform group-hover:scale-110' />
                    </a>
                </div>
                <p className='text-center text-sm opacity-70'>{project.description}</p>
            </div>

            {currentTheme === 'space' && (
                <div className='relative mb-4 w-full'>
                    <div className='absolute -bottom-2 left-[-30%] h-[6px] w-[160%] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-md' />
                    <div className='absolute -bottom-1 left-[-30%] h-[4px] w-[160%] bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm' />
                    <div className='absolute -bottom-1 left-[-30%] h-px w-[160%] bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
                </div>
            )}

            {/* Video Placeholder */}
            <div className={`relative mb-6 aspect-video w-full overflow-hidden`}>
                <div className='absolute inset-0 flex items-center justify-center '>
                    {currentTheme === 'space' && (
                        <>
                            {/* Space theme borders with enhanced glow effect */}
                            <div className='absolute inset-x-0 top-0 h-[3px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm' />
                            <div className='absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-indigo-500 to-sky-500' />

                            <div className='absolute inset-y-0 left-0 h-full w-[3px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent blur-sm' />
                            <div className='absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-indigo-500 to-sky-500' />

                            <div className='absolute inset-y-0 right-0 h-full w-[3px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent blur-sm' />
                            <div className='absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-sky-500 to-indigo-500' />

                            <div className='absolute inset-x-0 bottom-0 h-[3px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm' />
                            <div className='absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-sky-500 to-indigo-500' />
                        </>
                    )}

                    <button className='group relative flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 bg-opacity-20 transition-all hover:bg-opacity-30'>
                        <Play className='h-8 w-8 text-white transition-transform group-hover:scale-110' />
                        <div className='absolute inset-0 rounded-full border border-indigo-500 opacity-70'></div>
                    </button>

                    <div className='absolute bottom-3 left-3 text-xs text-gray-400'>Demo video coming soon</div>
                </div>
            </div>

            {/* Technology Icons - Using CSS Grid with proper centering */}
            <div className='flex w-full justify-center'>
                <div className='inline-grid grid-cols-5 gap-3'>
                    {project.technologies.map((tech, index) => (
                        <div key={index} className='group flex h-8 w-8 items-center justify-center rounded-full transition-all hover:bg-opacity-60' title={tech.name}>
                            <div className='h-5 w-5 transition-transform group-hover:scale-110'>{tech.icon}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectDisplay;
