import { motion } from 'framer-motion';

const GlowingMovingDiv3 = () => {
  return (
    <motion.div
      className="glowing-div-3"
      Framer Motion animation settings
      animate={{
        translateX: ["0%", "100%", "0%", "0%"],  // Move 50% to the left
        translateY: ["0%", "-40%", "0%", "0%"],   // Move 10% down
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

export default GlowingMovingDiv3;
