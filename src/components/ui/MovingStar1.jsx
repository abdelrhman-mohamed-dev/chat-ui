import { motion } from "framer-motion";

const MovingStar = () => {
    return (
        <motion.img
            src="/imgs/star1.svg"
            className="star-1"
            animate={{
                x: [-20, 20, -20], // Move left and right
                y: [-40, 40, -40], // Move up and down
            }}
            transition={{
                duration: 5, // Duration of the animation cycle
                repeat: Infinity, // Loop the animation infinitely
                ease: "easeInOut", // Smooth movement
            }}
            style={{
                width: "40px",
            }}
        />
    );
};

export default MovingStar;
