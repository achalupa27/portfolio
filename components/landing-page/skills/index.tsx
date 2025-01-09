import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { selectActiveSection, selectTheme, setActiveSection } from '../../../redux/slices/themeSlice';
import { getThemeStyles } from '../../../utils/themeUtils';
import SkillCard from './SkillCard';
import { figmaSkill, firestoreSkill, githubSkill, gitSkill, mysqlSkill, nextJsSkill, npmSkill, photoshopSkill, postgresSkill, pythonSkill, reactSkill, reduxSkill, restSkill, stripeSkill, supabaseSkill, tailwindSkill, typescriptSkill, vercelSkill, vitestSkill, vscodeSkill } from './skillData';
import { themes } from '../../../themes';

const Skills = () => {
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();
    const sectionRef = useRef(null);

    const styles = getThemeStyles(theme);
    const bgInvertedColor = styles.border;
    const textInvertedColor = styles.buttonHover;
    const themeColors = themes[theme];

    const activeSection = useAppSelector(selectActiveSection);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    dispatch(setActiveSection('skills'));
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
        <section id='skills' ref={sectionRef} className='mx-auto mt-24 flex max-w-7xl flex-col items-center justify-center space-y-3'>
            <div className={`mb-6 rounded px-2 text-3xl`}>
                {/* <i className='fi fi-rr-hammer-crash text-2xl' /> */}
                <h2 className=''>Current Technologies</h2>
            </div>
            <div className='flex flex-wrap justify-center gap-3'>
                <SkillCard skill={nextJsSkill} />
                <SkillCard skill={reactSkill} />
                <SkillCard skill={typescriptSkill} />
                <SkillCard skill={tailwindSkill} />
                <SkillCard skill={reduxSkill} />
                <SkillCard skill={pythonSkill} />
                <SkillCard skill={postgresSkill} />
                <SkillCard skill={supabaseSkill} />
                <SkillCard skill={vercelSkill} />
                <SkillCard skill={stripeSkill} />
            </div>
        </section>
    );
};

export default Skills;
