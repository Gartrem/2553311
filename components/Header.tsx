'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  ['/projects', 'Проекты'],
  ['/services', 'Услуги'],
  ['/about', 'О студии'],
  ['/process', 'Процесс'],
  ['/contacts', 'Контакты'],
] as const;

const logo = `${process.env.NODE_ENV === 'production' ? '/2553311' : ''}/assets/logo-white.svg`;

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === '/';

  return <header className={`siteHeader ${isHome ? 'siteHeaderHome' : 'siteHeaderInner'}`}>
    <div className="brandZone">
      <Link className="brand" href="/" aria-label="Ателье Авторского Ремонта — главная">
        <img src={logo} alt="Ателье Авторского Ремонта" width="132" height="117" />
      </Link>
      <span className="brandDivider" aria-hidden="true" />
      <span className="brandStatement">Продуманные<br/>пространства<br/>для настоящей<br/>жизни</span>
    </div>

    <nav className="desktopNav" aria-label="Основная навигация">
      {links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
    </nav>
    <div className="headerContact"><a href="tel:+73832553311">+7 (383) 255-33-11</a><span>Новосибирск</span></div>
    <Link href="/contacts" className="headerCta">Обсудить проект <span aria-hidden="true">⟶</span></Link>

    <button className="burger" type="button" onClick={() => setMenuOpen(true)} aria-label="Открыть меню" aria-expanded={menuOpen} aria-controls="mobile-navigation">
      <span/><span/>
    </button>

    {menuOpen && <div id="mobile-navigation" className="mobileMenu">
      <div className="mobileMenuTop">
        <img src={logo} alt="Ателье Авторского Ремонта" width="96" height="85" />
        <button type="button" onClick={() => setMenuOpen(false)} aria-label="Закрыть меню">✕</button>
      </div>
      <nav aria-label="Мобильная навигация">{links.map(([href, label], i) =>
        <Link key={href} href={href} onClick={() => setMenuOpen(false)}><small>0{i + 1}</small>{label}</Link>
      )}</nav>
      <div className="mobileMenuBottom">
        <a href="tel:+73832553311">+7 (383) 255-33-11</a>
        <Link href="/contacts" onClick={() => setMenuOpen(false)}>Обсудить проект ⟶</Link>
      </div>
    </div>}
  </header>;
}
