import { PropsWithChildren } from 'react';

const StaticPageSection = ({ children }: PropsWithChildren) => (
  <section className="my-8">{children}</section>
);

export default StaticPageSection;
