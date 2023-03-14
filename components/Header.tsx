import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo-main.webp';

const Header = () => (
  <header className="flex justify-center">
    <nav className="w-full max-w-6xl p-8">
      <Link href="/" aria-label="Link zur Homepage">
        <Image
          src={logo}
          alt="Tobias Ziegler Logo"
          className="sticky top-0"
          width={50}
          height={50}
        />
      </Link>
    </nav>
  </header>
);

export default Header;
