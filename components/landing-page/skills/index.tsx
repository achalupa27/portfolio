import { useAppSelector } from '../../../redux/hooks';
import { selectTheme } from '../../../redux/slices/themeSlice';
import SkillCard from './skill-card';
import { nextJsSkill, postgresSkill, pythonSkill, reactSkill, reduxSkill, stripeSkill, supabaseSkill, tailwindSkill, typescriptSkill, vercelSkill } from '../../../data/skillData';
import { themes } from '../../../themes';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';

const Skills = () => {
    const selectedTheme = useAppSelector(selectTheme);
    const { bgSecondary, border, rounded } = themes[selectedTheme];

    return (
        <section id='skills' className='mt-12'>
            <Tabs defaultValue='current' className='space-y-0'>
                <TabsList className='w-full justify-start rounded-b-none border border-b-0 bg-white'>
                    <TabsTrigger value='current'>Current Technologies</TabsTrigger>
                    {/* <TabsTrigger value='password'>Past Technologies</TabsTrigger>
                    <TabsTrigger value='future'>Future Technologies</TabsTrigger> */}
                </TabsList>
                <TabsContent value='current'>
                    <div className='grid w-full  grid-cols-2 gap-3 border bg-white p-2'>
                        <SkillCard skill={nextJsSkill} />
                        <SkillCard skill={reactSkill} />
                        <SkillCard skill={typescriptSkill} />
                        <SkillCard skill={tailwindSkill} />
                        <SkillCard skill={reduxSkill} />
                        <SkillCard skill={pythonSkill} />
                        <SkillCard skill={postgresSkill} />
                        <SkillCard skill={supabaseSkill} />
                        <SkillCard skill={vercelSkill} />
                        <SkillCard skill={stripeSkill} />
                    </div>
                </TabsContent>
                {/* <TabsContent value='password'></TabsContent> */}
            </Tabs>
        </section>
    );
};

export default Skills;
