
export enum ProductType
{
    Brincos = 1,
    Colares = 2,
    Pulseiras = 3,
    Aneis = 4,
    Alfinetes = 5,
    Pendentes = 6
}

export interface IProductType
{
    type : ProductType;
    name_en : string;

    order: number;
}