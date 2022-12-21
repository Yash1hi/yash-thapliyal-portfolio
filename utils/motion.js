export const textContainer = {
    hidden: {
        opactity: 0,
    },
    show: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: i * 0.1},
    }),
};

export const navVarients = {
    hidden: {
        opactity: 0,
        y: -120, 
        transition: {
            type: 'spring',
            stiffness: 20,
            dampening: 100,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: { 
            type: 'spring', 
            stiffness: 100,
            delay: 0,
        },
    },
};

