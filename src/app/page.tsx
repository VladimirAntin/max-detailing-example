import Hero from '@components/home/Hero';
import Services from '@components/home/Services';
import Contact from '@/components/Contact';
import Packages from '@components/home/Packages';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Max Detailing — Premium Car Detailing Beograd',
  description:
    'Premium car detailing u Beogradu. Poliranje, keramička zaštita (coating), PPF folija i dubinsko čišćenje enterijera. Rezervišite termin danas.',
  alternates: {canonical: 'https://max-detailing.hok.rs'},
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Packages />
      <Contact />
    </>
  );
}
