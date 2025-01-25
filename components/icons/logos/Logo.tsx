const Logo = ({ width = 32, height = 32 }) => {
    return (
        <svg width={width} height={height} viewBox='0, 0, 200, 200' xmlns='http://www.w3.org/2000/svg'>
            <path d='M 40,150 L 100,50 L 160,150 L 142,150 L 100,78 L 58,150 Z' fill='black' />
            <text x='143' y='148' font-family='Poppins' font-size='12' font-weight='600' fill='white'>
                C
            </text>
            <text x='152' y='148' font-family='Poppins' font-size='8' font-weight='400' fill='white'>
                .
            </text>
        </svg>
    );
};

export default Logo;
