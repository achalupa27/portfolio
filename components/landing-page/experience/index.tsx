import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WebsiteAccordion from './website-accordion';
import WorkAccordion from './work-accordion';

const Experience = () => {
    return (
        <section id='experience'>
            <Tabs defaultValue='work' className='w-full space-y-0'>
                <TabsList className=' w-full justify-around rounded-b-none border border-b-0 bg-white'>
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
