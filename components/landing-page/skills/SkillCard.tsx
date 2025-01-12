import Image from 'next/image';
import { themes } from '../../../themes';
import { useAppSelector } from '../../../redux/hooks';
import { selectTheme } from '../../../redux/slices/themeSlice';

interface SkillCardProps {
    skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
    const selectedTheme = useAppSelector(selectTheme);
    const style = themes[selectedTheme];
    const bgSecondary = style.bgSecondary;
    const bg = style.bg;
    const border = style.border;

    const getCustomIcon = (skill: Skill, selectedTheme: ThemeName) => {
        if (selectedTheme === 'dark' || selectedTheme === 'space') {
            switch (skill.name) {
                case 'Vercel':
                    return 'vercel-light.svg';
                case 'Next':
                    return 'next-light.svg';
                default:
                    return null;
            }
        }
        return null;
    };

    return (
        <div className={`flex w-60 space-x-3 rounded ${border} p-3 ${bgSecondary}`}>
            <div className={`flex items-center justify-center rounded ${bg} p-2`}>
                <Image src={getCustomIcon(skill, selectedTheme) || skill.logo} alt={`${skill.name.toLowerCase()}-logo`} width={32} height={32} />
            </div>
            <div className=''>
                <div>{skill.name}</div>
                <div className='text-sm opacity-60'>{skill.category}</div>
            </div>
        </div>
    );
};

export default SkillCard;
