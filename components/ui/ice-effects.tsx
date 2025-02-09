const IceEffects = () => {
    return (
        <div className='pointer-events-none fixed inset-0 overflow-hidden'>
            {/* Frost overlay */}
            <div className='absolute inset-0 animate-frost-shimmer bg-gradient-to-br from-white/50 to-transparent' />

            {/* Floating ice crystals */}
            <div className='absolute inset-0'>
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className='absolute animate-ice-float text-xl text-white/50'
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}>
                        ❄
                    </div>
                ))}
            </div>

            {/* Spinning crystal in corner */}
            <div className='absolute right-4 top-4 animate-crystal-spin text-white/50'>✧</div>
        </div>
    );
};

export default IceEffects;
