/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const GlowingMovingDiv = ({ className, translateX, translateY, duration = 20 }) => {
    return (
        <motion.div
            className={className}
            animate={{
                translateX,
                translateY,
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
        </motion.div>
    );
};

export default GlowingMovingDiv;
