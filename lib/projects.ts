export type StudioProject = {
  title: string;
  area?: number;
  anchor: string;
  image: string;
  photos?: string[];
  category: 'Квартира' | 'Дом' | 'Офис' | 'Шоурум';
};

// Names, areas and gallery anchors are taken from the studio's published portfolio.
export const studioProjects: StudioProject[] = [
  { title: 'ул. Урицкого', area: 62, anchor: 'urizkogo', image: 'project-uritskogo.webp', photos: ['project-uritskogo.webp', 'project-uritskogo-02.webp', 'project-uritskogo-03.webp', 'project-uritskogo-04.webp'], category: 'Квартира' },
  { title: 'п. Каменский', area: 150, anchor: 'kamenskiy', image: 'project-kamenskiy.webp', photos: ['project-kamenskiy.webp', 'project-kamenskiy-02.webp', 'project-kamenskiy-03.webp', 'project-kamenskiy-04.webp'], category: 'Дом' },
  { title: 'ЖК Бульвар', area: 75, anchor: 'bulvar', image: 'project-bulvar.webp', photos: ['project-bulvar.webp', 'project-bulvar-02.webp', 'project-bulvar-03.webp', 'project-bulvar-04.webp', 'project-bulvar-05.webp'], category: 'Квартира' },
  { title: 'ЖК История', area: 100, anchor: 'istoria', image: 'project-istoria.webp', photos: ['project-istoria.webp', 'project-istoria-02.webp', 'project-istoria-03.webp', 'project-istoria-04.webp'], category: 'Квартира' },
  { title: 'ЖК Эволюция', area: 50, anchor: 'evolution', image: 'project-evolution.webp', photos: ['project-evolution.webp', 'project-evolution-02.webp', 'project-evolution-03.webp', 'project-evolution-04.webp'], category: 'Квартира' },
  { title: 'ЖК Лев Толстой', area: 73, anchor: 'lev', image: 'project-lev.webp', photos: ['project-lev.webp', 'project-lev-02.webp', 'project-lev-03.webp', 'project-lev-04.webp'], category: 'Квартира' },
  { title: 'ЖК Европейский берег', area: 70, anchor: 'ebereg70', image: 'project-ebereg70.webp', photos: ['project-ebereg70.webp', 'project-ebereg70-02.webp', 'project-ebereg70-03.webp', 'project-ebereg70-04.webp'], category: 'Квартира' },
  { title: 'ЖК Ясный берег', area: 70, anchor: 'yabereg', image: 'project-yabereg.webp', photos: ['project-yabereg.webp', 'project-yabereg-02.webp', 'project-yabereg-03.webp', 'project-yabereg-04.webp'], category: 'Квартира' },
  { title: 'Офис Indigo Kids', area: 300, anchor: 'indigo', image: 'project-indigo.webp', photos: ['project-indigo.webp', 'project-indigo-02.webp', 'project-indigo-03.webp', 'project-indigo-04.webp'], category: 'Офис' },
  { title: 'п. Озерный', area: 200, anchor: 'ozero', image: 'project-ozero.webp', photos: ['project-ozero.webp', 'project-ozero-02.webp', 'project-ozero-03.webp', 'project-ozero-04.webp'], category: 'Дом' },
  { title: 'ЖК Фрунзенский', area: 90, anchor: 'frunze90', image: 'project-frunze90.webp', photos: ['project-frunze90.webp', 'project-frunze90-02.webp', 'project-frunze90-03.webp', 'project-frunze90-04.webp'], category: 'Квартира' },
  { title: 'ЖК Фрунзенский', area: 80, anchor: 'frunze80', image: 'project-frunze80.webp', photos: ['project-frunze80.webp', 'project-frunze80-02.webp', 'project-frunze80-03.webp', 'project-frunze80-04.webp', 'project-frunze80-05.webp'], category: 'Квартира' },
  { title: 'ул. Гребенщикова', area: 50, anchor: 'greben', image: 'project-greben.webp', photos: ['project-greben.webp', 'project-greben-02.webp', 'project-greben-03.webp', 'project-greben-04.webp'], category: 'Квартира' },
  { title: 'ЖК Эталон', area: 95, anchor: 'etalon', image: 'project-etalon.webp', photos: ['project-etalon.webp', 'project-etalon-02.webp', 'project-etalon-03.webp', 'project-etalon-04.webp'], category: 'Квартира' },
  { title: 'ЖК Европейский берег', area: 65, anchor: 'ebereg65', image: 'project-ebereg65.webp', photos: ['project-ebereg65.webp', 'project-ebereg65-02.webp', 'project-ebereg65-03.webp', 'project-ebereg65-04.webp'], category: 'Квартира' },
  { title: 'г. Калининград', area: 70, anchor: 'kalinin', image: 'project-kalinin.webp', photos: ['project-kalinin.webp', 'project-kalinin-02.webp', 'project-kalinin-03.webp', 'project-kalinin-04.webp'], category: 'Квартира' },
  { title: 'ЖК Европейский берег', area: 67, anchor: 'ebereg67', image: 'project-ebereg67.webp', photos: ['project-ebereg67.webp', 'project-ebereg67-02.webp', 'project-ebereg67-03.webp', 'project-ebereg67-04.webp'], category: 'Квартира' },
  { title: 'Шоу-рум Ясный берег', anchor: 'show', image: 'project-show.webp', photos: ['project-show.webp', 'project-show-02.webp', 'project-show-03.webp', 'project-show-04.webp'], category: 'Шоурум' },
  { title: 'ЖК Горский', area: 80, anchor: 'gorskiy', image: 'project-gorskiy.webp', photos: ['project-gorskiy.webp', 'project-gorskiy-02.webp', 'project-gorskiy-03.webp', 'project-gorskiy-04.webp'], category: 'Квартира' },
  { title: 'ЖК Гурьевский', area: 30, anchor: 'guryev', image: 'project-guryev.webp', photos: ['project-guryev.webp', 'project-guryev-02.webp', 'project-guryev-03.webp', 'project-guryev-04.webp'], category: 'Квартира' },
  { title: 'ЖК Европейский берег', area: 62, anchor: 'ebereg62', image: 'project-ebereg62.webp', photos: ['project-ebereg62.webp', 'project-ebereg62-02.webp', 'project-ebereg62-03.webp', 'project-ebereg62-04.webp'], category: 'Квартира' },
];
