import Image from 'next/image';
import Link from 'next/link';
import ProjectGallery from '@/components/ProjectGallery';
import { studioProjects } from '@/lib/projects';

export const metadata = {
  title: 'Проекты',
  description: 'Портфолио Ателье Авторского Ремонта: квартиры, дома, офис и шоурум.',
};

const base = process.env.NODE_ENV === 'production' ? '/2553311' : '';

export default function Projects() {
  return <section className="portfolioPage sectionLight">
    <div className="portfolioIntro">
      <span className="eyebrow">Портфолио / Новосибирск и за его пределами</span>
      <h1>Интерьеры, в которых<br/><i>живут люди.</i></h1>
      <p>Квартиры, загородные дома и общественные пространства из портфолио ателье. Каждый объект создавался для конкретных людей, задач и привычек.</p>
      <div className="portfolioIntroBottom"><span>21 проект</span><span>От 30 до 300 м²</span><a href="#all-projects">Смотреть все <span aria-hidden="true">↓</span></a></div>
    </div>

    <div className="portfolioFeatures" aria-label="Избранные проекты">
      {studioProjects.slice(0, 3).map((project, index) => <article className="portfolioFeature" key={project.anchor}>
        <a className="portfolioFeatureImage" href={`#${project.anchor}`} aria-label={`Перейти к проекту ${project.title} в портфолио`}>
          <Image src={`${base}/assets/${project.image}`} alt={`${project.category} ${project.title}, реализованный проект ателье`} fill sizes="(max-width: 800px) 100vw, 50vw" priority={index === 0}/>
          <span>Реальный проект</span>
        </a>
        <div className="portfolioFeatureMeta"><span>0{index + 1} / {project.category}</span><span>{project.area} м²</span></div>
        <div className="portfolioFeatureTitle"><h2>{project.title}</h2><a href={`#${project.anchor}`} aria-label={`Перейти к проекту ${project.title}`}>↗</a></div>
      </article>)}
    </div>

    <div className="portfolioCatalog" id="all-projects">
      <div className="portfolioCatalogHeading"><span className="eyebrow">Полное портфолио</span><h2>Все проекты</h2><p>Фрагменты 21 реализованного проекта. Выберите карточку, чтобы рассмотреть фотографию.</p></div>
      <ProjectGallery />
      <p className="portfolioOriginalLink">Другие фотографии этих объектов доступны в <a href="https://2553311.ru/#rec454978245" target="_blank" rel="noopener noreferrer">исходном портфолио студии ↗</a>.</p>
    </div>

    <div className="portfolioOutro"><span className="eyebrow">Ваш проект может быть следующим</span><p>Расскажите о пространстве, которое хотите создать.</p><Link href="/contacts" className="textLink">Обсудить проект <span aria-hidden="true">⟶</span></Link></div>
  </section>;
}
