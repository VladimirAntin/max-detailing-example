'use client';
import Link from 'next/link';
import Icon from '@/icons/Icon';
import LogoIcon from '@/icons/LogoIcon';
import {footerItems, footerServices, socialLinks} from '@/components/data/footer';
import {memo} from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={'bg-stone-900 py-14 text-white'}>
      <div className={'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}>
        <div className={'mb-10 grid gap-8 md:grid-cols-4'}>
          <div className={'md:col-span-2'}>
            <div className={'mb-3 flex items-center gap-2'}>
              <LogoIcon
                width={26}
                height={26}
                className={'text-primary'}
              />
              <h3 className={'text-2xl font-semibold'}>{'Max Detailing'}</h3>
            </div>
            <p className={'mb-5 max-w-sm text-sm leading-relaxed text-gray-400'}>
              {
                'Premium car detailing u Beogradu. Poliranje, keramička zaštita, PPF folija i kompletni enterijer detailing. Preciznost u svakom detalju.'
              }
            </p>
            <div className={'flex gap-3'}>
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                  className={
                    'hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition'
                  }
                  aria-label={link.name}>
                  <Icon
                    name={link.icon}
                    height={20}
                    width={20}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className={'flex flex-row justify-between'}>
            <div>
              <h4 className={'mb-4 font-medium'}>{'Usluge'}</h4>
              <ul className={'space-y-2 text-sm text-gray-400'}>
                {footerServices.map(service => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={'mb-4 font-medium'}>{'Navigacija'}</h4>
              <ul className={'space-y-2 text-sm text-gray-400'}>
                {footerItems.map(item => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={'transition hover:text-white'}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={'border-t border-white/10 pt-8 text-center text-sm text-gray-400'}>
          <p>
            {'© '}
            {currentYear}
            {' Max Detailing. Sva prava zadržana.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
