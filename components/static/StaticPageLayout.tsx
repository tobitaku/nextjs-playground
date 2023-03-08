import { PropsWithChildren } from 'react';

const StaticPageLayout = ({ children }: PropsWithChildren) => (
  <div className="w-11/12">{children}</div>
);

export default StaticPageLayout;
