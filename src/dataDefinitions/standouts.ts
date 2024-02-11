
export interface IStandout {
    itemType: "Collection" | "Product";
    itemID: number;
    isNew: boolean;
}

export interface IStandouts {
    standouts: IStandout[];
}