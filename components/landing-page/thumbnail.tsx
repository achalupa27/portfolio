import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectTheme } from '../../redux/slices/themeSlice';
import { themes } from '../../themes';

type Props = {
    icon: React.ReactNode;
    size?: 'lg';
};

const Thumbnail = ({ icon, size }: Props) => {
    const selectedTheme = useAppSelector(selectTheme);
    const { bgSecondary, bg } = themes[selectedTheme];

    return <div className={`flex items-center justify-center rounded ${bg} p-2`}>{icon}</div>;
};

export default Thumbnail;
