// WorkCard.jsx

import { useTheme } from '../../hooks/use-theme';

type Props = {
    workExperience: WorkExperience;
};

const WorkCard = ({ workExperience }: Props) => {
    const { bg } = useTheme();

    return (
        <div key={workExperience.company} className={``}>
            <div className='py-4'>
                {workExperience.responsibilities.map((responsibility, index) => (
                    <div key={index} className='flex flex-col'>
                        <div>{responsibility}</div>
                        {index < workExperience.responsibilities.length - 1 && <div>↓</div>}
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
                        <div key={index} className={`flex items-center space-x-1 rounded ${bg} px-2 py-2 group-hover:py-0 group-hover:pb-[1px]`}>
                            {tech.icon}
                            <p className='hidden text-xs opacity-70 group-hover:block'>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
