import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { useAppSelector } from '../../redux/hooks';
import { selectTheme } from '../../redux/slices/themeSlice';
import { themes } from '../../themes';
import WebsiteAccordion from './website-accordion';
import WorkAccordion from './work-accordion';

const Experience = () => {
    const selectedTheme = useAppSelector(selectTheme);
    const { bgSecondary, text, border, rounded } = themes[selectedTheme];

    return (
        <section id='experience'>
            <Tabs defaultValue='work' className='w-full space-y-0'>
                <TabsList className={`w-full justify-around ${rounded} rounded-b-none ${border} border-b-0 ${bgSecondary}`}>
                    <TabsTrigger className='w-full ' value='work'>
                        Work Experience
                    </TabsTrigger>
                    <TabsTrigger className='w-full' value='websites'>
                        Websites
                    </TabsTrigger>
                </TabsList>
                <TabsContent value='work'>
                    <WorkAccordion />
                </TabsContent>
                <TabsContent value='websites'>
                    <WebsiteAccordion />
                </TabsContent>
            </Tabs>
        </section>
    );
};

export default Experience;
