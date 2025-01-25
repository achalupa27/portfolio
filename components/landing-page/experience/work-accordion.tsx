import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';
import { useAppSelector } from '../../../redux/hooks';
import { selectTheme } from '../../../redux/slices/themeSlice';
import { themes } from '../../../themes';
import WorkCard from './work-card';
import { workExperience } from '../../../data/workData';
import Image from 'next/image';

const WorkAccordion = () => {
    const selectedTheme = useAppSelector(selectTheme);
    const { bgSecondary, bg } = themes[selectedTheme];

    return (
        <div className={`h-full rounded rounded-t-none border ${bgSecondary} px-4 py-4`}>
            <Accordion type='single' collapsible defaultValue='item-1'>
                <AccordionItem value='item-1' className='border-b-0'>
                    <AccordionTrigger className='p-0'>
                        <div className='flex items-center space-x-3'>
                            <div className={`z-10 flex h-12 w-12 items-center justify-center rounded ${bg} p-2`}>
                                <Image src='/vgmeats.png' alt='vgmeats logo' width={24} height={20} />
                            </div>
                            <div>
                                <div>{'VG Meats'}</div>
                                <p className='text-sm opacity-70'>{'Lead Developer • 2022 - Present'}</p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <WorkCard workExperience={workExperience} />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default WorkAccordion;
