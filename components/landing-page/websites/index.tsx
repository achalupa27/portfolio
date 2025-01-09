import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectActiveSection, selectTheme, setActiveSection } from '../../../redux/slices/themeSlice';
import { getThemeStyles } from '../../../utils/themeUtils';
import ProjectCard from './WebsiteCard';
import { cleantradesProject, lightsuiteProject, lunariaProject, mapfeedProject } from './websiteData';

const Websites = () => {
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();
    const sectionRef = useRef(null);
    const styles = getThemeStyles(theme);
    const bgInvertedColor = styles.inverted.bg;
    const textInvertedColor = styles.inverted.text;
    const activeSection = useAppSelector(selectActiveSection);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    dispatch(setActiveSection('websites'));
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
        <section id='websites' ref={sectionRef} className='relative mx-auto flex max-w-7xl flex-col items-center'>
            <div className={`mb-6 space-x-2 rounded px-2 text-3xl ${activeSection === 'websites' ? `${bgInvertedColor} ${textInvertedColor}` : ''}`}>
                {/* <i className='fi fi-rr-window-alt text-2xl' /> */}
                <span className='font-[Aeonik Trial]'>Websites</span>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-1'>
                <ProjectCard project={cleantradesProject} />
                <ProjectCard project={lightsuiteProject} />
                <ProjectCard project={lunariaProject} />
                {/* <ProjectCard project={mapfeedProject} /> */}
            </div>
        </section>
    );
};

export default Websites;
