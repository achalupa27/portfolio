import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectTheme, selectActiveSection, setActiveSection } from '../../../redux/slices/themeSlice';
import { themes } from '../../../themes';
import WorkCard from './WorkCard';
import { workExperience } from './workData';

const Work = () => {
    const dispatch = useAppDispatch();
    const sectionRef = useRef(null);

    const selectedTheme = useAppSelector(selectTheme);
    const style = themes[selectedTheme];
    const bgSecondary = style.bgSecondary;
    const bg = style.bg;
    const border = style.border;
    const text = style.text;

    const activeSection = useAppSelector(selectActiveSection);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    dispatch(setActiveSection('work'));
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
        <section id='work' ref={sectionRef} className='relative mx-auto flex w-[400px] max-w-7xl flex-col items-center px-5 pb-36 pt-16 md:w-[530px]'>
            <div className={`mb-6 space-x-2 text-3xl ${activeSection === 'work' ? `${bg} ${text}` : ''}`}>
                {/* <i className='fi fi-rr-briefcase text-2xl' /> */}
                <span className='font-[Aeonik Trial]'>Work Experience</span>
            </div>
            <WorkCard workExperience={workExperience} />
        </section>
    );
};

export default Work;
