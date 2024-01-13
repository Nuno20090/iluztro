export interface ICollection {
    id: number;
    name_en: string;
    description_en?: string;
    active: boolean;
    type: "Collection" | "Outlet";
    order: number;
    image: string;
  }