import Thumbnail from '../../components/ui/thumbnail';

interface SkillCardProps {
    skill: Skill;
    showTextOnHover?: boolean;
    alwaysShowText?: boolean;
}

const SkillCard = ({ skill, showTextOnHover = true, alwaysShowText = false }: SkillCardProps) => {
    return (
        <div className='group p-2'>
            <Thumbnail icon={skill.icon} size={80} text={skill.name} showTextOnHover={showTextOnHover} alwaysShowText={alwaysShowText} />
        </div>
    );
};

export default SkillCard;
