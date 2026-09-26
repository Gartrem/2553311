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
          <span className="eyebrow">Михаил Смирнов · основатель и лицо бренда</span>
          <h2>Дизайн как единая система</h2>
          <p><strong>Михаил Смирнов — основатель «Ателье Авторского Ремонта» и лицо бренда.</strong> Более 20 лет он работает с интерьерами и реализацией проектов, выстраивая подход, в котором дизайн, строительные решения, материалы, свет и мебель рассматриваются как единая система.</p>
          <p>Сегодня Ателье Авторского Ремонта работает с квартирами, домами и коммерческими пространствами, в том числе с проектами, требующими нестандартных технических и конструктивных решений.</p>
          <p>Студия может подключаться на разных этапах — от разработки проекта и комплектации до полной реализации под ключ. Формат работы и объём участия определяются индивидуально вместе с заказчиком.</p>
          <Link className="textLink" href="/process">Как мы работаем <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
    <ContactCta/>
  </>;
}
