import { ISellableItem } from "../dataDefinitions/sellableItem";

export class SellableItemPath {

  static getPath(sellableItem: ISellableItem | undefined): string {

    if (!sellableItem) {
      return "";
    }

    if (sellableItem.variantID === undefined) {
      return `/product/${sellableItem.productID}`;
    }
    else {
      return `/product/${sellableItem.productID}?variantID=${sellableItem.variantID}`;
    }
  }
}