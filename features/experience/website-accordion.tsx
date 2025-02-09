import CleanTradesLogo from '../../components/icons/logos/CleanTradesLogo';
import LightSuiteLogo from '../../components/icons/logos/LightSuiteLogo';
import LunariaLogo from '../../components/icons/logos/LunariaLogo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import Thumbnail from '../../components/ui/thumbnail';
import { cleantradesProject, lightsuiteProject, lunariaProject } from '../../data/websiteData';
import { useTheme } from '../../hooks/use-theme';
import WebsiteCard from './website-card';

const WebsiteAccordion = () => {
    const { bgSecondary, bg, rounded } = useTheme();

    return (
        <div className={`h-full ${rounded} rounded-t-none ${bgSecondary} z-10 px-4 py-4`}>
            <Accordion type='single' collapsible defaultValue='item-3' className={`${bgSecondary}`}>
                <AccordionItem value='item-1' className='border-b-0'>
                    <AccordionTrigger className='p-0'>
                        <div className={`flex items-center space-x-3 ${bgSecondary}`}>
                            <Thumbnail icon={<CleanTradesLogo />} />
                            <div>
                                <div className='text-base'>{'CleanTrades'}</div>
                                <div className='text-sm opacity-70'>{'Trading Platform • 2022 - Present'}</div>
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
                            <Thumbnail icon={<LightSuiteLogo />} />
                            <div>
                                <div className='text-base'>{'LightSuite'}</div>
                                <div className='text-sm opacity-70'>{'Self Improvement'}</div>
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
                            <Thumbnail icon={<LunariaLogo />} />
                            <div>
                                <div className='text-base'>{'Lunaria'}</div>
                                <div className='text-sm opacity-70'>{'Personal Finance'}</div>
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
