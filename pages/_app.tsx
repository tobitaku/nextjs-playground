import { LazyMotion, domAnimation } from 'framer-motion';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion strict features={domAnimation}>
      <div className={`${inter.variable} font-sans antialiased`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </LazyMotion>
  );
}
