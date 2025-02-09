import Thumbnail from '../../components/ui/thumbnail';
import { useTheme } from '../../hooks/use-theme';

interface SkillCardProps {
    skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
    const { bgSecondary, bg } = useTheme();

    return (
        <div className={`flex w-60 space-x-3 rounded p-3`}>
            <Thumbnail icon={skill.icon} />
            <div>
                <div className='text-base'>{skill.name}</div>
                <div className='text-sm opacity-70'>{skill.category}</div>
            </div>
        </div>
    );
};

export default SkillCard;
