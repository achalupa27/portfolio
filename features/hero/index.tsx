import CanadaFlag from '../../components/icons/socials/CanadaFlag';
import GitHubIcon from '../../components/icons/socials/GitHub';
import LinkedInIcon from '../../components/icons/socials/LinkedInIcon';
import MorphingText from '../../components/ui/morphing-text';
import { useAppSelector } from '../../redux/hooks';
import { selectTheme } from '../../redux/slices/themeSlice';
import { themes } from '../../themes';

const Hero = () => {
    const selectedTheme = useAppSelector(selectTheme);
    const { bgSecondary, border, rounded } = themes[selectedTheme];

    return (
        <section id='hero' className={`${rounded} ${border} ${bgSecondary} z-10 flex w-full flex-col px-8 py-6`}>
            <CanadaFlag />
            {/* <Logo /> */}
            <div className='flex items-center justify-between'>
                {/* <MorphingText
                    text='Andrew Chalupa'
                    className='text-3xl' 
                /> */}
                <p className='text-3xl'>Andrew Chalupa</p>

                <div className='flex w-fit items-center justify-start space-x-3 pt-3'>
                    <a href='https://www.github.com/achalupa27' target='_blank' aria-label='Visit Git Hub Page' className={`flex h-8 w-8 items-center justify-center rounded transition duration-100 hover:-translate-y-0.5 hover:scale-105`}>
                        <GitHubIcon />
                    </a>
                    <a href='https://www.linkedin.com/in/andrew-chalupa-b03b57262/' target='_blank' aria-label='Visit Linked In Profile' className={`flex h-8 w-8 items-center justify-center rounded transition duration-100 hover:-translate-y-0.5 hover:scale-105`}>
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
            <p className='-mt-1.5 flex items-center space-x-2 text-sm opacity-70'>B.Sc. Computer Science</p>
            <p className='mt-3 font-medium'>
                Full-Stack Developer <br className='md:hidden' />
                <span className='font-normal opacity-70'>specializing in</span>
                <br className='md:hidden' /> B2C Websites <span className='font-normal opacity-70'>and </span> ERP Solutions.
            </p>
        </section>
    );
};

export default Hero;
