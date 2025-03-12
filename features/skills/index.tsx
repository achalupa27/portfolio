import { nextJsSkill, reactSkill, typescriptSkill, tailwindSkill, reduxSkill, pythonSkill, postgresSkill, supabaseSkill, vercelSkill, stripeSkill } from '../../data/skillData';
import { useTheme } from '../../hooks/use-theme';
import SkillCard from './skill-card';

const Skills = () => {
    const { bgSecondary, border, rounded } = useTheme();

    return <section id='skills' className={`mt-12 px-8 py-6 ${rounded} ${border} ${bgSecondary}`}></section>;
};

export default Skills;
