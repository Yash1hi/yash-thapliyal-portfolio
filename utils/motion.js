export const textContainer = {
    hidden: {
        opactity: 0,
    },
    show: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: i * 0.1},
    }),
};