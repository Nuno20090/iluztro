
export interface IStandout {
    itemType: "Collection" | "Product";
    itemID: number;
    variantID: number | undefined;
    isNew: boolean;
}

export interface IStandouts {
    standouts: IStandout[];
}