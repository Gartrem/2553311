'use client';

import Image from 'next/image';
import { useState } from 'react';

const base = process.env.NODE_ENV === 'production' ? '/2553311' : '';
const slides = [
  { src: `${base}/assets/hero-founder-scene-face-v3.png`, alt: 'Михаил Смирнов в панорамном интерьере в тёплом вечернем свете' },
  { src: `${base}/assets/living-room.webp`, alt: 'Гостиная с натуральным камнем, деревом и мягким дневным светом' },
  { src: `${base}/assets/kitchen-dining.webp`, alt: 'Современная кухня с обеденной зоной в тёплых природных тонах' },
];

export default function HeroGallery() {
  const [active, setActive] = useState(0);
  const shift = (amount: number) => setActive(current => (current + amount + slides.length) % slides.length);

  return <>
    <div className="heroImages" aria-live="polite">
      {slides.map((slide, index) => <div key={slide.src} className={`heroImage ${index === active ? 'isActive' : ''}`} aria-hidden={index !== active}>
        <Image src={slide.src} alt={index === active ? slide.alt : ''} fill priority={index === 0} sizes="100vw" />
      </div>)}
    </div>
    {active === 0 && <div className="heroAside">Хороший<br/>интерьер<br/>делает жизнь<br/>лучше<span /><small>Михаил Смирнов<br/>Основатель студии</small></div>}
    <div className="heroSlideControls" aria-label="Фотографии интерьеров">
      <div className="heroSlideNumbers">{slides.map((_, index) => <button key={index} type="button" className={active === index ? 'isActive' : ''} onClick={() => setActive(index)} aria-label={`Показать фотографию ${index + 1}`} aria-current={active === index ? 'true' : undefined}>{String(index + 1).padStart(2, '0')}</button>)}</div>
      <span className="controlRule" aria-hidden="true" />
      <button className="circleArrow" type="button" onClick={() => shift(-1)} aria-label="Предыдущая фотография">←</button>
      <button className="circleArrow" type="button" onClick={() => shift(1)} aria-label="Следующая фотография">→</button>
    </div>
  </>;
}


