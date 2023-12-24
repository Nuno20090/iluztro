import { IMeasurement } from "./measurements";
import { ProductType } from "./productType";

export interface SellableItem {

    collectionID: number;
    product_id: number;
    variant_id: number | undefined;

    name_en: string;
    description_en: string;

    type: ProductType;

    price_eur?: number;
    measures?: IMeasurement;

    photos?: string[];
}