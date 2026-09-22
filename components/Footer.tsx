import Link from 'next/link';
import Logo from '@/components/Logo';
import ExternalArrow from '@/components/ExternalArrow';

export default function Footer() {
  return <footer className="footer">
    <div className="footerTop">
      <div className="footerIdentity"><Logo /><p>Продуманные пространства<br/>для настоящей жизни.</p></div>
      <nav className="footerLinks" aria-label="Навигация в подвале">
        <Link href="/projects">Проекты</Link><Link href="/services">Услуги</Link><Link href="/about">О студии</Link><Link href="/process">Процесс</Link><Link href="/contacts">Контакты</Link>
      </nav>
      <div className="footerContact"><span>Связаться с нами</span><a href="tel:+73832553311">+7 (383) 255-33-11</a><span>Новосибирск</span><div className="socialLinks"><a href="https://vk.com/mikhailsmirnovaar" target="_blank" rel="noopener noreferrer">ВКонтакте <ExternalArrow /></a><a href="https://t.me/SmirnovMikhailAAR" target="_blank" rel="noopener noreferrer">Телеграм <ExternalArrow /></a><a href="https://www.youtube.com/user/MsMegel/featured" target="_blank" rel="noopener noreferrer">YouTube <ExternalArrow /></a></div></div>
    </div>
    <div className="footerBottom"><span>© {new Date().getFullYear()} Ателье Авторского Ремонта</span><a href="tel:+73832553311">Позвонить в студию ⟶</a></div>
  </footer>;
}
