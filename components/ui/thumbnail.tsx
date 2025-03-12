import React from 'react';
import { useTheme } from '../../hooks/use-theme';

interface ThumbnailProps {
    icon: React.ReactNode;
    size: number;
    text?: string;
    showTextOnHover?: boolean;
    alwaysShowText?: boolean;
}

const Thumbnail = ({ icon, size, text, showTextOnHover = false, alwaysShowText = false }: ThumbnailProps) => {
    const { bgSecondary, bg, rounded } = useTheme();

    return (
        <div
            className={`flex flex-col items-center justify-center ${rounded} ${bg} p-3 transition-all duration-200 ${showTextOnHover ? 'group-hover:scale-105' : ''}`}
            style={{
                width: `${size}px`,
                minHeight: `${size}px`,
            }}>
            {/* Icon */}
            <div className='flex items-center justify-center' style={{ height: `${size * 0.6}px` }}>
                {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement, { size: size * 0.5 }) : icon}
            </div>

            {/* Text */}
            {text && (
                <div
                    className={`mt-2 text-center text-xs transition-opacity duration-200 
                        ${showTextOnHover && !alwaysShowText ? 'opacity-0 group-hover:opacity-100' : ''}`}>
                    {text}
                </div>
            )}
        </div>
    );
};

export default Thumbnail;
