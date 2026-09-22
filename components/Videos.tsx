import ExternalArrow from '@/components/ExternalArrow';

const videos = [
  { id: 'hmRs-3ATj_M', title: 'Крутая квартира для родителей | Обзор ремонта' },
  { id: '66BZrRgvwyE', title: 'Мой самый дорогой ремонт' },
  { id: 'ijeGmKQ6vo0', title: 'Квартира для семьи с двумя детьми | Обзор ремонта 85 м² Новосибирск' },
  { id: 'ue7vsWof4UE', title: 'Квартира по проекту | Обзор ремонта 80 м²' },
  { id: 'F10vGiM4Zpc', title: 'Квартира в стиле прованс | Обзор ремонта 70 м²' },
  { id: 'MzamN3QtjbE', title: 'Обзор квартиры 70 м² после ремонта' },
  { id: 'h5kQ5w5WQvg', title: 'Финал журнала работ | Обзор ремонта квартиры ЖК Бульвар 95 м²' },
  { id: '5PIotGG361U', title: 'Современная светлая квартира | Обзор ремонта' },
  { id: 'Ds-mE09D-jE', title: 'Квартира для большой семьи в ЖК Флора и Фауна. Обзор ремонта' },
];

const youtubeLink = (id: string) => `https://www.youtube.com/watch?v=${id}`;

export default function Videos() {
  return <section className="videosSection sectionDark" id="videos" aria-labelledby="videos-title" data-reveal>
    <div className="sectionHead dark">
      <div><span className="eyebrow">07 / Видеообзоры</span><h2 id="videos-title">Интерьеры,<br/><i>в которых живут.</i></h2></div>
      <p>Загляните в реализованные пространства вместе с Михаилом Смирновым. Девять видеообзоров с канала студии.</p>
    </div>
    <div className="videosFeatured" aria-label="Избранные видеообзоры">
      {videos.slice(0, 3).map((video, index) => <a className="videoFeature" key={video.id} href={youtubeLink(video.id)} target="_blank" rel="noopener noreferrer" aria-label={`Смотреть на YouTube: ${video.title}`}>
        <span className="videoFeatureVisual" style={{backgroundImage: `url(https://i.ytimg.com/vi/${video.id}/hqdefault.jpg)`}} aria-hidden="true"><span className="videoPlay"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M7 4.5v15l12-7.5L7 4.5Z" /></svg></span></span>
        <span className="videoFeatureMeta">Видеообзор <span>{String(index + 1).padStart(2, '0')} / 09</span></span>
        <span className="videoFeatureTitle">{video.title}</span>
      </a>)}
    </div>
    <div className="videosMore"><div className="videosMoreIntro"><span className="eyebrow">Смотреть дальше</span><p>Ещё шесть историй о домах и квартирах, которые уже стали частью жизни клиентов.</p></div>
      <div className="videosMoreList">{videos.slice(3).map((video, index) => <a href={youtubeLink(video.id)} key={video.id} target="_blank" rel="noopener noreferrer" aria-label={`Смотреть на YouTube: ${video.title}`}><span className="videoListNumber">{String(index + 4).padStart(2, '0')}</span><span>{video.title}</span><b aria-hidden="true"><ExternalArrow /></b></a>)}</div>
    </div>
    <a className="videosChannelLink" href="https://www.youtube.com/user/MsMegel/featured" target="_blank" rel="noopener noreferrer">Канал студии на YouTube <span aria-hidden="true">⟶</span></a>
  </section>;
}
