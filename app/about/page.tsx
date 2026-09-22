import Image from 'next/image';
import Link from 'next/link';
import ContactCta from '@/components/ContactCta';

export const metadata = { title: 'О студии' };
const base = process.env.NODE_ENV === 'production' ? '/2553311' : '';

export default function About() {
  return <>
    <section className="innerPage sectionLight">
      <div className="pageTitle">
        <span className="eyebrow">О студии</span>
        <h1>Продуманные пространства для настоящей жизни</h1>
        <p>Ателье Авторского Ремонта работает в Новосибирске с 2004 года. Проектируем интерьеры квартир, частных домов и офисов.</p>
      </div>
      <div className="aboutFeature">
        <div className="aboutPhoto"><Image src={`${base}/assets/mikhail-smirnov.png`} alt="Михаил Смирнов, основатель Ателье Авторского Ремонта" fill sizes="(max-width: 1050px) 100vw, 50vw" priority/></div>
        <div>
          <span className="eyebrow">Михаил Смирнов · основатель студии</span>
          <h2>Дом начинается с образа жизни</h2>
          <p>Михаил Смирнов — руководитель студии и технический дизайнер. В основе его подхода — спокойные, удобные интерьеры для семейной жизни, в которых у каждой детали есть назначение.</p>
          <p>Команда берётся за проекты разного масштаба, включая сложные конструктивные задачи. Планировку, материалы, свет и мебель рассматриваем как части единого пространства.</p>
          <p>Проект сопровождается понятными чертежами и подбором предметов. Объём работ и участие студии в реализации определяем вместе с заказчиком.</p>
          <Link className="textLink" href="/process">Как мы работаем <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
    <ContactCta/>
  </>;
}
