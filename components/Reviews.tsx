const reviews = [
  { name: 'Алексей Ябров', date: '30 мая 2022', text: 'Михаил помог продумать расстановку мебели и цветовую гамму детской комнаты. По словам клиента, результат порадовал и родителей, и дочь.' },
  { name: 'Максим Вольный', date: '30 мая 2022', text: 'Работал с командой как с подрядчиком по нескольким дизайн-проектам. Отмечает профессионализм и внимательность к ошибкам на стройке.' },
  { name: 'Анастасия Михайлова', date: '5 апреля 2022', text: 'Сотрудничала со студией во время сложного ремонта. Отмечает отзывчивость Михаила, помощь с закупками и планированием сроков доставки.' },
  { name: 'Нина Чижова', date: '11 февраля 2022', text: 'Благодарит команду за помощь в реализации дизайнерского ремонта и готовность откликаться на просьбы.' },
];

export default function Reviews() {
  return <section className="reviewsSection sectionLight" id="reviews" data-reveal>
    <div className="sectionHead"><div><span className="eyebrow">06 / Отзывы</span><h2>Говорят те, кто<br/><i>уже с нами работал.</i></h2></div><p>Несколько историй клиентов о работе со студией. Здесь кратко передано содержание их отзывов.</p></div>
    <div className="reviewsGrid">{reviews.map(review => <article key={review.name}><span className="reviewMark" aria-hidden="true">“</span><p>{review.text}</p><div><strong>{review.name}</strong><span>{review.date}</span></div></article>)}</div>
    <a className="textLink" href="https://2gis.ru/novosibirsk/search/%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%D0%B0/firm/70000001021509817/82.925419%2C55.067576/tab/reviews" target="_blank" rel="noopener noreferrer">Больше отзывов на 2ГИС <span aria-hidden="true">⟶</span></a>
  </section>;
}
