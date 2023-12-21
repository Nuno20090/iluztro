
export interface ICollectionPage {
    id: number
    name: string;
    path: string;
}

export const CollectionPages : ICollectionPage[] = [
    {
        id: 1,
        name: 'Collection A',
        path: '/collection-a'
    },
    {
        id: 2,
        name: 'Collection B',
        path: '/collection-b'
    },
    {
        id: 3,
        name: 'Collection C',
        path: '/collection-c'
    },
];

