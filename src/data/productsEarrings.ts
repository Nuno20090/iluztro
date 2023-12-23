import { IProduct } from "../dataDefinitions/product";
import { ProductType } from "../dataDefinitions/productType";

export const ProductsEarrings : IProduct[] = [

    {
        id: 1,
        name_en: 'Le Boudoir De Marie Antoinette',
        description_en: 'Description for Le Boudoir De Marie Antoinette',
        productType: ProductType.Brincos,
        active: true,
        photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
        ],
        price_eur: 10,
        collectionID: 1,

        variants: [
            {
                id: 1,
                name_en: 'Harriet',
                active: true,
                photos: [
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                ],
                price_eur: 27,
            },
            {
                id: 2,
                name_en: 'Macarons',
                active: false,
                photos: [
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                ],
                price_eur: 29,
            }
        ]
    },

    {
        id: 2,
        name_en: 'Florilegium',
        description_en: 'Description for Florilegium',
        productType: ProductType.Brincos,
        active: true,
        photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
        ],
        price_eur: 10,
        collectionID: 1,
        
        variants: [
            {
                id: 1,
                name_en: 'Floret',
                active: true,
                photos: [
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                ],
                price_eur: 45,
            },
            {
                id: 2,
                name_en: 'Primroses',
                active: true,
                photos: [
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                ],
                price_eur: 95,
            },
            {
                id: 3,
                name_en: 'Daises',
                active: true,
                photos: [
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                ],
                price_eur: 133,
            },
            {
                id: 4,
                name_en: 'Forget me not',
                active: true,
                photos: [
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                ],
                price_eur: 75,
            },
            {
                id: 5,
                name_en: 'Sunflower',
                active: true,
                photos: [
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                ],
                price_eur: 225,
            },
            {
                id: 6,
                name_en: 'Florium Crown',
                active: true,
                photos: [
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                ],
                price_eur: 50,
            },
            {
                id: 7,
                name_en: 'Hydrangeas Hoops',
                active: true,
                photos: [
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                ],
                price_eur: 72,
            }
        ]
    }
];