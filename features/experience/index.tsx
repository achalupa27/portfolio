import { useState } from 'react';
import { useTheme } from '../../hooks/use-theme';
import WebsiteAccordion from './website-accordion';
import WorkAccordion from './work-accordion';

const Experience = () => {
    const { bgSecondary, border, rounded, bg } = useTheme();
    const [tab, setTab] = useState('work');

    return (
        <section id='experience'>
            <div className={`${border} ${rounded} ${bgSecondary}`}>
                <div className={`flex w-full justify-around py-1.5`}>
                    <button className='w-full' onClick={() => setTab('work')}>
                        Work
                    </button>
                    <button className='w-full' onClick={() => setTab('websites')}>
                        Websites
                    </button>
                </div>

                {tab === 'work' ? <WorkAccordion /> : <WebsiteAccordion />}
            </div>
        </section>
    );
};

export default Experience;
