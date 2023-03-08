import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header
        className={`${inter.variable} flex items-center font-sans antialiased`}
      >
        <Header />
      </header>
      <main
        className={`${inter.variable} flex flex-col items-center font-sans antialiased`}
      >
        <Component {...pageProps} />
      </main>
      <footer
        className={`${inter.variable} flex flex-col items-center font-sans antialiased`}
      >
        <Footer />
      </footer>
    </>
  );
}
