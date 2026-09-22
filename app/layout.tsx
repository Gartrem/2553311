import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: { default:'Ателье Авторского Ремонта — дизайн и реализация интерьеров в Новосибирске', template:'%s — Ателье Авторского Ремонта' },
  description:'Проектируем интерьеры квартир и домов в Новосибирске и отвечаем за результат: дизайн, комплектация, авторский контроль и реализация.',
  icons: { icon: `${process.env.NODE_ENV === 'production' ? '/2553311' : ''}/favicon.svg` },
  openGraph:{title:'Ателье Авторского Ремонта',description:'Проектируем интерьер. Отвечаем за результат.',type:'website'}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body><Reveal/><Header/><main>{children}</main><Footer/></body></html>}
