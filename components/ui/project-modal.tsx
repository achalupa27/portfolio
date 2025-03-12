import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/use-theme';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import SkillCard from '../../features/skills/skill-card';
import { useEffect, useState } from 'react';

interface ProjectModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    const { rounded, border, bgSecondary, bg } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <div className='fixed inset-0 flex items-center justify-center'>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='absolute inset-0 z-[100] bg-black/20 backdrop-blur-sm' onClick={onClose} />
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className={`relative z-[101] w-[95%] max-w-2xl ${rounded} ${border} ${bgSecondary} max-h-[90vh] overflow-y-auto p-6`}>
                        <button onClick={onClose} className='absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800'>
                            <X size={24} />
                        </button>

                        <div className='space-y-4 pt-2'>
                            {/* Header */}
                            <div className='flex items-center space-x-3'>
                                <div className='h-12 w-12'>{project.logo}</div>
                                <div>
                                    <h2 className='text-xl font-semibold'>{project.name}</h2>
                                    <p className='text-sm opacity-70'>{project.category}</p>
                                </div>
                            </div>

                            {/* Video/Image Placeholder */}
                            <div className={`${border} ${rounded} aspect-video w-full ${bg}`} />

                            {/* Description */}
                            <p className='text-sm leading-relaxed opacity-80'>{project.description}</p>

                            {/* Technologies */}
                            <div>
                                <h3 className='mb-2 text-sm font-medium'>Technologies</h3>
                                <div className='flex flex-wrap gap-2'>
                                    {project.technologies.map((tech, index) => (
                                        <SkillCard key={index} skill={tech} />
                                    ))}
                                </div>
                            </div>

                            {/* Visit Button */}
                            <a href={project.url} target='_blank' className={`${bg} ${rounded} inline-block px-4 py-2 text-sm transition duration-200 hover:bg-gray-100 dark:hover:bg-gray-800`}>
                                Visit Project
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );

    // Only render the portal on the client side
    if (!mounted) return null;
    return createPortal(modalContent, document.body);
};

export default ProjectModal;
