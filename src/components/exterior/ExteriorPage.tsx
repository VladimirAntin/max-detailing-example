'use client';
import {memo} from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import ArrowIcon from '@/icons/ArrowIcon';
import WaveDivider from '@/components/WaveDivider';
import {cn} from '@/utils/CN';

const SERVICES = [
  {
    title: 'Pranje & Dekontaminacija',
    description:
      'Profesionalno ručno pranje vozila bezbernom metodom koja ne pravi ogrebotine. Uklanjamo željezne čestice, smolu, insekte i industrijsko taloženje sa površine laka. Obavezni prvi korak svakog detailing tretmana.',
    features: [
      'Two-bucket metoda pranja',
      'Iron & tar remover',
      'Clay bar tretman',
      'Čišćenje felni & guma',
      'Uklanjanje insekata',
      'Rinse bez kontakta',
    ],
    image:
      'https://images.pexels.com/photos/20051461/pexels-photo-20051461.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Mašinsko Poliranje (Paint Correction)',
    description:
      'Korekcija laka mašinskim poliranjem uklanja vrtložne tragove (swirl marks), ogrebotine, oksidaciju i hologram efekte. Jednofazno ili dvofazno poliranje dovodi lak do optičkog maksimuma.',
    features: [
      'Jednofazno poliranje',
      'Dvofazno paint correction',
      'Uklanjanje swirl tragova',
      'Anti-hologram finish',
      'Inspekcija laka (paint gauge)',
      'Wet sanding po potrebi',
    ],
    image:
      'https://images.pexels.com/photos/6870296/pexels-photo-6870296.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Keramička Zaštita (Ceramic Coating)',
    description:
      'Nano-keramički premaz SiO2 formule koji se hemijski vezuje za lak i pruža trajnu zaštitu. Hidrofobni efekat, UV zaštita, zaštita od kiselih kiša i lakih ogrebotina. Trajnost 2–5 godina uz pravilno održavanje.',
    features: [
      '9H nano-keramika',
      'Hidrofobni lotus efekat',
      'UV & kemijska zaštita',
      'Trajnost 2–5 godina',
      'Zaštita stakla & felni',
      'Certifikat garancije',
    ],
    image:
      'https://images.pexels.com/photos/36866128/pexels-photo-36866128.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'PPF Zaštitna Folija',
    description:
      'Paint Protection Film (PPF) je ultra-transparentna poliuretanska folija koja fizički štiti lak od kamenčića, ogrebotina, abrazije i štetnih uticaja okoline. Self-healing tehnologija — lakše ogrebotine same nestaju.',
    features: [
      'Self-healing (samoobnavljanje)',
      'Delimična ili puna zaštita',
      'Transparentna / mat varijanta',
      'Zaštita od kamenčića',
      'Profesionalna ugradnja',
      'Dugotrajna garancija',
    ],
    image:
      'https://images.pexels.com/photos/7154635/pexels-photo-7154635.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

const GALLERY = [
  'https://images.pexels.com/photos/20051461/pexels-photo-20051461.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/7154635/pexels-photo-7154635.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/36866128/pexels-photo-36866128.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/4870702/pexels-photo-4870702.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/6870296/pexels-photo-6870296.jpeg?auto=compress&cs=tinysrgb&w=600',
];

const ExteriorPage = () => (
  <>
    {/* Hero Banner */}
    <section
      className={'relative flex min-h-[55vh] items-end overflow-hidden bg-stone-950 pt-32 pb-20'}>
      <img
        src={
          'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1920'
        }
        alt={'Eksterier car detailing'}
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
            {'Eksterijer'}
            <br />
            {'Detailing'}
          </h1>
          <p className={'max-w-xl text-lg text-white/60'}>
            {
              'Profesionalna nega spoljašnosti vozila — od dekontaminacije i poliranja do keramičke zaštite i PPF folije.'
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
                alt={`Eksterier detailing rad ${i + 1}`}
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
              'Kontaktirajte nas za besplatnu procenu stanja vašeg vozila i preporuku najboljeg tretmana.'
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
              href={'tel:+381653580793'}
              className={
                'flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-medium text-white transition hover:border-white/60 hover:bg-white/10'
              }>
              {'+381 65 358 0793'}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default memo(ExteriorPage);
