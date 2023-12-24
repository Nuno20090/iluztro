import { IProduct } from "../dataDefinitions/product";
import { ProductType } from "../dataDefinitions/productType";
import { ProductsEarrings } from "./productsEarrings";

export const Products : IProduct[] = [

    ...ProductsEarrings,

    {
        id: 101,
        name_en: 'Product A',
        description_en: 'Description for Product A',
        type: ProductType.Alfinetes,
        active: true,
        photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
        ],
        price_eur: 10,
        collectionID: 1
    },
    {
        id: 102,
        name_en: 'Product B',
        description_en: 'Description for Product B',
        type: ProductType.Colares,
        active: true,
        photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
        ],
        price_eur: 20,
        collectionID: 1
    },
    {
        id: 103,
        name_en: 'Product C',
        description_en: 'Description for Product C',
        active: true,
        type: ProductType.Colares,
        photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
        ],
        price_eur: 20,
        collectionID: 1
    },
]