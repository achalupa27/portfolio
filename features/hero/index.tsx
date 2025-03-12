import CanadaFlag from '../../components/icons/socials/CanadaFlag';
import GitHubIcon from '../../components/icons/socials/GitHub';
import LinkedInIcon from '../../components/icons/socials/LinkedInIcon';
import MorphingText from '../../components/ui/morphing-text';
import { nextJsSkill, reactSkill, typescriptSkill, tailwindSkill, reduxSkill, pythonSkill, postgresSkill, supabaseSkill, vercelSkill, stripeSkill } from '../../data/skillData';
import { useTheme } from '../../hooks/use-theme';
import { useAppSelector } from '../../redux/hooks';
import { selectTheme } from '../../redux/slices/themeSlice';

const Hero = () => {
    const { bgSecondary, border, rounded } = useTheme();
    const currentTheme = useAppSelector(selectTheme);

    // Single array of skills to display in a grid
    const skills = [nextJsSkill, reactSkill, typescriptSkill, tailwindSkill, reduxSkill, pythonSkill, postgresSkill, supabaseSkill, vercelSkill, stripeSkill];

    return (
        <section id='hero' className={`z-10 flex w-full flex-col items-center justify-center px-8 py-6`}>
            {/* 🌎 */}
            <CanadaFlag />
            {/* <Logo /> */}
            <div className='flex flex-col items-center justify-between'>
                <p className='text-4xl'>Andrew Chalupa</p>

                {/* Glowing border under name */}
                {currentTheme === 'space' && (
                    <div className='relative w-full'>
                        {/* Enhanced glow effect with multiple layers - now going downward */}
                        <div className='absolute -bottom-2 left-[-30%] h-[6px] w-[160%] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-md' />
                        <div className='absolute -bottom-1 left-[-30%] h-[4px] w-[160%] bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm' />
                        <div className='absolute -bottom-1 left-[-30%] h-px w-[160%] bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
                    </div>
                )}
            </div>
            <p className='mt-2 flex items-center text-sm opacity-70'>B.Sc. Computer Science</p>
            <div className='flex'>
                <div className='flex w-fit items-center justify-start space-x-3 pt-3'>
                    <a href='https://github.com/achalupa27' target='_blank' rel='noopener noreferrer'>
                        <GitHubIcon />
                    </a>
                    <a href='https://www.linkedin.com/in/andrew-chalupa/' target='_blank' rel='noopener noreferrer'>
                        <LinkedInIcon />
                    </a>
                </div>
            </div>

            <p className='mt-4 text-center text-lg'>
                <span className='relative'>
                    Full-Stack Developer
                    {currentTheme === 'space' && <span className='absolute -bottom-1 left-[-30%] h-px w-[160%] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-70'></span>}
                </span>
                <br />
                <span className='font-normal opacity-70'>specializing in</span>
                <br />
                <span className='relative'>
                    B2C Websites
                    {currentTheme === 'space' && <span className='absolute -bottom-1 left-[-30%] h-px w-[160%] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-70'></span>}
                </span>
                <span className='font-normal opacity-70'> and </span>
                <span className='relative'>
                    ERP Solutions
                    {currentTheme === 'space' && <span className='absolute -bottom-1 left-[-30%] h-px w-[160%] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-70'></span>}
                </span>
                .
            </p>

            {/* Skill Icons - Using CSS Grid */}
            <div className='mt-6 grid grid-cols-5 gap-3'>
                {skills.map((skill, index) => (
                    <div key={index} className='group flex h-8 w-8 items-center justify-center rounded-full transition-all hover:bg-opacity-60' title={skill.name}>
                        <div className='h-5 w-5 transition-transform group-hover:scale-110'>{skill.icon}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
