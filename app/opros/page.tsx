import Questionnaire from './Questionnaire';
import ExternalArrow from '@/components/ExternalArrow';

export const metadata = {
  title: 'Рассчитать проект',
  description: 'Расскажите об объекте, площади и сроках. Подготовим разговор о вашем дизайн-проекте.',
};

export default function QuestionnairePage() {
  return <div className="questionnairePage innerPage">
    <div className="questionnaireIntro">
      <span className="eyebrow">Начать проект / Новосибирск</span>
      <h1>Расскажите о<br/><i>вашем пространстве</i></h1>
      <p>Ответьте на несколько коротких вопросов. Это поможет нам подготовиться к разговору о проекте.</p>
    </div>
    <Questionnaire/>
    <div className="questionnaireAside">
      <span>Предпочитаете обсудить лично?</span>
      <a href="tel:+73832553311">+7 (383) 255-33-11 <b aria-hidden="true"><ExternalArrow /></b></a>
    </div>
  </div>;
}
