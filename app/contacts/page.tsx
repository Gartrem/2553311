import ContactCta from '@/components/ContactCta';

export const metadata = { title: 'Контакты' };

export default function Contacts() {
  return <>
    <section className="innerPage sectionLight">
      <div className="pageTitle">
        <span className="eyebrow">Контакты</span>
        <h1>Начнём с разговора</h1>
        <p>Расскажите о вашем объекте и задаче. Обсудим возможный формат работы и следующие шаги.</p>
      </div>
      <div className="contactsGrid">
        <div><span>Телефон</span><a href="tel:+73832553311">+7 (383) 255-33-11</a></div>
        <div><span>Город</span><strong>Новосибирск</strong></div>
        <div><span>Почта</span><a href="mailto:2553311@list.ru">2553311@list.ru</a></div>
      </div>
    </section>
    <ContactCta/>
  </>;
}
