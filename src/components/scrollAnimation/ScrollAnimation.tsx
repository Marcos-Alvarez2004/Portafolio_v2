import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface CardVariantProps {
  children: React.ReactNode;
}

const cardVariant: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const scrollAnimation: React.FC<CardVariantProps> = ({ children }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div id="animationScroll" variants={cardVariant}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default scrollAnimation;
