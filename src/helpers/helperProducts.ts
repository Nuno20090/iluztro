import { Products } from "../data/products";
import { IProduct } from "../dataDefinitions/product";

export class HelperProducts {
  public static GetProduct(productID: number): IProduct {
    return Products.find(product => product.id === productID)!;
  }

  public static GetCollectionProducts(collectionID: number): IProduct[] {
    return Products.filter(product => product.collectionID === collectionID);
  }
}