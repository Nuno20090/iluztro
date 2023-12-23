export interface ICollection {
    id: number;
    name_en: string;
    active: boolean;
    path: string;
    type: "Collection" | "Outlet";
    order: number;
  }