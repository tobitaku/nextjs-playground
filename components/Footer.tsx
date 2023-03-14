import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo-main.webp';

const Footer = () => (
  <footer className="text-md flex justify-center font-normal shadow-2xl">
    <div className="flex w-full max-w-6xl flex-col items-center space-y-4 p-8 md:flex-row md:items-center md:space-y-0 md:space-x-4">
      <Link
        href="/"
        className="flex items-center"
        aria-label="Link zur Homepage"
      >
        <Image
          src={logo}
          alt="Tobias Ziegler Logo"
          className="inline-block"
          width={50}
          height={50}
        />
        <span className="ml-4 text-lg font-bold tracking-tighter">
          Tobias Ziegler
        </span>
      </Link>
      <Link href="/impressum" aria-label="Link zum Impressum">
        Impressum
      </Link>
      <Link href="/datenschutz" aria-label="Link zur Datenschutzerklärung">
        Datenschutz
      </Link>
      <a href="https://github.com/tobitaku" target="_blank">
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/tobias-ziegler-8aba27181/"
        target="_blank"
      >
        LinkedIn
      </a>
    </div>
  </footer>
);

export default Footer;
