import Image from 'next/image';
import Link from 'next/link';
import ContactCta from '@/components/ContactCta';

const steps=[
  ['01','Знакомство и задача','Обсуждаем цели, образ жизни, формат и вводные проекта.','https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1200&q=86'],
  ['02','Проектирование','Создаём планировочные и технические решения, визуализации и документацию.','https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1200&q=86'],
  ['03','Реализация','Выполняем работы строго по проекту. Контролируем качество и сроки.','https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=86'],
  ['04','Сдача объекта','Передаём готовый интерьер и комплект документов.','https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&w=1200&q=86']
];

export default function Home(){return <>
<section className="hero">
  <div className="heroImage"><Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90" alt="Интерьер — временный визуальный placeholder" fill priority sizes="100vw"/></div>
  <div className="heroShade"/>
  <div className="heroContent" data-reveal>
    <div className="heroMeta">ДИЗАЙН · РЕАЛИЗАЦИЯ · КОМПЛЕКТАЦИЯ · АВТОРСКИЙ КОНТРОЛЬ</div>
    <h1>Проектируем<br/>интерьер.<br/><em>Отвечаем<br/>за результат.</em></h1>
    <p>Проектируем и реализуем интерьеры квартир и домов в Новосибирске — от идеи и технических решений до полностью готового пространства.</p>
    <div className="heroActions"><Link href="/contacts" className="primaryBtn">Обсудить проект <span>→</span></Link><span className="microCopy">Первичная консультация</span></div>
  </div>
  <div className="heroStats" data-reveal><div><strong>22</strong><span>года опыта</span></div><div><strong>300+</strong><span>реализованных объектов*</span></div><div><strong>01</strong><span>команда полного цикла</span></div></div>
  <div className="heroNote">* Цифру подтвердить перед публикацией</div>
  <div className="scrollCue">Листайте вниз <span>↓</span></div>
</section>

<section className="projectsIntro sectionLight" data-reveal>
  <div className="sectionHead"><div><span className="eyebrow">Портфолио</span><h2>Реализованные<br/>проекты</h2></div><p>Интерьеры, которые прошли путь от идеи до реального пространства.</p></div>
  <article className="featuredProject">
    <div className="featuredText"><span>Реализованный проект / 01</span><h3>Европейский<br/>берег</h3><div className="projectFacts">Квартира · 145 м² · 2026</div><p>Современный спокойный интерьер. Натуральные материалы, продуманная планировка, внимание к каждому узлу.</p><Link href="/projects/european-shore">Смотреть проект →</Link></div>
    <div className="featuredImage"><Image src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=88" alt="Временное изображение проекта, заменить реальной фотосъёмкой" fill sizes="(max-width:900px) 100vw, 70vw"/></div>
    <div className="thumbRail"><Image src="https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1200&q=86" alt="Деталь интерьера" width={240} height={180}/><Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=86" alt="Деталь интерьера" width={240} height={180}/><Image src="https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1200&q=86" alt="Деталь интерьера" width={240} height={180}/></div>
  </article>
</section>

<section className="proof sectionDark" data-reveal>
  <div className="sectionHead dark"><div><span className="eyebrow">Проект → реальность</span><h2>Задумано.<br/>Спроектировано.<br/>Реализовано.</h2></div><p>Сильный проект ценен только тогда, когда он точно реализован. Здесь должна быть реальная пара «визуализация / готовый интерьер».</p></div>
  <div className="compareDemo"><div className="compareCard"><Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=88" alt="Временный placeholder визуализации" fill/><span>01 / Визуализация</span></div><div className="compareCard"><Image src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=88" alt="Временный placeholder готового интерьера" fill/><span>02 / Реализация</span></div></div>
</section>

<section className="services sectionLight" data-reveal>
  <div className="sectionHead"><div><span className="eyebrow">Услуги</span><h2>От идеи до<br/>готового интерьера</h2></div><p>Три направления, которые можно объединить в полный цикл или выбрать отдельно.</p></div>
  <div className="serviceGrid"><article><span>01</span><h3>Дизайн-проект</h3><p>Планировка, визуальная концепция, техническая документация и спецификации.</p><Link href="/services">Подробнее →</Link></article><article><span>02</span><h3>Комплектация и сопровождение</h3><p>Подбор материалов, мебели и оборудования, координация поставок и авторский контроль.</p><Link href="/services">Подробнее →</Link></article><article><span>03</span><h3>Реализация под ключ</h3><p>Строительно-отделочные работы, инженерия, контроль качества и подготовка объекта к сдаче.</p><Link href="/services">Подробнее →</Link></article></div>
</section>

<section className="process sectionLight" data-reveal>
  <div className="sectionHead"><div><span className="eyebrow">Как мы работаем</span><h2>Простой и понятный процесс</h2></div><p>На каждом этапе вы знаете, что происходит с проектом и кто отвечает за результат.</p></div>
  <div className="stepGrid">{steps.map(([n,t,d,img])=><article key={n}><div className="stepTop"><strong>{n}</strong><h3>{t}</h3></div><p>{d}</p><div className="stepImg"><Image src={img} alt={t} fill/></div></article>)}</div>
</section>

<section className="founder" data-reveal>
  <div className="founderImage"><Image src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=86" alt="Временный портретный placeholder — заменить настоящей фотографией Михаила Смирнова" fill/></div>
  <div className="founderText"><span className="eyebrow">О компании</span><h2>Люди. Опыт.<br/>Ответственность.</h2><p>Мы превращаем сложные задачи в продуманные интерьерные решения и лично отвечаем за качество результата.</p><div className="founderName"><strong>Михаил Смирнов</strong><span>Основатель «Ателье Авторского Ремонта»</span></div><div className="founderActions"><Link href="/about" className="primaryBtn darkBtn">О студии →</Link><span>▶ Видео о компании</span></div></div>
</section>

<section className="testimonials sectionLight" data-reveal>
  <div className="sectionHead"><div><span className="eyebrow">Отзывы</span><h2>Что говорят<br/>после сдачи</h2></div><p>Перед публикацией здесь должны быть только подтверждённые отзывы реальных клиентов.</p></div>
  <div className="testimonialGrid"><blockquote>«Placeholder для короткого реального отзыва клиента. 3–5 строк, привязанных к конкретному объекту.»<footer>Клиент · Проект 01</footer></blockquote><blockquote>«Placeholder для второго подтверждённого отзыва. Не публиковать выдуманные формулировки.»<footer>Клиент · Проект 02</footer></blockquote></div>
</section>

<section className="faq sectionLight" data-reveal><div className="sectionHead"><div><span className="eyebrow">FAQ</span><h2>Перед стартом проекта</h2></div><p>Коротко отвечаем на вопросы, которые обычно возникают до первой встречи.</p></div><div className="faqList">{['Можно ли заказать только дизайн?','Работаете ли вы с готовым дизайн-проектом?','Как формируется стоимость ремонта?','Как определить бюджет будущего интерьера?','Кто занимается закупкой материалов?','Как проходит авторский контроль?','Работаете ли вы с загородными домами?'].map(q=><details key={q}><summary>{q}<span>+</span></summary><p>Ответ нужно заполнить подтверждённой информацией компании перед публикацией.</p></details>)}</div></section>
<ContactCta/>
</>}
