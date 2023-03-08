import {
  slideInItemVariants,
  slideInItemVariantsReducedMotion,
} from '@/shared/animations';
import { motion, useReducedMotion } from 'framer-motion';

const ContactButton = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <a className="w-fit" href="mailto:me@tobiasziegler.dev">
      <motion.button
        variants={
          prefersReducedMotion
            ? slideInItemVariantsReducedMotion
            : slideInItemVariants
        }
        className="rounded-full px-4 py-3 text-lg font-bold text-slate-800 shadow-md hover:bg-slate-100 focus:active:bg-slate-200"
      >
        Kontaktieren 👋
      </motion.button>
    </a>
  );
};

export default ContactButton;
