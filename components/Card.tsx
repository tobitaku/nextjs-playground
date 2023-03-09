import { PropsWithChildren } from 'react';

const Card = ({ dark, children }: { dark?: boolean } & PropsWithChildren) => (
  <div
    className={`mb-8 w-full max-w-3xl items-center rounded-xl p-8 shadow-xl ${
      dark
        ? 'bg-gradient-to-b from-slate-700 via-slate-800  to-slate-900 text-white'
        : ''
    }`}
  >
    {children}
  </div>
);
export default Card;
