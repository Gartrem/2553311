export default function ContactCta(){return <section className="contactCta">
  <div><span className="eyebrow">Начать проект</span><h2>Обсудим ваш<br/>будущий интерьер?</h2><p>Расскажите о проекте. Мы изучим задачу и предложим подходящий формат работы.</p></div>
  <form className="contactForm">
    <label>Имя<input name="name" placeholder="Как к вам обращаться"/></label>
    <label>Телефон<input name="phone" placeholder="+7 ___ ___-__-__"/></label>
    <label>Тип объекта<select name="type" defaultValue=""><option value="" disabled>Выберите</option><option>Квартира</option><option>Дом</option><option>Коммерческое помещение</option></select></label>
    <button type="button">Обсудить проект <span>→</span></button>
  </form>
</section>}
