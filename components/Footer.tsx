import Image from 'next/image';
import Link from 'next/link';
export default function Footer(){return <footer className="footer">
  <div className="footerTop">
    <div><Image src="/assets/logo-white.png" alt="Ателье Авторского Ремонта" width={104} height={100}/><p>Продуманные пространства для настоящей жизни.</p></div>
    <div className="footerLinks"><Link href="/projects">Проекты</Link><Link href="/services">Услуги</Link><Link href="/about">О студии</Link><Link href="/process">Процесс</Link><Link href="/contacts">Контакты</Link></div>
    <div className="footerContact"><a href="tel:+73832553311">+7 (383) 255-33-11</a><span>Новосибирск</span><span>Адрес — добавить перед публикацией</span></div>
  </div>
  <div className="footerBottom"><span>© 2026 Ателье Авторского Ремонта</span><span>Политика конфиденциальности</span><span className="footerMark">AR</span></div>
</footer>}
