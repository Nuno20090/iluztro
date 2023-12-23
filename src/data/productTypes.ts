import { IProductType, ProductType } from "../dataDefinitions/productType";

export const ProductTypes : IProductType[] =
[
    {
        type : ProductType.Brincos,
        name_en : 'Earrings',
        order: 1
    },
    {
        type : ProductType.Colares,
        name_en : 'Necklaces',
        order: 2
    },
    {
        type : ProductType.Pulseiras,
        name_en : 'Bracelets',
        order: 3
    },
    {
        type : ProductType.Aneis,
        name_en : 'Rings',
        order: 4
    },
    {
        type : ProductType.Alfinetes,
        name_en : 'Brooches',
        order: 5
    },
    {
        type : ProductType.Pendentes,
        name_en : 'Pendants',
        order: 6
    }
];
