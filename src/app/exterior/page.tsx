import ExteriorPage from '@/components/exterior/ExteriorPage';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Exterior Detailing — Poliranje, Keramička Zaštita & PPF',
  description:
    'Profesionalni exterior detailing u Beogradu. Pranje i dekontaminacija, mašinsko poliranje (paint correction), keramička zaštita (coating) i PPF zaštitna folija.',
  alternates: {canonical: 'https://max-detailing.hok.rs/exterior'},
};

export default function ExteriorPageRoute() {
  return <ExteriorPage />;
}
