import { PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    <main className={`flex flex-col items-center`}>{children}</main>
    <Footer />
  </>
);

export default Layout;
