import Link from 'next/link';

const Header = () => (
  <header className={`flex items-center`}>
    <nav className="mx-8 h-40">
      <Link href="/" aria-label="Link zur Homepage"></Link>
    </nav>
  </header>
);

export default Header;
