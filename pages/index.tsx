import Card from '@/components/Card';
import ContactButton from '@/components/ContactButton';
import GradientText from '@/components/GradientText';
import Image from 'next/image';
import profilePic from '../public/profile.webp';
import Head from '@/components/Head';

const Home = () => (
  <>
    <Head
      title="Tobias Ziegler | Webentwickler aus Nürnberg"
      description="Willkommen auf meiner Website! Ich bin ein leidenschaftlicher Webentwickler aus Nürnberg, der sich auf die Erstellung ansprechender und funktionaler Websites spezialisiert hat."
      structuredData={{
        '@context': 'http://schema.org/',
        '@type': 'Person',
        name: 'Tobias Ziegler',
        jobTitle: 'Webentwickler',
        birthPlace: 'Nürnberg',
        email: 'me@tobiasziegler.dev',
        url: 'https://tobiasziegler.dev',
      }}
      og
    />
    <section className="mb-8 flex w-full flex-col items-center justify-center md:flex-row">
      <div className="m-8 max-w-sm">
        <Image
          src={profilePic}
          alt="Profile picture"
          className="max-w-full shrink rounded-full"
          placeholder="empty"
          priority
        />
      </div>
      <div className="mx-8 md:flex md:flex-col md:justify-center">
        <h1 className="my-4 text-5xl font-extrabold tracking-tighter">
          Hi, ich bin <GradientText gradient="indigo">Tobias.</GradientText>
        </h1>
        <h1 className="mb-8 text-3xl font-bold text-slate-800">
          Webentwickler & Enthusiast aus Nürnberg.
        </h1>
        <ContactButton />
      </div>
    </section>
    <section className="mb-8 flex w-full flex-col items-center justify-center">
      <Card dark>
        <h2 className="text-4xl font-bold tracking-tighter">
          <GradientText gradient="amber">Portfolio</GradientText>
        </h2>
        <h6 className="text-md mb-4 font-light">Mär. 2023</h6>
        <p className="mb-4 text-lg font-semibold">
          Erstellung meiner persönlichen Website mit den Technologien:
        </p>
        <ul className="text-md ml-4 list-disc font-semibold">
          <li>Next.js ⚛</li>
          <li>Tailwind 🌬️</li>
          <li>Apollo 🧑‍🚀</li>
        </ul>
      </Card>
      <Card dark>
        <h2 className="text-4xl font-bold tracking-tighter">
          <GradientText gradient="amber">Full Stack Entwicklung</GradientText>
        </h2>
        <h6 className="text-md mb-4 font-light">2017 - heute</h6>
        <p className="mb-4 text-lg font-semibold">
          In meinem Beruf sammle ich täglich Erfahrung mit den Technologien:
        </p>
        <ul className="text-md ml-4 list-disc font-semibold">
          <li>React ⚛</li>
          <li>Java und CMS ☕️</li>
          <li>CI/CD 👷‍♂️</li>
        </ul>
      </Card>
    </section>
    <section className="mb-8 flex w-full justify-center">
      <Card>
        <h2 className="mb-4 text-4xl font-bold tracking-tighter">
          <GradientText gradient="indigo">Kontaktiere mich</GradientText>
        </h2>
        <p className="mb-8 text-lg font-semibold text-slate-800">
          Ich freue mich, von dir zu hören! Schicke mir eine Nachricht und ich
          werde mich so schnell wie möglich bei dir melden.
        </p>
        <ContactButton />
      </Card>
    </section>
  </>
);

export default Home;
