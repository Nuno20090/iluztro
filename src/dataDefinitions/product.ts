import { IMeasurement } from "./measurements";
import { ProductType } from "./productType";
import { IVariant } from "./variant";

export interface IProduct {
    id: number;

    collectionID: number;

    name_en: string;
    description_en: string;

    active: boolean;

    type: ProductType;

    price_eur?: number;
    measures?: IMeasurement;

    photos?: string[];

    variants?: IVariant[];
}