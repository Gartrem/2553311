'use client';

import Image from 'next/image';
import ExternalArrow from '@/components/ExternalArrow';
import { useEffect, useRef, useState } from 'react';
import { studioProjects } from '@/lib/projects';

const base = process.env.NODE_ENV === 'production' ? '/2553311' : '';

export default function ProjectGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (selected === null) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
      const photoCount = studioProjects[selected]?.photos?.length ?? 1;
      if (event.key === 'ArrowRight') setSelectedPhoto(current => (current + 1) % photoCount);
      if (event.key === 'ArrowLeft') setSelectedPhoto(current => (current + photoCount - 1) % photoCount);
    };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = oldOverflow; window.removeEventListener('keydown', onKey); openerRef.current?.focus(); };
  }, [selected]);

  const current = selected === null ? null : studioProjects[selected];
  return <>
    <div className="projectTileGrid">
      {studioProjects.map((project, index) => <article className="projectTile" id={project.anchor} key={project.anchor}>
        <button type="button" onClick={event => { openerRef.current = event.currentTarget; setSelectedPhoto(0); setSelected(index); }} aria-label={`Открыть галерею проекта: ${project.title}, ${project.area ? `${project.area} м²` : project.category}`}>
          <span className="projectTileImage"><Image src={`${base}/assets/${project.image}`} alt={`${project.title} — фотография реализованного проекта`} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" /></span>
          <span className="projectTilePhotoCount">{project.photos?.length ?? 1} фото</span>
          <span className="projectTileInfo"><span>{String(index + 1).padStart(2, '0')} / {project.category}</span><span>{project.area ? `${project.area} м²` : 'Проект'}</span></span>
          <span className="projectTileTitle">{project.title}<span aria-hidden="true"><ExternalArrow /></span></span>
        </button>
      </article>)}
    </div>
    {current && <div className="projectViewer" role="dialog" aria-modal="true" aria-label={`Проект ${current.title}`} onMouseDown={event => { if (event.target === event.currentTarget) setSelected(null); }}>
      <div className="projectViewerPanel">
        <button ref={closeRef} className="projectViewerClose" type="button" onClick={() => setSelected(null)} aria-label="Закрыть фотографию">×</button>
        <div className="projectViewerImage">
          <Image src={`${base}/assets/${(current.photos ?? [current.image])[selectedPhoto]}`} alt={`${current.title} — фотография ${selectedPhoto + 1} из ${current.photos?.length ?? 1}`} fill sizes="90vw" priority />
          {(current.photos?.length ?? 1) > 1 && <>
            <button className="projectPhotoArrow projectPhotoArrowPrev" type="button" onClick={() => setSelectedPhoto(i => (i + (current.photos?.length ?? 1) - 1) % (current.photos?.length ?? 1))} aria-label="Предыдущее фото проекта">←</button>
            <button className="projectPhotoArrow projectPhotoArrowNext" type="button" onClick={() => setSelectedPhoto(i => (i + 1) % (current.photos?.length ?? 1))} aria-label="Следующее фото проекта">→</button>
          </>}
        </div>
        <div className="projectViewerFooter">
          <div><span>Фото {String(selectedPhoto + 1).padStart(2, '0')} / {String(current.photos?.length ?? 1).padStart(2, '0')} · Проект {String(selected! + 1).padStart(2, '0')} / {studioProjects.length}</span><h3>{current.title}</h3><p>{current.category}{current.area ? ` · ${current.area} м²` : ''}</p></div>
        </div>
      </div>
    </div>}
  </>;
}
