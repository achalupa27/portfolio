import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { workExperience } from '../../data/workData';
import { useTheme } from '../../hooks/use-theme';
import WorkCard from './work-card';
import Image from 'next/image';

const WorkAccordion = () => {
    const { bgSecondary, bg, rounded } = useTheme();

    return (
        <div className={`h-full ${rounded} rounded-t-none ${bgSecondary} z-10 px-4 py-4`}>
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
