'use client';
import {memo} from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import ArrowIcon from '@/icons/ArrowIcon';
import Contact from '@/components/Contact';
import WaveDivider from '@/components/WaveDivider';

const STATS = [
  {value: '500+', label: 'Zadovoljnih klijenata'},
  {value: '8+', label: 'Godina iskustva'},
  {value: '1.200+', label: 'Tretmana godišnje'},
  {value: '100%', label: 'Garancija zadovoljstva'},
];

const VALUES = [
  {
    icon: '🔬',
    title: 'Preciznost',
    description:
      'Koristimo profesionalnu opremu i sertifikovane preparate. Svaki detalj broji — bukvalno.',
  },
  {
    icon: '🛡️',
    title: 'Kvalitet',
    description:
      'Isključivo premium proizvodi — IGL Coatings, Gyeon, Koch Chemie, 3M PPF. Bez kompromisa.',
  },
  {
    icon: '✅',
    title: 'Transparentnost',
    description:
      'Pre svake intervencije radimo inspekciju laka i dajemo pisanu procenu. Nema skrivenih troškova.',
  },
  {
    icon: '💧',
    title: 'Ekološki',
    description:
      'Koristimo biodegradabilne i pH neutralne preparate gde god je moguće. Brinemo o okolini.',
  },
];

const AboutPage = () => (
  <>
    {/* Hero Banner */}
    <section
      className={'relative flex min-h-[50vh] items-end overflow-hidden bg-stone-950 pt-32 pb-20'}>
      <img
        src={
          'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1920'
        }
        alt={'Max Detailing radionica'}
        className={'absolute inset-0 h-full w-full object-cover opacity-30'}
      />
      <div
        className={'absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/60 to-transparent'}
      />
      <div className={'relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>
        <motion.div
          initial={{opacity: 0, y: 24}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, ease: 'easeOut'}}>
          <span
            className={'text-primary mb-4 block text-sm font-semibold tracking-widest uppercase'}>
            {'Ko smo mi'}
          </span>
          <h1 className={'mb-4 text-5xl font-light text-white lg:text-7xl'}>{'O Nama'}</h1>
          <p className={'max-w-xl text-lg text-white/60'}>
            {'Sertifikovani detailing studio u Beogradu. Vaš automobil tretiramo kao sopstveni.'}
          </p>
        </motion.div>
      </div>
    </section>

    {/* About story */}
    <section className={'relative bg-stone-950 pt-20 pb-40'}>
      <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>
        <div className={'grid gap-14 lg:grid-cols-2 lg:items-center'}>
          {/* Image */}
          <motion.div
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}>
            <div className={'relative overflow-hidden rounded-3xl'}>
              <img
                src={
                  'https://images.pexels.com/photos/28995187/pexels-photo-28995187.jpeg?auto=compress&cs=tinysrgb&w=900'
                }
                alt={'Max Detailing tim'}
                className={'aspect-4/3 w-full object-cover'}
              />
              {/* Floating badge */}
              <div
                className={
                  'absolute bottom-5 left-5 rounded-2xl bg-stone-900/90 px-5 py-3 backdrop-blur-sm'
                }>
                <p className={'text-xs text-white/50'}>{'Od 2016.'}</p>
                <p className={'text-xl font-semibold text-white'}>{'Beograd, Srbija'}</p>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{opacity: 0, x: 20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}>
            <span
              className={'text-primary mb-4 block text-sm font-semibold tracking-widest uppercase'}>
              {'Naša priča'}
            </span>
            <h2 className={'mb-6 text-4xl font-light text-white'}>
              {'Osnivani iz'}
              <br />
              <span className={'text-blue-400'}>{'ljubavi prema automobilima'}</span>
            </h2>
            <p className={'mb-5 leading-relaxed text-white/55'}>
              {
                'Max Detailing je osnovan 2016. godine od strane Marka Nikolića, sertifikovanog detailing majstora koji je svoju strast prema automobilima pretvorio u profesionalnu uslugu.'
              }
            </p>
            <p className={'mb-8 leading-relaxed text-white/55'}>
              {
                'Danas smo tim od tri sertifikovana stručnjaka koji godišnje tretiraju više od 1.200 vozila — od svakodnevnih automobila do supercara. Naša misija je jednostavna: vaš automobil treba da izgleda bolje nego kada je izašao iz fabrike.'
              }
            </p>
            <div className={'flex flex-col gap-3 sm:flex-row'}>
              <Link
                href={'#contact'}
                className={
                  'group bg-primary hover:bg-primary-dark flex items-center gap-2 rounded-full px-7 py-3 font-medium text-white transition'
                }>
                {'Zakažite Termin'}
                <ArrowIcon
                  height={18}
                  width={18}
                  className={'rotate-90 transition-transform group-hover:translate-x-1'}
                />
              </Link>
              <Link
                href={'/exterior'}
                className={
                  'flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 font-medium text-white transition hover:border-white/50 hover:bg-white/10'
                }>
                {'Naše Usluge'}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <WaveDivider
        fill={'#fafaf9'}
        inverted
      />
    </section>

    {/* Stats */}
    <section className={'bg-stone-50 py-16'}>
      <div className={'mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'}>
        <div className={'grid grid-cols-2 gap-8 md:grid-cols-4'}>
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.4, delay: i * 0.08}}
              className={'text-center'}>
              <p className={'text-primary mb-1 text-5xl font-light'}>{stat.value}</p>
              <p className={'text-sm text-stone-500'}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className={'bg-white py-20'}>
      <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>
        <motion.div
          className={'mb-12 text-center'}
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}>
          <span
            className={'text-primary mb-3 block text-sm font-semibold tracking-widest uppercase'}>
            {'Zašto mi'}
          </span>
          <h2 className={'text-4xl text-stone-900'}>{'Naše vrednosti'}</h2>
        </motion.div>
        <div className={'grid gap-6 sm:grid-cols-2 lg:grid-cols-4'}>
          {VALUES.map((val, i) => (
            <motion.div
              key={i}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.4, delay: i * 0.08}}
              className={'rounded-2xl border border-stone-100 bg-stone-50 p-6'}>
              <div className={'mb-4 text-4xl'}>{val.icon}</div>
              <h3 className={'mb-2 text-lg font-semibold text-stone-900'}>{val.title}</h3>
              <p className={'text-sm leading-relaxed text-stone-500'}>{val.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact */}
    <Contact />
  </>
);

export default memo(AboutPage);
