import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cleantradesProject, lightsuiteProject, lunariaProject } from '../../../data/websiteData';
import WebsiteCard from './website-card';
import CleanTradesLogo from '../../icons/CleanTradesLogo';
import { useAppSelector } from '../../../redux/hooks';
import { selectTheme } from '../../../redux/slices/themeSlice';
import { themes } from '../../../themes';
import LunariaLogo from '../../icons/LunariaLogo';
import LightSuiteLogo from '../../icons/LightSuiteLogo';
import WorkCard from './work-card';
import { workExperience } from '../../../data/workData';

const WorkAccordion = () => {
    const selectedTheme = useAppSelector(selectTheme);
    const style = themes[selectedTheme];
    const bgSecondary = style.bgSecondary;
    const bg = style.bg;

    return (
        <div className='h-full rounded rounded-t-none border bg-white px-4 py-4'>
            <Accordion type='single' collapsible defaultValue='item-1'>
                <AccordionItem value='item-1'>
                    <AccordionTrigger className='p-0'>
                        <div className='flex items-center space-x-3'>
                            <div className={`flex h-12 w-12 items-center justify-center rounded ${bg} p-2`}>
                                <img src='vgmeats.png' alt='vgmeats logo' className='h-5 w-6' />
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
