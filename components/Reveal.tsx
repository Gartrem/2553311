'use client';
import { useEffect } from 'react';
export default function Reveal(){useEffect(()=>{const els=[...document.querySelectorAll<HTMLElement>('[data-reveal]')];const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){(e.target as HTMLElement).classList.add('isVisible');io.unobserve(e.target)}}),{threshold:.14});els.forEach(el=>io.observe(el));return()=>io.disconnect()},[]);return null}
