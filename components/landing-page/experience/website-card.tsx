// components/ProjectCard.tsx
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
    const style = themes[selectedTheme];
    const bgSecondary = style.bgSecondary;
    const bg = style.bg;
    const border = style.border;
    const text = style.text;

    return (
        <div className={`rounded-lg`}>
            <div className='aspect-video w-full rounded border bg-neutral-100'></div>

            <div className='mt-4 flex justify-center group-hover:block'>
                <div className='flex flex-wrap justify-center gap-1'>
                    {project.technologies.map((tech, index) => (
                        <div className={`flex items-center space-x-1 rounded ${bg} px-2 py-2 group-hover:py-0 group-hover:pb-[1px]`}>
                            <Image key={index} src={tech.src} alt={tech.alt} width={16} height={16} />
                            <p className='hidden text-xs opacity-70 group-hover:block'>{tech.name}</p>
                        </div>
                    ))}
                </div>

                <Link href={project.url} target='_blank' className={`items-center space-x-1 rounded px-3 transition duration-200  group-hover:flex`}>
                    <i className='fi fi-rr-arrow-up-right-from-square text-xs leading-[0px]'></i>
                </Link>
            </div>
        </div>
    );
};

export default WebsiteCard;