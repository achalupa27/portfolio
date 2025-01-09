import { useRef, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { selectTheme, setActiveSection } from '../../../redux/slices/themeSlice';
import { getThemeStyles } from '../../../utils/themeUtils';
import Image from 'next/image';
import { themes } from '../../../themes';
import Link from 'next/link';

const Hero = () => {
    const selectedTheme = useAppSelector(selectTheme);
    const style = themes[selectedTheme];
    const bgSecondary = style.bgSecondary;
    const bg = style.bg;
    const border = style.border;
    const text = style.text;

    const dispatch = useAppDispatch();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    dispatch(setActiveSection('profile'));
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [dispatch]);

    return (
        <section id='hero' ref={sectionRef} className='mx-auto flex items-center justify-center'>
            <div className={`flex flex-col items-center rounded ${border} ${bgSecondary} z-10 mt-24 w-[360px] px-8 py-6  md:w-auto`}>
                <Image className='rounded-sm' src={'/canada.svg'} alt={`canada-flag`} width={32} height={15} />
                <p className='text-3xl'>Andrew Chalupa</p>
                <div className='flex items-center space-x-2 text-sm opacity-60'>
                    <p className='-mt-1'>B.Sc. Computer Science</p>
                </div>
                <div className='flex w-fit items-center justify-start space-x-3 pt-3'>
                    <Link className={`hover:${bg} flex h-8 w-8 items-center justify-center rounded hover:${text}`} href='https://www.github.com/achalupa27' target='_blank'>
                        <Image src='/github.svg' width={20} height={20} alt={'github-logo'} />
                    </Link>
                    <Link className={`hover:${bg} flex h-8 w-8 items-center justify-center rounded hover:${text}`} href='https://www.linkedin.com/in/andrew-chalupa-b03b57262/' target='_blank'>
                        <Image src='/linkedin.svg' width={20} height={20} alt={'linkedin-logo'} />
                    </Link>
                    <Link href='https://www.linkedin.com/in/andrew-chalupa-b03b57262/' target='_blank' className='flex h-8 w-8 items-center justify-center'>
                        <i className='fi fi-sr-file-pdf text-[19px] leading-[0px]'></i>
                    </Link>
                </div>
                <p className='mt-3 text-center font-medium'>
                    Full-Stack Developer <br className='md:hidden' />
                    <span className='opacity-50'>specializing in</span>
                    <br className='md:hidden' /> B2C Websites <span className='opacity-50'>and </span> ERP Solutions
                </p>
            </div>
        </section>
    );
};

export default Hero;
