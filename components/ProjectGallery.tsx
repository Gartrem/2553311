'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { studioProjects } from '@/lib/projects';

const base = process.env.NODE_ENV === 'production' ? '/2553311' : '';

export default function ProjectGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (selected === null) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
      if (event.key === 'ArrowRight') setSelected(current => current === null ? null : (current + 1) % studioProjects.length);
      if (event.key === 'ArrowLeft') setSelected(current => current === null ? null : (current + studioProjects.length - 1) % studioProjects.length);
    };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = oldOverflow; window.removeEventListener('keydown', onKey); openerRef.current?.focus(); };
  }, [selected]);

  const current = selected === null ? null : studioProjects[selected];
  return <>
    <div className="projectTileGrid">
      {studioProjects.map((project, index) => <article className="projectTile" id={project.anchor} key={project.anchor}>
        <button type="button" onClick={event => { openerRef.current = event.currentTarget; setSelected(index); }} aria-label={`Открыть фотографию: ${project.title}, ${project.area ? `${project.area} м²` : project.category}`}>
          <span className="projectTileImage"><Image src={`${base}/assets/${project.image}`} alt={`${project.title} — фотография реализованного проекта`} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" /></span>
          <span className="projectTileInfo"><span>{String(index + 1).padStart(2, '0')} / {project.category}</span><span>{project.area ? `${project.area} м²` : 'Проект'}</span></span>
          <span className="projectTileTitle">{project.title}<span aria-hidden="true">↗</span></span>
        </button>
      </article>)}
    </div>
    {current && <div className="projectViewer" role="dialog" aria-modal="true" aria-label={`Проект ${current.title}`} onMouseDown={event => { if (event.target === event.currentTarget) setSelected(null); }}>
      <div className="projectViewerPanel">
        <button ref={closeRef} className="projectViewerClose" type="button" onClick={() => setSelected(null)} aria-label="Закрыть фотографию">×</button>
        <div className="projectViewerImage"><Image src={`${base}/assets/${current.image}`} alt={`${current.title} — фотография из портфолио студии`} fill sizes="90vw" priority /></div>
        <div className="projectViewerFooter">
          <div><span>{String(selected! + 1).padStart(2, '0')} / {studioProjects.length}</span><h3>{current.title}</h3><p>{current.category}{current.area ? ` · ${current.area} м²` : ''}</p></div>
          <div className="projectViewerControls"><button type="button" onClick={() => setSelected((selected! + studioProjects.length - 1) % studioProjects.length)} aria-label="Предыдущий проект">←</button><button type="button" onClick={() => setSelected((selected! + 1) % studioProjects.length)} aria-label="Следующий проект">→</button></div>
        </div>
      </div>
    </div>}
  </>;
}
