import ContactCta from '@/components/ContactCta';
import Tariffs from '@/components/Tariffs';

export const metadata = { title: 'Услуги и цены' };

const services = [
  ['01', 'Дизайн-проект', 'Планировка, 3D-визуализации, чертежи и альбом проекта для согласованной реализации.'],
  ['02', 'Комплектация', 'Подбор отделочных материалов, мебели, света и оборудования с артикулами, ценами и контактами поставщиков.'],
  ['03', 'Авторский контроль', 'Сопровождение ремонтных работ и проверка соответствия результата согласованному проекту.'],
  ['04', 'Управление реализацией', 'Организация работ и взаимодействие с исполнителями для воплощения проекта.'],
];

export default function Services() {
  return <>
    <section className="innerPage sectionLight">
      <div className="pageTitle">
        <span className="eyebrow">Услуги</span>
        <h1>Всё для вашего интерьера</h1>
        <p>От планировочного решения до комплектации и сопровождения ремонта. Выбираем состав работ под объект и ваши задачи.</p>
      </div>
      <div className="serviceLong">{services.map(([number, title, description]) => <article key={number}>
        <span>{number}</span><h2>{title}</h2><p>{description}</p>
      </article>)}</div>
    </section>
    <Tariffs/>
    <ContactCta/>
  </>;
}
