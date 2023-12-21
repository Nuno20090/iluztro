export interface IProduct
{
    id: number,
    name: string;
    description: string;
    photos: string[];
    price: number;
    collectionID: number;
}

export const Products : IProduct[] = [
    {
        id: 1,
        name: 'Product A',
        description: 'Description for Product A',
        photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
        ],
        price: 10,
        collectionID: 1
    },
    {
        id: 2,
        name: 'Product B',
        description: 'Description for Product B',
        photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
        ],
        price: 20,
        collectionID: 1
    },
    {
        id: 3,
        name: 'Product C',
        description: 'Description for Product C',
        photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
        ],
        price: 20,
        collectionID: 1
    },
]