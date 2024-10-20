/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const MovingStar = ({ src, className, xMovement, yMovement, width, duration = 20 }) => {
    return (
        <motion.img
            src={src}
            className={className}
            animate={{
                x: xMovement,
                y: yMovement,
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            style={{
                width: width || "auto", // Default width if not provided
            }}
        />
    );
};

export default MovingStar;
