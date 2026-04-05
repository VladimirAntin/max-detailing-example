import InteriorPage from '@/components/interior/InteriorPage';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Enterijer Detailing — Dubinsko Čišćenje, Steam & Nega Kože',
  description:
    'Profesionalni enterijer detailing u Beogradu. Dubinsko čišćenje, steam cleaning, nega i zaštita kože, ekstrakciono pranje tepiha i deodorizacija enterijera.',
  alternates: {canonical: 'https://max-detailing.hok.rs/interior'},
};

export default function InteriorPageRoute() {
  return <InteriorPage />;
}
