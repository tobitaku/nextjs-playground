import { m, Cycle, useCycle } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo-main.webp';

const toggleMenu = (toggleFunction: Cycle) => {
  document.body.classList.toggle('overflow-hidden');
  document.getElementById('__next')?.classList.toggle('overflow-hidden');
  toggleFunction();
};

const Menu = ({ toggle }: { toggle: Cycle }) => (
  <>
    <button
      onClick={() => toggleMenu(toggle)}
      className="z-10 h-[50px] w-[50px] rounded-full p-3 shadow-lg md:hidden"
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <m.path
          variants={{
            closed: { d: 'M4 6L20 6' },
            open: { d: 'M4 6L20 18' },
          }}
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
        ></m.path>
        <m.path
          variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
          d="M4 12L20 12"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
        ></m.path>
        <m.path
          variants={{
            closed: { d: 'M4 18L20 18' },
            open: { d: 'M4 18L20 6' },
          }}
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
        ></m.path>
      </svg>
    </button>
  </>
);

const Header = () => {
  const [isOpen, toggle] = useCycle(false, true);
  const navLinks = [
    { value: 'Home', href: '/' },
    { value: 'Blog', href: '/blog' },
  ];

  return (
    <header className="flex justify-center">
      <m.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className="flex w-full max-w-6xl items-center justify-between p-8 md:justify-start"
      >
        <Link href="/" aria-label="Link zur Homepage">
          <Image
            src={logo}
            alt="Tobias Ziegler Logo"
            className="sticky top-0"
            width={50}
            height={50}
          />
        </Link>
        <Menu toggle={toggle} />
        <m.div
          variants={{
            open: {
              width: '100vw',
              display: 'block',
              transition: { staggerChildren: 100 },
            },
            closed: { width: 0, display: 'none' },
          }}
          className="absolute top-0 right-0 h-screen overscroll-contain bg-white"
        >
          <ul className="mt-24 w-full space-y-4 p-8 text-right">
            {navLinks.map((navLink) => (
              <li key={navLink.href}>
                <Link
                  className="text-3xl font-bold text-slate-800"
                  href={navLink.href}
                  onClick={() => navLink.href === '/' && toggleMenu(toggle)}
                >
                  {navLink.value}
                </Link>
              </li>
            ))}
          </ul>
        </m.div>
        <ul className="ml-12 flex space-x-4 max-md:hidden">
          {navLinks
            .filter((navLink) => navLink.href !== '/')
            .map((navLink) => (
              <m.li
                whileHover={{
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                }}
                key={navLink.href}
              >
                <Link
                  className="text-md font-semibold text-slate-800"
                  href={navLink.href}
                  onClick={() => navLink.href === '/' && toggleMenu(toggle)}
                >
                  {navLink.value}
                </Link>
              </m.li>
            ))}
        </ul>
      </m.nav>
    </header>
  );
};

export default Header;
