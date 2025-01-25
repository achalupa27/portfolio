import Image from 'next/image';
import { useAppSelector } from '../../../redux/hooks';
import { selectTheme } from '../../../redux/slices/themeSlice';
import Link from 'next/link';
import { themes } from '../../../themes';

interface ProjectCardProps {
    project: Project;
}

const WebsiteCard = ({ project }: ProjectCardProps) => {
    const selectedTheme = useAppSelector(selectTheme);
    const { bgSecondary, bg } = themes[selectedTheme];

    return (
        <div className={`rounded-lg`}>
            <div className='aspect-video w-full rounded border bg-neutral-100'></div>

            <div className='mt-4 flex justify-center group-hover:block'>
                <div className='flex flex-wrap justify-center gap-1'>
                    {project.technologies.map((tech, index) => (
                        <div key={index} className={`flex items-center space-x-1 rounded ${bg} px-2 py-2 group-hover:py-0 group-hover:pb-[1px]`}>
                            {tech.icon}
                            <p className='hidden text-xs opacity-70 group-hover:block'>{tech.name}</p>
                        </div>
                    ))}
                </div>

                <Link href={project.url} target='_blank' className={`items-center space-x-1 rounded px-3 transition duration-200  group-hover:flex`}>
                    Visit
                </Link>
            </div>
        </div>
    );
};

export default WebsiteCard;
