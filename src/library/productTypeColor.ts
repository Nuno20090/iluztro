import { ProductType } from "../dataDefinitions/productType";

export class ProductTypeColor
{
    public static GetColor(productType : ProductType | 'All' | undefined) : string
    {
        if (productType === undefined)
        {
            return '';
        }
        switch (productType)
        {
            case 'All':                 return 'var(--accent-color)';
            case ProductType.Brincos:   return 'var(--product-type-color-1)';
            case ProductType.Colares:   return 'var(--product-type-color-2)';
            case ProductType.Pulseiras: return 'var(--product-type-color-3)';
            case ProductType.Aneis:     return 'var(--product-type-color-5)';
            case ProductType.Alfinetes: return 'var(--product-type-color-6)';
            case ProductType.Pendentes: return 'var(--product-type-color-7)';
        }
    }
}