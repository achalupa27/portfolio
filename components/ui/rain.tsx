'use client';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

export const BackgroundBeamsWithCollision = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const parentRef = useRef<HTMLDivElement>(null);
    const [beams, setBeams] = useState<any[]>([]);
    const [mounted, setMounted] = useState(false);
    const [translateY, setTranslateY] = useState('2000px');

    const standardDuration = 4;

    const generateBeams = (width: number, height: number) => {
        const numberOfBeams = Math.floor(width / 30);
        const fallDistance = Math.max(2000, height * 2); // Ensure beams travel at least 2000px or 2x screen height
        setTranslateY(`${fallDistance}px`);
        const newBeams = [];

        // Create array of delays and shuffle them
        const delays = Array.from({ length: numberOfBeams }, (_, i) => (i / numberOfBeams) * standardDuration);
        const shuffledDelays = [...delays].sort(() => Math.random() - 0.5);

        // First set of beams with shuffled delays
        for (let i = 0; i < numberOfBeams; i++) {
            const x = (width / numberOfBeams) * i;
            newBeams.push({
                initialX: x,
                translateX: x,
                initialY: '-200px',
                translateY: `${fallDistance}px`,
                duration: standardDuration,
                repeatDelay: 0,
                delay: shuffledDelays[i],
                className: `h-${Math.floor(Math.random() * 12 + 8)} w-[${Math.floor(Math.random() * 3 + 1)}px]`,
            });
        }

        // Second set with different shuffled delays
        const shuffledDelays2 = [...delays].sort(() => Math.random() - 0.5);
        for (let i = 0; i < numberOfBeams; i++) {
            const x = (width / numberOfBeams) * i;
            newBeams.push({
                initialX: x,
                translateX: x,
                initialY: '-200px',
                translateY: `${fallDistance}px`,
                duration: standardDuration,
                repeatDelay: 0,
                delay: shuffledDelays2[i] + standardDuration / 2,
                className: `h-${Math.floor(Math.random() * 12 + 8)} w-[${Math.floor(Math.random() * 3 + 1)}px]`,
            });
        }

        setBeams(newBeams);
    };

    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            if (window) {
                generateBeams(window.innerWidth, window.innerHeight);
            }
        };

        if (mounted) {
            handleResize();
            window.addEventListener('resize', handleResize);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [mounted]);

    if (!mounted) return null;

    return (
        <div ref={parentRef} className={cn('fixed inset-0 z-0 flex items-center justify-center overflow-hidden')}>
            {beams.map((beam, index) => (
                <CollisionMechanism key={`beam-${index}-${beam.initialX}`} beamOptions={beam} containerRef={containerRef} parentRef={parentRef} />
            ))}

            <div
                ref={containerRef}
                className='pointer-events-none absolute inset-x-0 bottom-0 w-full bg-neutral-100'
                style={{
                    boxShadow: '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset',
                }}
            />
        </div>
    );
};

const CollisionMechanism = React.forwardRef<
    HTMLDivElement,
    {
        containerRef: React.RefObject<HTMLDivElement>;
        parentRef: React.RefObject<HTMLDivElement>;
        beamOptions?: {
            initialX?: number;
            translateX?: number;
            initialY?: number;
            translateY?: number;
            rotate?: number;
            className?: string;
            duration?: number;
            delay?: number;
            repeatDelay?: number;
        };
    }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
    const beamRef = useRef<HTMLDivElement>(null);
    const [collision, setCollision] = useState<{
        detected: boolean;
        coordinates: { x: number; y: number } | null;
    }>({
        detected: false,
        coordinates: null,
    });
    const [beamKey, setBeamKey] = useState(0);
    const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

    useEffect(() => {
        const checkCollision = () => {
            if (beamRef.current && containerRef.current && parentRef.current && !cycleCollisionDetected) {
                const beamRect = beamRef.current.getBoundingClientRect();
                const containerRect = containerRef.current.getBoundingClientRect();
                const parentRect = parentRef.current.getBoundingClientRect();

                if (beamRect.bottom >= containerRect.top) {
                    const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
                    const relativeY = beamRect.bottom - parentRect.top;

                    setCollision({
                        detected: true,
                        coordinates: {
                            x: relativeX,
                            y: relativeY,
                        },
                    });
                    setCycleCollisionDetected(true);
                }
            }
        };

        const animationInterval = setInterval(checkCollision, 50);

        return () => clearInterval(animationInterval);
    }, [cycleCollisionDetected, containerRef]);

    useEffect(() => {
        if (collision.detected && collision.coordinates) {
            setTimeout(() => {
                setCollision({ detected: false, coordinates: null });
                setCycleCollisionDetected(false);
            }, 2000);

            setTimeout(() => {
                setBeamKey((prevKey) => prevKey + 1);
            }, 2000);
        }
    }, [collision]);

    return (
        <>
            <motion.div
                key={beamKey}
                ref={beamRef}
                animate='animate'
                initial={{
                    translateY: beamOptions.initialY || '-200px',
                    translateX: beamOptions.initialX || '0px',
                    rotate: beamOptions.rotate || 0,
                }}
                variants={{
                    animate: {
                        translateY: beamOptions.translateY || '1800px',
                        translateX: beamOptions.translateX || '0px',
                        rotate: beamOptions.rotate || 0,
                    },
                }}
                transition={{
                    duration: beamOptions.duration || 8,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                    delay: beamOptions.delay || 0,
                    repeatDelay: beamOptions.repeatDelay || 0,
                }}
                className={cn('absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-gray-300 via-gray-400 to-transparent', beamOptions.className)}
            />
            <AnimatePresence>
                {collision.detected && collision.coordinates && (
                    <Explosion
                        key={`${collision.coordinates.x}-${collision.coordinates.y}`}
                        className=''
                        style={{
                            left: `${collision.coordinates.x}px`,
                            top: `${collision.coordinates.y}px`,
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                )}
            </AnimatePresence>
        </>
    );
});

CollisionMechanism.displayName = 'CollisionMechanism';

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
    const spans = Array.from({ length: 20 }, (_, index) => ({
        id: index,
        initialX: 0,
        initialY: 0,
        directionX: Math.floor(Math.random() * 80 - 40),
        directionY: Math.floor(Math.random() * -50 - 10),
    }));

    return (
        <div {...props} className={cn('absolute z-50 h-2 w-2', props.className)}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5, ease: 'easeOut' }} className='absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-gray-500 to-transparent blur-sm'></motion.div>
            {spans.map((span) => (
                <motion.span
                    key={span.id}
                    initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
                    animate={{
                        x: span.directionX,
                        y: span.directionY,
                        opacity: 0,
                    }}
                    transition={{ duration: Math.random() * 1.5 + 0.5, ease: 'easeOut' }}
                    className='absolute h-1 w-1 rounded-full bg-gradient-to-b from-gray-500 to-gray-300'
                />
            ))}
        </div>
    );
};
