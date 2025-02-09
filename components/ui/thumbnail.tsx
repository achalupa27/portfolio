import { useTheme } from '../../hooks/use-theme';

type Props = {
    icon: React.ReactNode;
    size?: 'lg';
};

const Thumbnail = ({ icon, size }: Props) => {
    const { bgSecondary, bg, rounded } = useTheme();

    return <div className={`flex items-center justify-center ${rounded} ${bg} p-2`}>{icon}</div>;
};

export default Thumbnail;
