import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';
import { cleantradesProject, lightsuiteProject, lunariaProject } from '../../../data/websiteData';
import WebsiteCard from './website-card';
import CleanTradesLogo from '../../icons/CleanTradesLogo';
import { useAppSelector } from '../../../redux/hooks';
import { selectTheme } from '../../../redux/slices/themeSlice';
import { themes } from '../../../themes';
import LunariaLogo from '../../icons/LunariaLogo';
import LightSuiteLogo from '../../icons/LightSuiteLogo';

const WebsiteAccordion = () => {
    const selectedTheme = useAppSelector(selectTheme);
    const { bgSecondary, bg } = themes[selectedTheme];

    return (
        <div className={`h-full overflow-y-auto rounded rounded-t-none border px-4 py-4 ${bgSecondary}`}>
            <Accordion type='single' collapsible defaultValue='item-1' className={`${bgSecondary}`}>
                <AccordionItem value='item-1' className='border-b-0'>
                    <AccordionTrigger className='p-0'>
                        <div className={`flex items-center space-x-3 ${bgSecondary}`}>
                            <div className={`flex items-center justify-center rounded ${bg} p-2`}>
                                <CleanTradesLogo />
                            </div>
                            <div>
                                <div>{'CleanTrades'}</div>
                                <div className='text-sm opacity-60'>{'Trading Platform • 2022 - Present'}</div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <WebsiteCard project={cleantradesProject} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2' className='border-b-0'>
                    <AccordionTrigger className='flex items-center p-0'>
                        <div className='flex items-center space-x-3 pt-2'>
                            <div className={`flex items-center justify-center rounded ${bg} p-2`}>
                                <LightSuiteLogo />
                            </div>
                            <div>
                                <div>{'LightSuite'}</div>
                                <div className='text-sm opacity-60'>{'Self Improvement'}</div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <WebsiteCard project={lightsuiteProject} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3' className='border-b-0'>
                    <AccordionTrigger className='p-0'>
                        <div className='mt-2 flex items-center space-x-3'>
                            <div className={`flex items-center justify-center rounded ${bg} p-2`}>
                                <LunariaLogo />
                            </div>
                            <div>
                                <div>{'Lunaria'}</div>
                                <div className='text-sm opacity-60'>{'Personal Finance'}</div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <WebsiteCard project={lunariaProject} />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default WebsiteAccordion;
