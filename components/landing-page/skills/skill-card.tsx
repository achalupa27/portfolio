import Image from 'next/image';
import { themes } from '../../../themes';
import { useAppSelector } from '../../../redux/hooks';
import { selectTheme } from '../../../redux/slices/themeSlice';

interface SkillCardProps {
    skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
    const selectedTheme = useAppSelector(selectTheme);
    const { bgSecondary, bg } = themes[selectedTheme];

    return (
        <div className={`flex w-60 space-x-3 rounded p-3 ${bgSecondary}`}>
            <div className={`flex items-center justify-center rounded ${bg} p-2`}>{skill.icon}</div>
            <div>
                <div className='text-base'>{skill.name}</div>
                <div className='text-sm opacity-70'>{skill.category}</div>
            </div>
        </div>
    );
};

export default SkillCard;
