import { nextJsSkill, reactSkill, typescriptSkill, tailwindSkill, reduxSkill, pythonSkill, postgresSkill, supabaseSkill, vercelSkill, stripeSkill } from '../../data/skillData';
import { useTheme } from '../../hooks/use-theme';
import SkillCard from './skill-card';

const Skills = () => {
    const { bgSecondary, border, rounded } = useTheme();

    return (
        <section id='skills' className='mt-12'>
            <div>
                <div className={`w-full justify-start px-2.5 py-1.5 text-sm ${rounded} rounded-b-none ${border} border-b-0 ${bgSecondary}`}>Current Technologies</div>
                <div className={`grid w-full grid-cols-1 gap-3 sm:grid-cols-2 ${rounded} rounded-t-none ${border} ${bgSecondary} p-2`}>
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
            </div>
        </section>
    );
};

export default Skills;
