import AboutPage from '@/components/about/AboutPage';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'About — Tim & Kontakt',
  description:
    'Upoznajte Max Detailing tim — sertifikovani detailing majstori u Beogradu. Pišite nam, pozovite ili ispunite kontakt formu za besplatnu procenu.',
  alternates: {canonical: 'https://max-detailing.hok.rs/about'},
};

export default function AboutPageRoute() {
  return <AboutPage />;
}
