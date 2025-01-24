// WorkCard.jsx
import Image from 'next/image';
import { useAppSelector } from '../../../redux/hooks';
import { selectTheme } from '../../../redux/slices/themeSlice';
import { themes } from '../../../themes';

type Props = {
    workExperience: WorkExperience;
};

const WorkCard = ({ workExperience }: Props) => {
    const selectedTheme = useAppSelector(selectTheme);
    const style = themes[selectedTheme];
    const bgSecondary = style.bgSecondary;
    const bg = style.bg;
    const border = style.border;
    const text = style.text;

    return (
        <div key={workExperience.company} className={``}>
            <div className='py-4'>
                {workExperience.responsibilities.map((responsibility, index) => (
                    <div key={index} className='flex flex-col'>
                        <div>{responsibility}</div>
                        {index < workExperience.responsibilities.length - 1 && <i className='fi fi-rr-arrow-small-down pt-0.5 text-xs opacity-50' />}
                    </div>
                ))}
            </div>

            {/* {workExperience.hasReferences && (
                <div className='relative flex items-center'>
                    <div className='absolute h-3 w-3 rounded-full bg-green-500' />
                    <div className='absolute h-3 w-3 animate-ping rounded-full border border-green-500' />
                    <div className='ml-5'>References available</div>
                </div>
            )} */}
            <div className='mt-4'>
                <h4 className='mb-2'>Technologies Used</h4>
                <div className='flex flex-wrap gap-2'>
                    {workExperience.technologies.map((tech, index) => (
                        <div className={`flex items-center space-x-1 rounded ${bg} px-2 py-2 group-hover:py-0 group-hover:pb-[1px]`}>
                            <Image key={index} src={tech.logo} alt={tech.name} width={16} height={16} />
                            <p className='hidden text-xs opacity-70 group-hover:block'>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
