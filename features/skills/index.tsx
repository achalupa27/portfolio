import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { nextJsSkill, reactSkill, typescriptSkill, tailwindSkill, reduxSkill, pythonSkill, postgresSkill, supabaseSkill, vercelSkill, stripeSkill } from '../../data/skillData';
import { useAppSelector } from '../../redux/hooks';
import { selectTheme } from '../../redux/slices/themeSlice';
import { themes } from '../../themes';
import SkillCard from './skill-card';

const Skills = () => {
    const selectedTheme = useAppSelector(selectTheme);
    const { bg, bgSecondary, border, rounded } = themes[selectedTheme];

    return (
        <section id='skills' className='mt-12'>
            <Tabs defaultValue='current' className='space-y-0'>
                <TabsList className={`w-full justify-start ${rounded} rounded-b-none ${border} border-b-0 ${bgSecondary}`}>
                    <TabsTrigger value='current'>Current Technologies</TabsTrigger>
                </TabsList>
                <TabsContent value='current' className={`grid w-full grid-cols-2 gap-3 ${rounded} rounded-t-none ${border} ${bgSecondary} p-2`}>
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
                </TabsContent>
                {/* <TabsContent value='password'></TabsContent> */}
            </Tabs>
        </section>
    );
};

export default Skills;
