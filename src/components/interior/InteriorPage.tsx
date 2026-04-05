'use client';
import {memo} from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import ArrowIcon from '@/icons/ArrowIcon';
import WaveDivider from '@/components/WaveDivider';
import {cn} from '@/utils/CN';

const SERVICES = [
  {
    title: 'Dubinsko Čišćenje Enterijera',
    description:
      'Kompletno dubinsko čišćenje unutrašnjosti vozila — usisavanje svih površina, čišćenje podnih prostirki, sedišta, dashboard-a, konzole, vrata i svih teško dostupnih mesta. Vraćamo enterijer u kao-novo stanje.',
    features: [
      'Usisavanje svih površina',
      'Čišćenje podnih prostirki',
      'Dashboard & konzola',
      'Vrata & gepek',
      'Unutrašnje staklo',
      'Ventilacioni otvori',
    ],
    image:
      'https://images.pexels.com/photos/5233264/pexels-photo-5233264.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Steam Cleaning (Čišćenje Parom)',
    description:
      'Higijensko čišćenje enterijera visokotemperaturnom parom bez hemikalija. Uklanja bakterije, grinje, viruse i alergene. Idealno za vozila sa malom decom, alergičarima i sve koji žele maksimalnu higijenu kabine.',
    features: [
      'Dezinfekcija parom 180°C',
      'Bez hemikalija',
      'Uklanjanje bakterija & alergena',
      'Čišćenje tepiha & presvlaka',
      'Klima uređaj dezinfekcija',
      'Higijenski certifikat',
    ],
    image:
      'https://images.pexels.com/photos/29909578/pexels-photo-29909578.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Nega i Zaštita Kože',
    description:
      'Profesionalna nega kožnih sedišta i površina — dubinsko čišćenje kože, hidratacija i impregnacija UV zaštitnim preparatima. Sprečavamo pucanje i starenje kože, a tretman vraća originalnu boju i mekoću.',
    features: [
      'Čišćenje kože',
      'Hidratacija & regeneracija',
      'UV zaštitna impregnacija',
      'Zaštita od pucanja',
      'Obnavljanje boje',
      'pH neutralni preparati',
    ],
    image:
      'https://images.pexels.com/photos/31389821/pexels-photo-31389821.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Nega Tkanine & Deodorizacija',
    description:
      'Ekstrakcionim pranjem uklanjamo duboke mrlje iz tekstilnih sedišta i tepiha. Ozon ili enzimski tretman eliminiše neprijatne mirise (cigarete, vlaga, kućni ljubimci) na molekularnom nivou.',
    features: [
      'Ekstrakciono pranje tepiha',
      'Uklanjanje tvrdokornih mrlja',
      'Ozon tretman mirisa',
      'Enzimski tretman',
      'Impregnacija tkanine',
      'Anti-alergen tretman',
    ],
    image:
      'https://images.pexels.com/photos/5233285/pexels-photo-5233285.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

const GALLERY = [
  'https://images.pexels.com/photos/20051461/pexels-photo-20051461.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/31389821/pexels-photo-31389821.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/29909578/pexels-photo-29909578.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/5233264/pexels-photo-5233264.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/5233285/pexels-photo-5233285.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=600',
];

const InteriorPage = () => (
  <>
    {/* Hero Banner */}
    <section
      className={'relative flex min-h-[55vh] items-end overflow-hidden bg-stone-950 pt-32 pb-20'}>
      <img
        src={
          'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1920'
        }
        alt={'Enterijer car detailing'}
        className={'absolute inset-0 h-full w-full object-cover opacity-40'}
      />
      <div
        className={'absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/50 to-transparent'}
      />
      <div className={'relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>
        <motion.div
          initial={{opacity: 0, y: 24}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, ease: 'easeOut'}}>
          <span
            className={'text-primary mb-4 block text-sm font-semibold tracking-widest uppercase'}>
            {'Usluge'}
          </span>
          <h1 className={'mb-4 text-5xl font-light text-white lg:text-7xl'}>
            {'Enterijer'}
            <br />
            {'Detailing'}
          </h1>
          <p className={'max-w-xl text-lg text-white/60'}>
            {
              'Dubinsko čišćenje, steam cleaning, nega kože i deodorizacija — savršeno čist i svež enterijer vašeg vozila.'
            }
          </p>
        </motion.div>
      </div>
    </section>

    {/* Services sections */}
    <section className={'relative bg-stone-950 pt-20 pb-32'}>
      <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>
        {SERVICES.map((service, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, y: 24}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-60px'}}
            transition={{duration: 0.55, ease: 'easeOut'}}
            className={'group border-t border-white/8 py-12'}>
            <div
              className={cn(
                'flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-14',
                index % 2 !== 0 && 'lg:flex-row-reverse',
              )}>
              {/* Image */}
              <div className={'relative w-full shrink-0 overflow-hidden rounded-2xl lg:w-[45%]'}>
                <div className={'aspect-video overflow-hidden rounded-2xl lg:aspect-4/3'}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className={
                      'h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                    }
                    loading={'lazy'}
                  />
                </div>
              </div>

              {/* Text */}
              <div className={'flex flex-1 flex-col'}>
                <div className={'mb-5 flex items-center gap-3'}>
                  <span className={'font-mono text-xs font-bold tracking-widest text-white/20'}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className={'h-px flex-1 bg-white/8'} />
                </div>
                <h2 className={'mb-3 text-2xl font-semibold text-white lg:text-3xl'}>
                  {service.title}
                </h2>
                <p className={'mb-6 text-sm leading-relaxed text-white/50'}>
                  {service.description}
                </p>
                <div className={'flex flex-wrap gap-2'}>
                  {service.features.map((f, i) => (
                    <span
                      key={i}
                      className={
                        'rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55'
                      }>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <div className={'border-t border-white/8'} />
      </div>
      <WaveDivider
        fill={'#fafaf9'}
        inverted
      />
    </section>

    {/* Gallery */}
    <section className={'bg-stone-50 py-20'}>
      <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>
        <motion.div
          className={'mb-10 text-center'}
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}>
          <span
            className={'text-primary mb-3 block text-sm font-semibold tracking-widest uppercase'}>
            {'Galerija'}
          </span>
          <h2 className={'text-4xl text-stone-900'}>{'Naši Radovi'}</h2>
        </motion.div>
        <div className={'grid grid-cols-2 gap-3 md:grid-cols-3'}>
          {GALLERY.map((src, i) => (
            <motion.div
              key={i}
              initial={{opacity: 0, scale: 0.97}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true, margin: '-20px'}}
              transition={{duration: 0.4, delay: i * 0.06}}
              className={'group overflow-hidden rounded-2xl'}>
              <img
                src={src}
                alt={`Enterijer detailing rad ${i + 1}`}
                className={
                  'aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                }
                loading={'lazy'}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className={'bg-stone-900 py-20'}>
      <div className={'mx-auto max-w-2xl px-4 text-center sm:px-6'}>
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}>
          <span
            className={'mb-4 block text-sm font-semibold tracking-widest text-blue-400 uppercase'}>
            {'Kontakt'}
          </span>
          <h2 className={'mb-4 text-4xl font-light text-white'}>{'Zakažite Tretman'}</h2>
          <p className={'mb-8 text-white/55'}>
            {
              'Kontaktirajte nas za besplatnu procenu i preporuku najboljeg enterijer tretmana za vaše vozilo.'
            }
          </p>
          <div className={'flex flex-col items-center gap-4 sm:flex-row sm:justify-center'}>
            <Link
              href={'/about#contact'}
              className={
                'group bg-primary hover:bg-primary-dark flex items-center gap-2 rounded-full px-8 py-4 font-medium text-white transition'
              }>
              {'Besplatna Procena'}
              <ArrowIcon
                height={18}
                width={18}
                className={'rotate-90 transition-transform group-hover:translate-x-1'}
              />
            </Link>
            <Link
              href={'tel:+381601533727'}
              className={
                'flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-medium text-white transition hover:border-white/60 hover:bg-white/10'
              }>
              {'+381 60 153 3727'}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default memo(InteriorPage);
