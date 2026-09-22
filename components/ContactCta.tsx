'use client';

import { FormEvent, useState } from 'react';

const phoneHref = 'tel:+73832553311';
const email = '2553311@list.ru';

export default function ContactCta() {
  const [message, setMessage] = useState('');
  const [preparedText, setPreparedText] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const objectType = String(data.get('type') ?? '').trim();
    const details = String(data.get('details') ?? '').trim();

    if (phone.replace(/\D/g, '').length < 7) {
      setMessage('Проверьте номер телефона: нужно не менее 7 цифр.');
      form.querySelector<HTMLInputElement>('[name="phone"]')?.focus();
      return;
    }

    const text = [
      'Здравствуйте! Хочу обсудить проект интерьера.',
      `Имя: ${name}`,
      `Телефон для связи: ${phone}`,
      `Объект: ${objectType}`,
      details && `О задаче: ${details}`,
    ].filter(Boolean).join('\n');
    setPreparedText(text);

    const subject = encodeURIComponent('Обсудить проект интерьера');
    const body = encodeURIComponent(text);
    setMessage('Откроется почтовое приложение. Проверьте письмо и нажмите «Отправить». Если оно не открылось, текст обращения доступен ниже.');
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return <section className="contactCta" id="consultation">
    <div>
      <span className="eyebrow">Начать проект</span>
      <h2>Обсудим ваш<br/>будущий интерьер?</h2>
      <p>Расскажите об объекте. Форма откроет письмо в вашем почтовом приложении; отправку нужно подтвердить там.</p>
      <p><a href={phoneHref}>+7 (383) 255-33-11</a><br/><a href={`mailto:${email}`}>{email}</a></p>
    </div>
    <form className="contactForm" onSubmit={handleSubmit}>
      <label>Имя<input name="name" type="text" autoComplete="name" placeholder="Как к вам обращаться" required maxLength={100}/></label>
      <label>Телефон<input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+7 ___ ___-__-__" required maxLength={32}/></label>
      <label>Тип объекта<select name="type" defaultValue="" required><option value="" disabled>Выберите</option><option value="Квартира">Квартира</option><option value="Дом">Дом</option><option value="Другое">Другое</option></select></label>
      <label style={{gridColumn:'1 / -1'}}>Коротко о задаче<textarea name="details" rows={3} maxLength={1000} placeholder="Что планируете изменить?" style={{background:'transparent',color:'#fff',border:'0',borderBottom:'1px solid rgba(255,255,255,.25)',padding:'12px 0 14px',resize:'vertical',font:'inherit'}}/></label>
      <button type="submit">Написать о проекте <span aria-hidden="true">→</span></button>
      {message && <p role="status" aria-live="polite" style={{gridColumn:'1 / -1',margin:0}}>{message}</p>}
      {preparedText && <label style={{gridColumn:'1 / -1'}}>Текст обращения, если почта не открылась<textarea readOnly value={preparedText} rows={7} onFocus={event => event.currentTarget.select()} style={{background:'transparent',color:'#fff',border:'1px solid rgba(255,255,255,.25)',padding:12,resize:'vertical',font:'inherit'}}/></label>}
    </form>
  </section>;
}
