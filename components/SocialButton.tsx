import { PropsWithChildren } from 'react';

const SocialButton = ({
  href,
  children,
}: { href: string } & PropsWithChildren) => (
  <a href={href} target="_blank">
    <button className="text-md m-4 flex items-center rounded-full px-4 py-3 font-light shadow-md hover:bg-slate-100 focus:active:bg-slate-200">
      {children}
    </button>
  </a>
);

export default SocialButton;
