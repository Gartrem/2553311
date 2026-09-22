import Link from 'next/link';

const tariffs = [
  {name:'Эконом', price:'1 500', detail:'Для тех, кому нужна основа ремонта', items:['Планировочные решения','Рабочие чертежи']},
  {name:'Базовый', price:'2 500', detail:'Для продуманного выбора материалов', items:['Планировки и рабочие чертежи','Ведомость материалов и мебели','Строительная смета']},
  {name:'Стандарт', price:'3 500', detail:'Проект с полным представлением интерьера', items:['Всё из пакета «Базовый»','3D-визуализации всех комнат','Комплектация объекта']},
  {name:'Премиум', price:'6 000', detail:'Сопровождение проекта до реализации', items:['Всё из пакета «Стандарт»','Авторский надзор','Управление стройкой']},
];

export default function Tariffs({eyebrow = 'Пакеты услуг'}:{eyebrow?:string}) {
  return <section className="tariffsSection sectionDark" aria-labelledby="tariffs-title">
    <div className="tariffsHead">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id="tariffs-title">Выберите глубину проработки</h2>
      <p>Стоимость указана за квадратный метр. Актуальную цену и состав работ уточняем для конкретного объекта до заключения договора.</p>
    </div>
    <div className="tariffGrid">{tariffs.map((tariff, index) => <article className="tariffCard" key={tariff.name}>
      <span className="tariffIndex">0{index+1} / 04</span>
      <h3>{tariff.name}</h3>
      <p className="tariffDetail">{tariff.detail}</p>
      <div className="tariffPrice">{tariff.price} <small>₽ / м²</small></div>
      <ul>{tariff.items.map(item => <li key={item}>{item}</li>)}</ul>
      <Link href="/opros" className="tariffLink">Рассчитать проект <span aria-hidden="true">→</span></Link>
    </article>)}</div>
  </section>;
}
