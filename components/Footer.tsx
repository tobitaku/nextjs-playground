import Link from 'next/link';
import SocialButton from './SocialButton';
import githubLogo from '../public/github-mark.svg';
import linkedinLogo from '../public/linkedin.png';
import Image from 'next/image';

const Footer = () => (
  <footer className={`flex flex-col items-center`}>
    <div className="flex h-auto w-full max-w-full flex-wrap items-center p-8 shadow-2xl">
      <div className="my-10 flex flex-col flex-wrap space-y-4">
        <h3 className="text-lg font-medium">tobiasziegler.dev</h3>
        <Link
          className="text-md font-light"
          href="/impressum"
          aria-label="Link zum Impressum"
        >
          Impressum
        </Link>
        <Link
          className="text-md font-light"
          href="/datenschutz"
          aria-label="Link zur Datenschutzerklärung"
        >
          Datenschutz
        </Link>
      </div>
      <SocialButton href="https://github.com/tobitaku">
        GitHub <Image className="ml-1" src={githubLogo} alt="GitHub Logo" />
      </SocialButton>
      <SocialButton href="https://www.linkedin.com/in/tobias-ziegler-8aba27181/">
        LinkedIn{' '}
        <Image
          width={25}
          height={25}
          className="ml-1"
          src={linkedinLogo}
          alt="LinkedIn Logo"
        />
      </SocialButton>
    </div>
  </footer>
);

export default Footer;
