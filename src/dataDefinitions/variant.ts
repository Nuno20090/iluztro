import { IMeasurement } from "./measurements";

export interface IProductVariant {
    id: number;

    name_en: string;
    description_en?: string;

    active: boolean;

    price_eur: number;
    measures?: IMeasurement;

    photos?: string[];
}