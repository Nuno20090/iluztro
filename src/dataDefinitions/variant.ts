import { IMeasurement } from "./measurements";

export interface IVariant {
    id: number;

    name_en: string;

    active: boolean;

    price_eur: number;
    measures?: IMeasurement;

    photos?: string[];
}