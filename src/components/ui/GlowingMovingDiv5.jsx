import { motion } from 'framer-motion';

const GlowingMovingDiv5 = () => {
  return (
    <motion.div
      className="glowing-div-5"
      Framer Motion animation settings
      animate={{
        x: [0, -500, 0, 0],  // Move horizontally
        y: [0, 50, 0, 0],    // Move vertically
      }}
      transition={{
        duration: 5,           // Duration of animation cycle
        repeat: Infinity,      // Infinite repeat
        ease: "easeInOut",     // Smooth movement
      }}
    >
      Glowing Div
    </motion.div>
  );
};

export default GlowingMovingDiv5;
