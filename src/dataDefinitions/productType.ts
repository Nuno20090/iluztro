
export enum ProductType
{
    Brincos = 1,
    Colares = 2,
    Pulseiras = 3,
    Aneis = 5,
    Alfinetes = 6,
    Pendentes = 7
}

export interface IProductType
{
    type : ProductType;
    name_en : string;

    order: number;
}