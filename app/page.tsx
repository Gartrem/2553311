import Image from 'next/image';
import Link from 'next/link';
import ContactCta from '@/components/ContactCta';
import HeroGallery from '@/components/HeroGallery';
import Tariffs from '@/components/Tariffs';
import Reviews from '@/components/Reviews';
import Videos from '@/components/Videos';
import ExternalArrow from '@/components/ExternalArrow';
import { studioProjects } from '@/lib/projects';

const base = process.env.NODE_ENV === 'production' ? '/2553311' : '';
const featuredProjects = [studioProjects[1], studioProjects[0]];

const services = [
  ['01', 'Дизайн-проект', 'Планировочные решения, визуальная концепция, рабочая документация и спецификации.'],
  ['02', 'Комплектация', 'Подбор материалов, мебели и оборудования с вниманием к каждой детали и бюджету.'],
  ['03', 'Авторский контроль', 'Сопровождение реализации, проверка решений на объекте и точность воплощения проекта.'],
  ['04', 'Реализация под ключ', 'Координация работ, качество исполнения и готовое пространство для жизни.'],
];

const processSteps = [
  ['01', 'Встреча', 'Знакомимся на объекте, обсуждаем задачу, показываем пример проекта и назначаем замеры.'],
  ['02', 'Замеры', 'Фиксируем размеры, проёмы и инженерные коммуникации, готовим обмерный план.'],
  ['03', 'Договор и анкета', 'Уточняем привычки и пожелания, согласуем условия работы.'],
  ['04', 'Планировка', 'Предлагаем варианты планировочного решения с учётом эргономики.'],
  ['05', '3D-визуализации', 'Показываем материалы, цвет, освещение и детали будущего интерьера.'],
  ['06', 'Чертежи', 'Готовим рабочую документацию для точной реализации проекта.'],
  ['07', 'Альбом проекта', 'Передаём чертежи в печатном и электронном виде, обсуждаем порядок работ.'],
  ['08', 'Подбор', 'Составляем ведомость материалов и предметов с артикулами, ценами и поставщиками.'],
];

export default function Home() {
  return <>
    <section className="hero" aria-labelledby="hero-title">
      <HeroGallery />
      <div className="heroPanel" aria-hidden="true" />
      <div className="heroVignette" aria-hidden="true" />
      <div className="heroContent">
        <div className="heroMeta"><span aria-hidden="true" />Дизайн · Реализация · Комплектация · Авторский контроль</div>
        <h1 id="hero-title">Проектируем<br/>интерьер.<br/><em>Отвечаем<br/>за результат.</em></h1>
        <p>Создаём интерьеры квартир и домов в Новосибирске,<br className="desktopBreak"/>{' '}в которых эстетика, функциональность и качество<br className="desktopBreak"/>{' '}работают на вашу жизнь — сегодня и через годы.</p>
        <div className="heroActions">
          <Link href="/contacts" className="primaryBtn">Обсудить проект <span aria-hidden="true">⟶</span></Link>
          <span className="microCopy">Экспертный<br/>разбор</span>
        </div>
      </div>
      <div className="heroStats" aria-label="О студии в цифрах">
        <div><strong>20+</strong><span>лет опыта</span></div>
        <div><strong>300+</strong><span>реализованных<br/>проектов</span></div>
        <div className="heroStatsPhrase"><span>Пространства,<br/>которые<br/>вдохновляют</span></div>
      </div>
      <div className="heroBottomIndex"><span>01</span><span /></div>
      <a className="scrollCue" href="#projects"><span aria-hidden="true" />Листайте вниз</a>
      <div className="heroBottomNote"><span aria-hidden="true" />Реальные проекты<br/>Реальные люди</div>
    </section>

    <section id="projects" className="projectsSection sectionLight" data-reveal>
      <div className="sectionHead">
        <div><span className="eyebrow">01 / Проекты</span><h2>Пространства<br/><i>со смыслом.</i></h2></div>
        <p>В каждом проекте ищем равновесие между эстетикой, привычками и тем, как пространство будет жить спустя годы.</p>
      </div>
      <div className="projectGallery">
        {featuredProjects.map((project, index) => <article className={`projectCard ${index === 0 ? 'projectCardLarge' : 'projectCardSmall'}`} key={project.anchor}>
          <Link href={`/projects#${project.anchor}`} className="projectImage" aria-label={`Смотреть проект ${project.title} в портфолио`}>
            <Image src={`${base}/assets/${project.image}`} alt={`${project.category} ${project.title}, ${project.area} м² — реализованный проект ателье`} fill sizes="(max-width: 800px) 100vw, 50vw" />
            <span className="imageTag">Реальный проект</span>
          </Link>
          <div className="projectCardMeta"><span>{project.category} / {project.area} м²</span><Link href={`/projects#${project.anchor}`}>Смотреть проект <b aria-hidden="true">⟶</b></Link></div>
          <h3>{project.title}</h3>
          <p>Фотографии реализованного интерьера из портфолио студии.</p>
        </article>)}
      </div>
      <Link href="/projects" className="textLink portfolioHomeLink">Смотреть все 21 проект <span aria-hidden="true">⟶</span></Link>
    </section>

    <section id="services" className="servicesSection sectionDark" data-reveal>
      <div className="sectionHead dark"><div><span className="eyebrow">02 / Услуги</span><h2>От первого эскиза<br/><i>до последней детали.</i></h2></div><p>Единый взгляд на проект позволяет удерживать качество на каждом этапе — от идеи до готового интерьера.</p></div>
      <div className="serviceList">{services.map(([number, title, description]) => <Link className="serviceRow" key={number} href="/services"><span>{number}</span><h3>{title}</h3><p>{description}</p><b aria-hidden="true"><ExternalArrow /></b></Link>)}</div>
    </section>

    <section id="about" className="aboutSection" data-reveal>
      <div className="aboutVisual"><Image src={`${base}/assets/kitchen-dining.webp`} alt="Интерьер с натуральными материалами и продуманным светом" fill sizes="(max-width: 900px) 100vw, 50vw"/><span>Красота — в точности решений</span></div>
      <div className="aboutText"><span className="eyebrow">03 / О студии</span><h2>Эстетика,<br/>за которой стоит<br/><i>ответственность.</i></h2><p>Михаил Смирнов и команда работают с 2004 года: создают интерьеры квартир, частных домов и офисов в Новосибирске.</p><p>Мы проектируем пространство как единое целое: слышим человека, продумываем сценарии жизни и сопровождаем воплощение каждой идеи.</p><Link href="/about" className="textLink">Узнать о студии <span aria-hidden="true">⟶</span></Link></div>
    </section>

    <section id="process" className="processSection sectionLight" data-reveal>
      <div className="sectionHead"><div><span className="eyebrow">04 / Процесс</span><h2>Понятный путь<br/><i>к вашему интерьеру.</i></h2></div><p>Вы знаете, что происходит с проектом, какие решения принимаются и как движется работа.</p></div>
      <div className="processGrid">{processSteps.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      <Link href="/process" className="textLink processLink">Как мы работаем <span aria-hidden="true">⟶</span></Link>
    </section>

    <Tariffs eyebrow="05 / Тарифы" />
    <Reviews />
    <Videos />
    <ContactCta />
  </>;
}
