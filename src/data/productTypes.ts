import { IProductType, ProductType } from "../dataDefinitions/productType";

export const ProductTypes: IProductType[] =
    [
        {
            type: ProductType.Brincos,
            name_singular_en: 'Earring',
            name_plural_en: 'Earrings',
            order: 1
        },
        {
            type: ProductType.Colares,
            name_singular_en: 'Necklace',
            name_plural_en: 'Necklaces',
            order: 2
        },
        {
            type: ProductType.Pulseiras,
            name_singular_en: 'Bracelet',
            name_plural_en: 'Bracelets',
            order: 3
        },
        {
            type: ProductType.Aneis,
            name_singular_en: 'Ring',
            name_plural_en: 'Rings',
            order: 4
        },
        {
            type: ProductType.Alfinetes,
            name_singular_en: 'Brooche',
            name_plural_en: 'Brooches',
            order: 5
        },
        {
            type: ProductType.Pendentes,
            name_singular_en: 'Pendant',
            name_plural_en: 'Pendants',
            order: 6
        }
    ];
