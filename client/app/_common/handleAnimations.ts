export const animPopCenter= {
    initial: { opacity: 1, scale: 0.99 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: 'easeOut' },
    whileHover: { scale: 1.0 },
};

export const animPopCenterClick  = {
   ...animPopCenter,
    whileTap: { scale: 0.95 },
};
