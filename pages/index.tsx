import Card from '@/components/Card';
import ContactButton from '@/components/ContactButton';
import GradientText from '@/components/GradientText';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import {
  slideInItemVariants,
  slideInVariants,
  slideInVariantsReducedMotion,
} from '@/shared/animations';
import profilePic from '../public/profile.png';
import Head from '@/components/Head';

export default function Home() {
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
      <motion.section
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
          <motion.h1
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="my-4 text-5xl font-extrabold tracking-tighter"
          >
            Hi, ich bin <GradientText gradient="indigo">Tobias.</GradientText>
          </motion.h1>
          <motion.h1
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="mb-8 text-3xl font-bold text-slate-800"
          >
            Webentwickler & Enthusiast aus Nürnberg.
          </motion.h1>
          <ContactButton />
        </div>
      </motion.section>
      <section className="mb-8 flex w-full flex-col items-center justify-center">
        <Card dark>
          <motion.h2
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="text-4xl font-bold tracking-tighter"
          >
            <GradientText gradient="amber">Portfolio</GradientText>
          </motion.h2>
          <motion.h6
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="text-md mb-4 font-light"
          >
            Mär. 2023
          </motion.h6>
          <motion.p
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="mb-4 text-lg font-semibold"
          >
            Erstellung meiner persönlichen Website mit den Technologien:
          </motion.p>
          <motion.ul
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
          </motion.ul>
        </Card>
        <Card dark>
          <motion.h2
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="text-4xl font-bold tracking-tighter"
          >
            <GradientText gradient="amber">Full Stack Entwicklung</GradientText>
          </motion.h2>
          <motion.h6
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="text-md mb-4 font-light"
          >
            2017 - heute
          </motion.h6>
          <motion.p
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="mb-4 text-lg font-semibold"
          >
            In meinem Beruf sammle ich täglich Erfahrung mit den Technologien:
          </motion.p>
          <motion.ul
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
          </motion.ul>
        </Card>
      </section>
      <section className="mb-8 flex w-full justify-center">
        <Card>
          <motion.h2
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="mb-4 text-4xl font-bold tracking-tighter"
          >
            <GradientText gradient="indigo">Kontaktiere mich</GradientText>
          </motion.h2>
          <motion.p
            variants={
              prefersReducedMotion
                ? slideInVariantsReducedMotion
                : slideInItemVariants
            }
            className="mb-8 text-lg font-semibold text-slate-800"
          >
            Ich freue mich, von dir zu hören! Schicke mir eine Nachricht und ich
            werde mich so schnell wie möglich bei dir melden.
          </motion.p>
          <ContactButton />
        </Card>
      </section>
    </>
  );
}
