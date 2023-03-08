import { Variants } from 'framer-motion';

export const slideInVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 200,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const slideInVariantsReducedMotion: Variants = {
  offscreen: {
    opacity: 0,
    y: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
  },
};

export const slideInItemVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: 50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.5,
    },
  },
};

export const slideInItemVariantsReducedMotion: Variants = {
  offscreen: {
    opacity: 0,
    x: 0,
  },
  onscreen: {
    opacity: 1,
    x: 0,
  },
};
