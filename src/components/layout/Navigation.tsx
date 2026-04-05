'use client';
import {memo, useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import CloseIcon from '@/icons/CloseIcon';
import MenuIcon from '@/icons/MenuIcon';
import ScrollProgress from '@/components/ScrollProgress';
import {cn} from '@/utils/CN';
import LogoIcon from '@/icons/LogoIcon';

const navLinks = [
  {href: '/', title: 'Početna', section: ''},
  {href: '/#services', title: 'Usluge', section: 'services'},
  {href: '/#packages', title: 'Paketi', section: 'packages'},
  {href: '/exterior', title: 'Exterior', section: ''},
  {href: '/interior', title: 'Interior', section: ''},
  {href: '/about', title: 'O nama', section: ''},
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();
  const isHome = pathname === '/';
  const rafRef = useRef<number>(null);

  useEffect(() => {
    if (!isHome) return;
    const sections = navLinks
      .filter(l => l.section !== '')
      .map(l => ({id: l.section, el: document.getElementById(l.section)}))
      .filter(s => s.el !== null) as {id: string; el: HTMLElement}[];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 80) {
        setActiveSection('');
        return;
      }
      let current = '';
      for (const s of sections) {
        if (s.el.offsetTop - window.innerHeight * 0.45 <= scrollY) current = s.id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      setActiveSection('');
    };
  }, [isHome]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(() => {});
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const navLinkCls = (isActive: boolean) =>
    cn(
      'px-3 py-1.5 rounded-lg text-sm transition-colors',
      isActive
        ? 'bg-white/20 text-white font-medium'
        : 'text-white/75 hover:text-white hover:bg-white/10',
    );

  const mobileLinkCls = (isActive: boolean) =>
    cn(
      'block w-full text-left py-2 px-3 rounded-lg text-sm transition-colors',
      isActive
        ? 'text-primary font-semibold bg-accent'
        : 'text-white hover:text-primary hover:bg-accent',
    );

  const isLinkActive = (link: {href: string; section: string}) => {
    if (link.section !== '' && isHome) return activeSection === link.section;
    if (link.href === '/') return isHome && activeSection === '';
    return pathname.startsWith(link.href) && link.href !== '/';
  };

  return (
    <nav className={'fixed top-0 right-0 left-0 z-50 bg-stone-900 shadow-lg'}>
      <div className={'mx-auto px-4'}>
        <div className={'flex h-16 flex-row items-center justify-between'}>
          <Link
            href={'/'}
            className={'flex flex-row items-center gap-2 text-xl font-semibold text-white'}>
            <LogoIcon
              width={28}
              height={28}
              className={'text-primary'}
            />
            <span>{'Max Detailing'}</span>
          </Link>

          {/* Desktop */}
          <div className={'hidden items-center gap-1 md:flex'}>
            {navLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkCls(isLinkActive(item))}>
                {item.title}
              </Link>
            ))}

            <div className={'mx-2 h-4 w-px bg-white/20'} />

            <Link
              href={'/about#contact'}
              className={
                'bg-primary hover:bg-primary-dark rounded-full px-5 py-2 text-sm font-medium text-white transition'
              }>
              {'Besplatna Procena'}
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className={'flex items-center gap-2 md:hidden'}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={'p-2 text-white'}
              aria-label={'Toggle menu'}>
              {isOpen ? (
                <CloseIcon
                  width={24}
                  height={24}
                />
              ) : (
                <MenuIcon
                  width={24}
                  height={24}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className={'space-y-1 border-t border-white/10 py-4 md:hidden'}>
            {navLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={mobileLinkCls(isLinkActive(item))}
                onClick={() => setIsOpen(false)}>
                {item.title}
              </Link>
            ))}
            {isHome && (
              <>
                <Link
                  href={'/#services'}
                  className={mobileLinkCls(activeSection === 'services')}
                  onClick={() => setIsOpen(false)}>
                  {'Usluge'}
                </Link>
                <Link
                  href={'/#packages'}
                  className={mobileLinkCls(activeSection === 'packages')}
                  onClick={() => setIsOpen(false)}>
                  {'Paketi'}
                </Link>
              </>
            )}

            <div className={'my-3 border-t border-gray-700'} />

            <Link
              href={'/about#contact'}
              className={
                'bg-primary hover:bg-primary-dark block rounded-full px-6 py-2.5 text-center text-sm font-medium text-white transition'
              }
              onClick={() => setIsOpen(false)}>
              {'Besplatna Procena'}
            </Link>
          </div>
        )}
      </div>
      <ScrollProgress />
    </nav>
  );
};

export default memo(Navigation);
