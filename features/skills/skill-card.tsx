import Thumbnail from '../../components/ui/thumbnail';
import { useAppSelector } from '../../redux/hooks';
import { selectTheme } from '../../redux/slices/themeSlice';
import { themes } from '../../themes';

interface SkillCardProps {
    skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
    const selectedTheme = useAppSelector(selectTheme);
    const { bgSecondary, bg } = themes[selectedTheme];

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
