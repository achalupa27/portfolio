import { useAppSelector } from '../../../redux/hooks';
import { selectTheme } from '../../../redux/slices/themeSlice';
import { themes } from '../../../themes';
import CanadaFlag from '../../icons/CanadaFlag';
import GitHubIcon from '../../icons/GitHub';
import LinkedInIcon from '../../icons/LinkedInIcon';

const Hero = () => {
    const selectedTheme = useAppSelector(selectTheme);
    const style = themes[selectedTheme];
    const bgSecondary = style.bgSecondary;
    const border = style.border;

    return (
        <section id='hero' className='flex'>
            <div className={`z-10 flex w-full flex-col rounded px-8 py-6  ${border} ${bgSecondary}`}>
                <CanadaFlag />
                {/* <Logo /> */}
                <div className='flex items-center justify-between'>
                    <p className='text-3xl'>Andrew Chalupa</p>

                    <div className='flex w-fit items-center justify-start space-x-3 pt-3'>
                        <a href='https://www.github.com/achalupa27' target='_blank' className={`flex h-8 w-8 items-center justify-center rounded transition duration-100 hover:-translate-y-0.5 hover:scale-105`}>
                            <GitHubIcon />
                        </a>
                        <a href='https://www.linkedin.com/in/andrew-chalupa-b03b57262/' target='_blank' className={`flex h-8 w-8 items-center justify-center rounded transition duration-100 hover:-translate-y-0.5 hover:scale-105`}>
                            <LinkedInIcon />
                        </a>
                        {/* <a href='https://www.linkedin.com/in/andrew-chalupa-b03b57262/' target='_blank' className='flex h-8 w-8 items-center justify-center transition duration-100 hover:-translate-y-0.5 hover:scale-105'>
                            <i className='fi fi-sr-file-pdf text-[20px] leading-[0px]' />
                        </a> */}
                    </div>
                </div>
                <div className='flex items-center space-x-2 text-sm opacity-60'>
                    <p className='-mt-1'>B.Sc. Computer Science</p>
                </div>
                <p className='mt-3 font-medium'>
                    Full-Stack Developer <br className='md:hidden' />
                    <span className='opacity-50'>specializing in</span>
                    <br className='md:hidden' /> B2C Websites <span className='opacity-50'>and </span> ERP Solutions.
                </p>
            </div>
        </section>
    );
};

export default Hero;
