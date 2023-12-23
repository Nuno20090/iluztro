import { IProduct } from "../dataDefinitions/product";

export const Products : IProduct[] = [
    {
        id: 1,
        name_en: 'Product A',
        description_en: 'Description for Product A',
        photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
        ],
        price_eur: 10,
        collectionID: 1
    },
    {
        id: 2,
        name_en: 'Product B',
        description_en: 'Description for Product B',
        photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
        ],
        price_eur: 20,
        collectionID: 1
    },
    {
        id: 3,
        name_en: 'Product C',
        description_en: 'Description for Product C',
        photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
        ],
        price_eur: 20,
        collectionID: 1
    },
]