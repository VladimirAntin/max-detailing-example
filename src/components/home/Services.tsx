'use client';
import {memo} from 'react';
import {servicesItems} from '@components/data/services';
import {motion} from 'framer-motion';
import WaveDivider from '@/components/WaveDivider';
import Icon from '@/icons/Icon';

const Services = () => (
  <section
    id={'services'}
    className={'relative bg-stone-950 pt-20 pb-40 lg:pt-28 lg:pb-52'}>
    <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>
      {/* Header */}
      <motion.div
        className={'mb-14'}
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-50px'}}
        transition={{duration: 0.5, ease: 'easeOut'}}>
        <span className={'text-primary mb-4 block text-sm font-semibold tracking-widest uppercase'}>
          {'Naše Usluge'}
        </span>
        <div className={'flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'}>
          <h2 className={'text-4xl font-light text-white sm:text-5xl lg:text-6xl'}>
            {'Kompletna Nega Vozila'}
          </h2>
          <p className={'max-w-xs text-sm leading-relaxed text-white/35 lg:text-right'}>
            {'Od pranja do premium keramičke zaštite — sve pod jednim krovom'}
          </p>
        </div>
      </motion.div>

      {/* Card grid — completely different from old alternating rows */}
      <div className={'grid gap-5 sm:grid-cols-2 lg:grid-cols-3'}>
        {servicesItems.map((service, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, y: 28}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-40px'}}
            transition={{duration: 0.5, ease: 'easeOut', delay: index * 0.06}}
            className={
              'group hover:shadow-primary/10 relative overflow-hidden rounded-3xl bg-stone-900 transition-shadow duration-300 hover:shadow-xl'
            }>
            {/* Gold top accent bar */}
            <div className={'from-primary to-secondary h-0.75 bg-linear-to-r'} />

            {/* Faded number watermark */}
            <span
              className={
                'absolute top-4 right-5 font-mono text-7xl leading-none font-black text-white/4 select-none'
              }>
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Content */}
            <div className={'p-7'}>
              {/* Icon */}
              {service.iconName && (
                <div
                  className={
                    'bg-primary/15 group-hover:bg-primary/25 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300'
                  }>
                  <Icon
                    name={service.iconName}
                    height={22}
                    width={22}
                    className={'text-primary'}
                  />
                </div>
              )}

              <h3 className={'mb-3 text-xl font-semibold text-white'}>{service.title}</h3>
              <p className={'mb-5 text-sm leading-relaxed text-white/45'}>{service.description}</p>

              {/* Feature chips */}
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
          </motion.div>
        ))}
      </div>
    </div>
    <WaveDivider
      fill={'#fafaf9'}
      inverted
    />
  </section>
);

export default memo(Services);
