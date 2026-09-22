'use client';

import Image from 'next/image';
import { useState } from 'react';

const base = process.env.NODE_ENV === 'production' ? '/2553311' : '';
const slides = [
  { src: `${base}/assets/hero-reference.webp`, alt: 'Панорамный интерьер с видом на город и реку в вечернем свете' },
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
    {active === 0 && <Image
      className="heroFounder"
      src={`${base}/assets/mikhail-smirnov-cutout.png`}
      alt="Михаил Смирнов, основатель студии"
      width={1152}
      height={1536}
      priority
      sizes="(max-width: 700px) 92vw, (max-width: 1050px) 58vw, 35vw"
    />}
    {active === 0 && <div className="heroAside">Хороший<br/>интерьер<br/>делает жизнь<br/>лучше<span /><small>Михаил Смирнов<br/>Основатель студии</small></div>}
    <div className="heroSlideControls" aria-label="Фотографии интерьеров">
      <div className="heroSlideNumbers">{slides.map((_, index) => <button key={index} type="button" className={active === index ? 'isActive' : ''} onClick={() => setActive(index)} aria-label={`Показать фотографию ${index + 1}`} aria-current={active === index ? 'true' : undefined}>{String(index + 1).padStart(2, '0')}</button>)}</div>
      <span className="controlRule" aria-hidden="true" />
      <button className="circleArrow" type="button" onClick={() => shift(-1)} aria-label="Предыдущая фотография">←</button>
      <button className="circleArrow" type="button" onClick={() => shift(1)} aria-label="Следующая фотография">→</button>
    </div>
  </>;
}
