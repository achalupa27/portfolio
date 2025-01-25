import { useAppSelector } from '../../../redux/hooks';
import { selectTheme } from '../../../redux/slices/themeSlice';
import { themes } from '../../../themes';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import WebsiteAccordion from './website-accordion';
import WorkAccordion from './work-accordion';

const Experience = () => {
    const selectedTheme = useAppSelector(selectTheme);
    const { bgSecondary, text, border, rounded } = themes[selectedTheme];

    return (
        <section id='experience'>
            <Tabs defaultValue='work' className='w-full space-y-0'>
                <TabsList className={`w-full justify-around rounded-b-none ${border} border-b-0 ${bgSecondary}`}>
                    <TabsTrigger className='w-full ' value='work'>
                        Work Experience
                    </TabsTrigger>
                    <TabsTrigger className='w-full' value='websites'>
                        Websites
                    </TabsTrigger>
                    {/* <TabsTrigger className='w-full' value='apps'>
                        Mobile Apps
                    </TabsTrigger> */}
                </TabsList>
                <TabsContent value='work'>
                    <WorkAccordion />
                    {/* <WorkCard workExperience={workExperience} /> */}
                </TabsContent>
                <TabsContent value='websites'>
                    <WebsiteAccordion />
                </TabsContent>
                {/* <TabsContent value='apps'>LightMind</TabsContent> */}
            </Tabs>
        </section>
    );
};

export default Experience;
