import Card from '@/components/Card';
import ContactButton from '@/components/ContactButton';
import GradientText from '@/components/GradientText';
import Image from 'next/image';
import { m, useReducedMotion } from 'framer-motion';
import {
  slideInItemVariants,
  slideInVariants,
  slideInVariantsReducedMotion,
} from '@/shared/animations';
import profilePic from '../public/profile.webp';
import Head from '@/components/Head';

const Home = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
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
      <m.section
        variants={
          prefersReducedMotion ? slideInVariantsReducedMotion : slideInVariants
        }
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="mb-8 flex w-full flex-col items-center justify-center md:flex-row"
      >
        <div className="m-8 max-w-sm">
          <Image
            src={profilePic}
            alt="Profile picture"
            className="max-w-full shrink rounded-full"
            priority
          />
        </div>
        <div className="mx-8 md:flex md:flex-col md:justify-center">
          <m.h1
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="my-4 text-5xl font-extrabold tracking-tighter"
          >
            Hi, ich bin <GradientText gradient="indigo">Tobias.</GradientText>
          </m.h1>
          <m.h1
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="mb-8 text-3xl font-bold text-slate-800"
          >
            Webentwickler & Enthusiast aus Nürnberg.
          </m.h1>
          <ContactButton />
        </div>
      </m.section>
      <m.section className="mb-8 flex w-full flex-col items-center justify-center">
        <Card dark>
          <m.h2
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="text-4xl font-bold tracking-tighter"
          >
            <GradientText gradient="amber">Portfolio</GradientText>
          </m.h2>
          <m.p
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="text-md mb-4 font-light"
          >
            Mär. 2023
          </m.p>
          <m.p
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="mb-4 text-lg font-semibold"
          >
            Erstellung meiner persönlichen Website mit den Technologien:
          </m.p>
          <m.ul
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="text-md ml-4 list-disc font-semibold"
          >
            <li>Next.js ⚛</li>
            <li>Tailwind 🌬️</li>
            <li>Apollo 🧑‍🚀</li>
          </m.ul>
        </Card>
        <Card dark>
          <m.h2
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="text-4xl font-bold tracking-tighter"
          >
            <GradientText gradient="amber">Full Stack Entwicklung</GradientText>
          </m.h2>
          <m.p
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="text-md mb-4 font-light"
          >
            2017 - heute
          </m.p>
          <m.p
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="mb-4 text-lg font-semibold"
          >
            In meinem Beruf sammle ich täglich Erfahrung mit den Technologien:
          </m.p>
          <m.ul
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="text-md ml-4 list-disc font-semibold"
          >
            <li>React ⚛</li>
            <li>Java und CMS ☕️</li>
            <li>CI/CD 👷‍♂️</li>
          </m.ul>
        </Card>
      </m.section>
      <m.section className="mb-8 flex w-full justify-center">
        <Card>
          <m.h2
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="mb-4 text-4xl font-bold tracking-tighter"
          >
            <GradientText gradient="indigo">Kontaktiere mich</GradientText>
          </m.h2>
          <m.p
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="mb-8 text-lg font-semibold text-slate-800"
          >
            Ich freue mich, von dir zu hören! Schicke mir eine Nachricht und ich
            werde mich so schnell wie möglich bei dir melden.
          </m.p>
          <ContactButton />
        </Card>
      </m.section>
    </>
  );
};

export default Home;
