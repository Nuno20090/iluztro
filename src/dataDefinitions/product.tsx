import { IMeasurement } from "./measurements";
import { IVariant } from "./variant";

export interface IProduct
{
    id: number,

    name_en: string;
    description_en: string;

    active: boolean;
    
    price_eur?: number;
    measures?: IMeasurement;
    
    photos?: string[];

    collectionID: number;

    variants?: IVariant[];
}