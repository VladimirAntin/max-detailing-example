'use client';
import {FC, memo, ReactNode, useEffect, useState} from 'react';
import ArrowIcon from '@icons/ArrowIcon';
import Link from 'next/link';
import {cn} from '@utils/CN';
import WaveDivider from '@/components/WaveDivider';

const SLIDES = [
  'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1920',
];

const TAGS = [
  {emoji: '✨', label: 'Poliranje'},
  {emoji: '🛡️', label: 'Keramička zaštita'},
  {emoji: '🚗', label: 'PPF Folija'},
  {emoji: '🧹', label: 'Enterijer detailing'},
  {emoji: '💧', label: 'Pranje & Dekontaminacija'},
];

const Highlight: FC<{children?: ReactNode}> = ({children}) => (
  <span className={'text-blue-400'}>{children}</span>
);

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className={'relative flex min-h-screen flex-col items-center justify-center overflow-hidden'}>
      {/* Sliding image background */}
      <div className={'absolute inset-0'}>
        {SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={''}
            aria-hidden={'true'}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-1000',
              i === current ? 'opacity-100' : 'opacity-0',
            )}
          />
        ))}
        <div className={'absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/85'} />
      </div>

      {/* Content */}
      <div
        className={'relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-20 text-center sm:px-6 lg:px-8'}>
        {/* Service tags */}
        <div className={'mb-8 flex flex-wrap items-center justify-center gap-2'}>
          {TAGS.map(tag => (
            <span
              key={tag.label}
              className={
                'inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-sm text-white/90 backdrop-blur-sm'
              }>
              <span>{tag.emoji}</span>
              {tag.label}
            </span>
          ))}
        </div>

        {/* Heading */}
        <h1 className={'mb-5 text-4xl leading-tight font-light text-white sm:text-5xl lg:text-7xl'}>
          {'Vaš automobil zaslužuje'}
          <br />
          <Highlight>{'savršenu negu'}</Highlight>
        </h1>

        {/* Subtitle */}
        <p className={'mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl'}>
          {
            'Premium car detailing u Beogradu — poliranje, keramička zaštita, PPF folija i kompletni enterijer detailing. Preciznost u svakom detalju.'
          }
        </p>

        {/* CTA buttons */}
        <div className={'flex flex-col items-center justify-center gap-4 sm:flex-row'}>
          <Link
            href={'/about#contact'}
            className={
              'group bg-primary shadow-primary/30 hover:bg-primary-dark flex items-center gap-2 rounded-full px-8 py-4 font-medium text-white shadow-lg transition'
            }>
            {'Besplatna Procena'}
            <ArrowIcon
              height={20}
              width={20}
              className={'rotate-90 transition-transform duration-200 group-hover:translate-x-1'}
            />
          </Link>
          <Link
            href={'tel:+381653580793'}
            className={
              'group flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/20'
            }>
            {'Pozovite Nas'}
            <ArrowIcon
              height={20}
              width={20}
              className={'rotate-90 transition-transform duration-200 group-hover:translate-x-1'}
            />
          </Link>
        </div>

        {/* Slide dots */}
        <div className={'mt-14 flex items-center justify-center gap-2'}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slika ${i + 1}`}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                i === current ? 'w-8 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70',
              )}
            />
          ))}
        </div>
      </div>

      <WaveDivider fill={'#0c0a09'} />
    </section>
  );
};

export default memo(Hero);
