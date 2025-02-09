import { useEffect, useRef, useState, useMemo } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useAppSelector } from '../../redux/hooks';
import { selectTheme } from '../../redux/slices/themeSlice';
import * as opentype from 'opentype.js';
import { separate } from 'flubber';

interface MorphingTextProps {
    text: string;
    className?: string;
}

interface CharacterPath {
    char: string;
    sans: string;
    serif: string;
    width: number;
    interpolator?: (t: number) => string;
    isSpace?: boolean;
}

const formatSVGPath = (path: string): string => {
    if (!path) return 'M0,0Z'; // Return a valid empty path
    let formatted = path;
    if (!formatted.startsWith('M')) {
        formatted = 'M' + formatted;
    }
    if (!formatted.endsWith('Z')) {
        formatted = formatted + 'Z';
    }
    return formatted;
};

const MorphingText = ({ text, className = '' }: MorphingTextProps) => {
    const theme = useAppSelector(selectTheme);
    const svgRef = useRef<SVGSVGElement>(null);
    const [characters, setCharacters] = useState<CharacterPath[]>([]);
    const fontSize = 48;

    useEffect(() => {
        const loadFonts = async () => {
            try {
                const [sansFont, serifFont] = await Promise.all([opentype.load('/fonts/inter/inter-regular.woff'), opentype.load('/fonts/merriweather/pt-serif-regular.woff')]);

                const charPaths: CharacterPath[] = [];
                let currentX = 0;

                for (const char of text) {
                    // Handle spaces
                    if (char === ' ') {
                        const spaceWidth = sansFont.getAdvanceWidth(' ', fontSize);
                        charPaths.push({
                            char: ' ',
                            sans: 'M0,0Z',
                            serif: 'M0,0Z',
                            width: spaceWidth,
                            isSpace: true,
                        });
                        currentX += spaceWidth;
                        continue;
                    }

                    const sansPath = sansFont.getPath(char, currentX, fontSize, fontSize);
                    const serifPath = serifFont.getPath(char, currentX, fontSize, fontSize);
                    const width = sansFont.getAdvanceWidth(char, fontSize);

                    const sans = formatSVGPath(sansPath.toPathData(3));
                    const serif = formatSVGPath(serifPath.toPathData(3));

                    try {
                        const interpolator = separate(sans, [serif], {
                            single: true,
                            maxSegmentLength: 2,
                            string: true,
                        });

                        charPaths.push({
                            char,
                            sans,
                            serif,
                            width,
                            interpolator,
                        });
                    } catch (error) {
                        console.error(`Failed to create interpolator for character: ${char}`, error);
                        charPaths.push({
                            char,
                            sans,
                            serif,
                            width,
                        });
                    }

                    currentX += width + 2;
                }

                setCharacters(charPaths);
            } catch (error) {
                console.error('Error loading fonts:', error);
            }
        };

        loadFonts();
    }, [text]);

    const totalWidth = useMemo(() => characters.reduce((sum, char) => sum + char.width + 2, 0), [characters]);

    const { t } = useSpring({
        t: theme === 'earth' ? 1 : 0,
        config: {
            duration: 50,
            tension: 170,
            friction: 26,
        },
    });

    return (
        <svg ref={svgRef} className={className} width='100%' height='100%' viewBox={`0 0 ${totalWidth} ${fontSize * 1.5}`} preserveAspectRatio='xMidYMid meet'>
            {characters.map((char, index) =>
                char.isSpace ? null : (
                    <animated.path
                        key={`${char.char}-${index}`}
                        d={t.to((t) => {
                            if (char.interpolator) {
                                try {
                                    return char.interpolator(t);
                                } catch (error) {
                                    console.error(`Interpolation failed for ${char.char}`, error);
                                    return char.sans;
                                }
                            }
                            return char.sans;
                        })}
                        fill='currentColor'
                        strokeWidth='1'
                    />
                )
            )}
        </svg>
    );
};

export default MorphingText;
