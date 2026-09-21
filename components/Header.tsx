'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const items = [
  ['/projects','Проекты'],['/services','Услуги'],['/about','О студии'],['/process','Процесс'],['/contacts','Контакты']
] as const;

export default function Header(){
  const [open,setOpen]=useState(false);
  return <header className="siteHeader">
    <Link className="brand" href="/" aria-label="Ателье Авторского Ремонта">
      <Image src="/assets/logo-white.png" alt="Ателье Авторского Ремонта" width={116} height={112} priority />
    </Link>
    <nav className="desktopNav">{items.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav>
    <div className="headerContact"><a href="tel:+73832553311">+7 (383) 255-33-11</a><span>Новосибирск</span></div>
    <Link href="/contacts" className="headerCta">Обсудить проект <span>→</span></Link>
    <button className="burger" onClick={()=>setOpen(!open)} aria-label="Открыть меню" aria-expanded={open}><span/><span/></button>
    {open && <div className="mobileMenu">
      <div className="mobileMenuTop"><span>Навигация</span><button onClick={()=>setOpen(false)}>Закрыть ×</button></div>
      <nav>{items.map(([href,label],i)=><Link key={href} href={href} onClick={()=>setOpen(false)}><small>0{i+1}</small>{label}</Link>)}</nav>
      <div className="mobileMenuBottom"><a href="tel:+73832553311">+7 (383) 255-33-11</a><Link href="/contacts" onClick={()=>setOpen(false)}>Обсудить проект →</Link></div>
    </div>}
  </header>
}
