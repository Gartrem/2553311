'use client';

import { FormEvent, useState } from 'react';

const objectOptions = ['Квартира', 'Частный дом', 'Офис', 'Другое'];
const propertyOptions = ['Новостройка', 'Вторичное жильё', 'Коммерческое помещение', 'Другое'];
const timingOptions = ['Сразу после проекта', 'В течение года', 'Пока не определились'];
const stepNames = ['Объект', 'Площадь', 'Недвижимость', 'Сроки', 'Контакты'];

export default function Questionnaire() {
  const [step, setStep] = useState(0);
  const [objectType, setObjectType] = useState('');
  const [area, setArea] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [timing, setTiming] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');
  const [preparedText, setPreparedText] = useState('');

  function next() {
    if (step === 0 && !objectType) return setError('Выберите тип объекта.');
    if (step === 1) {
      const number = Number(area.replace(',', '.'));
      if (!Number.isFinite(number) || number <= 0) return setError('Укажите площадь больше нуля.');
    }
    if (step === 2 && !propertyType) return setError('Выберите тип недвижимости.');
    if (step === 3 && !timing) return setError('Выберите ориентировочный срок.');
    setError('');
    setStep(current => Math.min(current + 1, 4));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) return setError('Укажите ваше имя.');
    if (phone.replace(/\D/g, '').length < 7) return setError('Проверьте номер телефона: нужно не менее 7 цифр.');
    if (!consent) return setError('Подтвердите согласие на использование данных для ответа.');

    const body = [
      'Здравствуйте! Хочу обсудить дизайн-проект.',
      `Имя: ${name.trim()}`,
      `Телефон: ${phone.trim()}`,
      `Email: ${email.trim() || 'не указан'}`,
      `Объект: ${objectType}`,
      `Площадь: ${area.trim()} м²`,
      `Тип недвижимости: ${propertyType}`,
      `Сроки ремонта: ${timing}`,
    ].join('\n');
    setPreparedText(body);
    setError('');
    window.location.href = `mailto:2553311@list.ru?subject=${encodeURIComponent('Анкета на дизайн-проект')}&body=${encodeURIComponent(body)}`;
  }

  function choiceGroup(title: string, choices: string[], value: string, onChange: (value: string) => void) {
    return <fieldset className="questionnaireChoices">
      <legend>{title}</legend>
      <div className="questionnaireChoicesGrid">
        {choices.map((choice, index) => <label key={choice} className={value === choice ? 'isSelected' : ''}>
          <input type="radio" name={`question-${step}`} value={choice} checked={value === choice} onChange={() => { onChange(choice); setError(''); }}/>
          <span className="choiceIndex">0{index + 1}</span>
          <span className="choiceLabel">{choice}</span>
          <span className="choiceMark" aria-hidden="true">{value === choice ? '●' : '○'}</span>
        </label>)}
      </div>
    </fieldset>;
  }

  return <section className="questionnaireShell" aria-label="Анкета проекта">
    <div className="questionnaireProgress" aria-label={`Шаг ${step + 1} из ${stepNames.length}`}>
      <div className="questionnaireProgressTop"><span>Анкета проекта</span><span>0{step + 1} / 0{stepNames.length}</span></div>
      <div className="questionnaireProgressLine"><span style={{width:`${(step + 1) / stepNames.length * 100}%`}}/></div>
      <ol>{stepNames.map((label, index) => <li key={label} className={index === step ? 'isCurrent' : index < step ? 'isDone' : ''}>{label}</li>)}</ol>
    </div>

    <form className="questionnaireForm" onSubmit={submit}>
      <div className="questionnaireStep" key={step}>
        <span className="questionnaireStepNumber">Вопрос 0{step + 1} / 0{stepNames.length}</span>
        {step === 0 && choiceGroup('Что вы планируете оформить?', objectOptions, objectType, setObjectType)}
        {step === 1 && <div className="questionnaireArea">
          <label htmlFor="questionnaire-area">Какая площадь объекта?</label>
          <p>Приблизительного значения достаточно.</p>
          <div className="questionnaireAreaInput"><input id="questionnaire-area" value={area} onChange={event => { setArea(event.target.value); setError(''); }} inputMode="decimal" autoComplete="off" placeholder="Например, 75" aria-label="Площадь объекта в квадратных метрах"/><span>м²</span></div>
        </div>}
        {step === 2 && choiceGroup('Какой тип недвижимости?', propertyOptions, propertyType, setPropertyType)}
        {step === 3 && choiceGroup('Когда планируете начать ремонт?', timingOptions, timing, setTiming)}
        {step === 4 && <div className="questionnaireContacts">
          <h2>Будем на связи</h2>
          <p>Откроется письмо с вашими ответами. Проверьте его и нажмите «Отправить» в почтовом приложении.</p>
          <div className="questionnaireContactFields">
            <label>Как к вам обращаться<input value={name} onChange={event => { setName(event.target.value); setError(''); }} autoComplete="name" maxLength={100} required placeholder="Ваше имя"/></label>
            <label>Телефон<input type="tel" value={phone} onChange={event => { setPhone(event.target.value); setError(''); }} autoComplete="tel" inputMode="tel" maxLength={32} required placeholder="+7 ___ ___-__-__"/></label>
            <label>Email <small>по желанию</small><input type="email" value={email} onChange={event => setEmail(event.target.value)} autoComplete="email" maxLength={150} placeholder="name@example.com"/></label>
          </div>
          <label className="questionnaireConsent"><input type="checkbox" checked={consent} onChange={event => { setConsent(event.target.checked); setError(''); }}/><span>Согласен(на), чтобы студия использовала мои контактные данные для ответа на заявку.</span></label>
        </div>}
      </div>

      {error && <p className="questionnaireError" role="alert">{error}</p>}
      <div className="questionnaireActions">
        {step > 0 ? <button type="button" className="questionnaireBack" onClick={() => { setError(''); setStep(current => current - 1); }}>← <span>Назад</span></button> : <span/>}
        {step < 4 ? <button type="button" className="questionnaireNext" onClick={next}>Продолжить <span aria-hidden="true">→</span></button> : <button type="submit" className="questionnaireNext">Подготовить письмо <span aria-hidden="true">→</span></button>}
      </div>
      {preparedText && <div className="questionnairePrepared" role="status">
        <strong>Письмо подготовлено</strong>
        <p>Если почтовое приложение не открылось, скопируйте текст ниже и отправьте его на <a href="mailto:2553311@list.ru">2553311@list.ru</a>. Заявка будет получена только после отправки письма.</p>
        <textarea readOnly value={preparedText} rows={9} onFocus={event => event.currentTarget.select()} aria-label="Текст заявки для копирования"/>
      </div>}
    </form>
  </section>;
}
