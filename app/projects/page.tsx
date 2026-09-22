import Link from 'next/link';
import ProjectGallery from '@/components/ProjectGallery';

export const metadata = {
  title: 'Проекты',
  description: 'Портфолио Ателье Авторского Ремонта: квартиры, дома, офис и шоурум.',
};

export default function Projects() {
  return <section className="portfolioPage sectionLight">
    <div className="portfolioIntro">
      <span className="eyebrow">Портфолио / Новосибирск и за его пределами</span>
      <h1>Интерьеры, в которых<br/><i>живут люди.</i></h1>
      <p>Квартиры, загородные дома и общественные пространства из портфолио ателье. Каждый объект создавался для конкретных людей, задач и привычек.</p>
      <div className="portfolioIntroBottom"><span>21 проект</span><span>От 30 до 300 м²</span></div>
    </div>

    <div className="portfolioCatalog" id="all-projects">
      <div className="portfolioCatalogHeading"><span className="eyebrow">Полное портфолио</span><h2>Все проекты</h2><p>Фрагменты 21 реализованного проекта. Выберите карточку, чтобы рассмотреть фотографию.</p></div>
      <ProjectGallery />
    </div>

    <div className="portfolioOutro"><span className="eyebrow">Ваш проект может быть следующим</span><p>Расскажите о пространстве, которое хотите создать.</p><Link href="/contacts" className="textLink">Обсудить проект <span aria-hidden="true">⟶</span></Link></div>
  </section>;
}
