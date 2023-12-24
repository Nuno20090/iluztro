import { IMeasurement } from "./measurements";
import { ProductType } from "./productType";
import { IVariant } from "./variant";

export interface IProduct
{
    id: number;

    name_en: string;
    description_en: string;

    active: boolean;
    
    type : ProductType;

    price_eur?: number;
    measures?: IMeasurement;
    
    photos?: string[];

    collectionID: number;

    variants?: IVariant[];
}