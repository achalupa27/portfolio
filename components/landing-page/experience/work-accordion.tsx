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
        <div className='h-full rounded rounded-t-none border bg-white px-4 py-4'>
            <Accordion type='single' collapsible defaultValue='item-1'>
                <AccordionItem value='item-1'>
                    <AccordionTrigger className='p-0'>
                        <div className='flex items-center space-x-3'>
                            <div className={`flex h-12 w-12 items-center justify-center rounded ${bg} p-2`}>
                                <Image src='/vgmeats.png' alt='vgmeats logo' width={24} height={20} />
                                {/* <VGMeatsLogo /> */}
                            </div>
                            <div>
                                <div>{'VG Meats'}</div>
                                <div className='text-sm opacity-60'>{'Lead Developer • 2022 - Present'}</div>
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
