import {
  slideInVariants,
  slideInVariantsReducedMotion,
} from '@/shared/animations';
import { m, useReducedMotion } from 'framer-motion';
import { PropsWithChildren } from 'react';

const Card = ({ dark, children }: { dark?: boolean } & PropsWithChildren) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.div
      variants={
        prefersReducedMotion ? slideInVariantsReducedMotion : slideInVariants
      }
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className={`mb-8 w-full max-w-4xl items-center rounded-xl p-8 shadow-xl ${
        dark
          ? 'bg-gradient-to-b from-slate-700 via-slate-800  to-slate-900 text-white'
          : ''
      }`}
    >
      {children}
    </m.div>
  );
};
export default Card;
