import { IProduct, Products } from "../data/products";

export class HelperProducts {
  public static GetProduct(productID: number): IProduct {
    return Products.find(product => product.id === productID)!;
  }

  public static GetCollectionProducts(collectionID: number): IProduct[] {
    return Products.filter(product => product.collectionID === collectionID);
  }
}