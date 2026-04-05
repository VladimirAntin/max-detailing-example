'use client';
import {memo} from 'react';
import Link from 'next/link';
import {cn} from '@utils/CN';
import {packages} from '@components/data/packages';
import {motion} from 'framer-motion';
import WaveDivider from '@/components/WaveDivider';

const Packages = () => {
  const featured = packages.find(p => p.highlighted);
  const others = packages.filter(p => !p.highlighted);

  return (
    <section
      id={'packages'}
      className={'relative bg-stone-50 pt-20 pb-40 lg:pt-28 lg:pb-52'}>
      <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>
        {/* Header */}
        <motion.div
          className={'mb-12 text-center'}
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-50px'}}
          transition={{duration: 0.5, ease: 'easeOut'}}>
          <span
            className={
              'text-primary mb-3 inline-block text-sm font-semibold tracking-widest uppercase'
            }>
            {'Paketi & Cenovnik'}
          </span>
          <h2 className={'mb-3 text-4xl text-stone-900 sm:text-5xl'}>{'Odaberite Paket'}</h2>
          <p className={'mx-auto max-w-xl text-sm text-stone-500'}>
            {
              'Cene su okvirne i zavise od veličine i stanja vozila. Besplatna procena pre svakog tretmana.'
            }
          </p>
        </motion.div>

        {/* ── FEATURED package — wide spotlight card ── */}
        {featured ? (
          <Link href={{pathname: '/about', hash: 'contact', query: {package: featured.title}}}>
            <motion.div
              initial={{opacity: 0, y: 24}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-40px'}}
              transition={{duration: 0.55, ease: 'easeOut'}}
              className={
                'shadow-primary/15 mb-6 overflow-hidden rounded-3xl bg-stone-900 shadow-2xl lg:flex'
              }>
              {/* Image */}
              <div className={'relative h-64 shrink-0 overflow-hidden lg:h-auto lg:w-[42%]'}>
                <img
                  src={featured.image}
                  alt={featured.title}
                  className={'h-full w-full object-cover'}
                />
                {/* Overlay — fades into dark panel on desktop */}
                <div
                  className={
                    'absolute inset-0 bg-linear-to-t from-stone-900/70 via-transparent to-transparent lg:bg-linear-to-r'
                  }
                />
                {/* Badge */}
                {featured.priceNote && (
                  <div className={'absolute top-5 left-5'}>
                    <span
                      className={
                        'bg-primary rounded-full px-4 py-1.5 text-sm font-bold text-white shadow-lg'
                      }>
                      {'★ '}
                      {featured.priceNote}
                    </span>
                  </div>
                )}
                {/* Mobile price */}
                <div className={'absolute bottom-4 left-5 lg:hidden'}>
                  <span className={'text-3xl font-light text-white drop-shadow'}>
                    {featured.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={'flex flex-1 flex-col p-8 lg:p-12'}>
                <p className={'text-primary mb-1 text-xs font-semibold tracking-widest uppercase'}>
                  {featured.subtitle}
                </p>
                <h3 className={'mb-3 text-3xl font-bold text-white lg:text-4xl'}>
                  {featured.title}
                </h3>
                <p className={'text-primary mb-8 hidden text-4xl font-light lg:block'}>
                  {featured.price}
                </p>

                <ul className={'mb-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2'}>
                  {featured.features.map((f, i) => (
                    <li
                      key={i}
                      className={'flex items-center gap-2.5'}>
                      <span className={'bg-primary h-1.5 w-1.5 shrink-0 rounded-full'} />
                      <span className={'text-sm text-white/70'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <p
                  className={
                    'bg-primary shadow-primary/25 hover:bg-primary-dark mt-auto block rounded-2xl py-4 text-center text-sm font-semibold text-white shadow-lg transition'
                  }>
                  {featured.cta}
                </p>
              </div>
            </motion.div>
          </Link>
        ) : null}

        {/* ── OTHER packages — 3-column row ── */}
        <div className={'grid gap-5 sm:grid-cols-3'}>
          {others.map((pkg, i) => (
            <Link
              key={i}
              href={{pathname: '/about', hash: 'contact', query: {package: pkg.title}}}>
              <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-30px'}}
                transition={{duration: 0.45, ease: 'easeOut', delay: i * 0.08}}
                className={
                  'flex flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:shadow-md'
                }>
                {/* Thin image strip */}
                <div className={'relative h-36 overflow-hidden'}>
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className={'h-full w-full object-cover'}
                    loading={'lazy'}
                  />
                  <div className={'absolute inset-0 bg-linear-to-t from-black/30 to-transparent'} />
                </div>

                <div className={'flex flex-1 flex-col p-6'}>
                  <p
                    className={
                      'mb-0.5 text-[10px] font-semibold tracking-widest text-stone-400 uppercase'
                    }>
                    {pkg.subtitle}
                  </p>
                  <h3 className={'mb-2 text-xl font-bold text-stone-900'}>{pkg.title}</h3>
                  <p className={cn('text-primary mb-5 text-2xl font-light')}>{pkg.price}</p>

                  <ul className={'mb-6 flex-1 space-y-2'}>
                    {pkg.features.slice(0, 4).map((f, fi) => (
                      <li
                        key={fi}
                        className={'flex items-start gap-2'}>
                        <span className={'bg-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full'} />
                        <span className={'text-sm text-stone-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <p
                    className={
                      'hover:border-primary hover:bg-accent hover:text-primary block rounded-2xl border border-stone-200 bg-stone-50 py-3 text-center text-sm font-semibold text-stone-700 transition'
                    }>
                    {pkg.cta}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <WaveDivider fill={'#1c1917'} />
    </section>
  );
};

export default memo(Packages);
