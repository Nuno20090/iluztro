import { ICollection } from "../dataDefinitions/collection";

export const Collections: ICollection[] = [
  {
    id: 1,
    name_en: 'Collection A',
    active: true,
    path: '/collection-a',
    type: "Collection",
    order: 2,
  },
  {
    id: 2,
    name_en: 'Collection B',
    active: true,
    path: '/collection-b',
    type: "Collection",
    order: 1,
  },
  {
    id: 3,
    name_en: 'Collection C',
    active: true,
    path: '/collection-c',
    type: "Collection",
    order: 3,
  },
  {
    id: 4,
    name_en: 'Collection D',
    active: false,
    path: '/collection-d',
    type: "Collection",
    order: 4,
  },
  {
    id: 101,
    name_en: 'Outlet',
    active: true,
    path: '/outlet',
    type: "Outlet",
    order: 2,
  },
  {
    id: 102,
    name_en: 'Exclusive Items',
    active: false,
    path: '/exclusive-items',
    type: "Outlet",
    order: 1,
  },
];

