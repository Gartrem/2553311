export type StudioProject = {
  title: string;
  area?: number;
  anchor: string;
  image: string;
  category: 'Квартира' | 'Дом' | 'Офис' | 'Шоурум';
};

// Names, areas and gallery anchors are taken from the studio's published portfolio.
export const studioProjects: StudioProject[] = [
  { title: 'ул. Урицкого', area: 62, anchor: 'urizkogo', image: 'project-uritskogo.webp', category: 'Квартира' },
  { title: 'п. Каменский', area: 150, anchor: 'kamenskiy', image: 'project-kamenskiy.webp', category: 'Дом' },
  { title: 'ЖК Бульвар', area: 75, anchor: 'bulvar', image: 'project-bulvar.webp', category: 'Квартира' },
  { title: 'ЖК История', area: 100, anchor: 'istoria', image: 'project-istoria.webp', category: 'Квартира' },
  { title: 'ЖК Эволюция', area: 50, anchor: 'evolution', image: 'project-evolution.webp', category: 'Квартира' },
  { title: 'ЖК Лев Толстой', area: 73, anchor: 'lev', image: 'project-lev.webp', category: 'Квартира' },
  { title: 'ЖК Европейский берег', area: 70, anchor: 'ebereg70', image: 'project-ebereg70.webp', category: 'Квартира' },
  { title: 'ЖК Ясный берег', area: 70, anchor: 'yabereg', image: 'project-yabereg.webp', category: 'Квартира' },
  { title: 'Офис Indigo Kids', area: 300, anchor: 'indigo', image: 'project-indigo.webp', category: 'Офис' },
  { title: 'п. Озерный', area: 200, anchor: 'ozero', image: 'project-ozero.webp', category: 'Дом' },
  { title: 'ЖК Фрунзенский', area: 90, anchor: 'frunze90', image: 'project-frunze90.webp', category: 'Квартира' },
  { title: 'ЖК Фрунзенский', area: 80, anchor: 'frunze80', image: 'project-frunze80.webp', category: 'Квартира' },
  { title: 'ул. Гребенщикова', area: 50, anchor: 'greben', image: 'project-greben.webp', category: 'Квартира' },
  { title: 'ЖК Эталон', area: 95, anchor: 'etalon', image: 'project-etalon.webp', category: 'Квартира' },
  { title: 'ЖК Европейский берег', area: 65, anchor: 'ebereg65', image: 'project-ebereg65.webp', category: 'Квартира' },
  { title: 'г. Калининград', area: 70, anchor: 'kalinin', image: 'project-kalinin.webp', category: 'Квартира' },
  { title: 'ЖК Европейский берег', area: 67, anchor: 'ebereg67', image: 'project-ebereg67.webp', category: 'Квартира' },
  { title: 'Шоу-рум Ясный берег', anchor: 'show', image: 'project-show.webp', category: 'Шоурум' },
  { title: 'ЖК Горский', area: 80, anchor: 'gorskiy', image: 'project-gorskiy.webp', category: 'Квартира' },
  { title: 'ЖК Гурьевский', area: 30, anchor: 'guryev', image: 'project-guryev.webp', category: 'Квартира' },
  { title: 'ЖК Европейский берег', area: 62, anchor: 'ebereg62', image: 'project-ebereg62.webp', category: 'Квартира' },
];
