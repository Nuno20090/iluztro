import { IMeasurement } from "./measurements";
import { ProductType } from "./productType";

export interface ISellableItem {

    collectionID: number;
    productID: number;
    variantID: number | undefined;

    productName_en: string;
    variantName_en: string | undefined;
    description_en: string;

    type: ProductType;

    price_eur?: number;
    measures?: IMeasurement;

    photos?: string[];
}