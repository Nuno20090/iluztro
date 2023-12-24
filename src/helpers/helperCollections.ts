import { Collections } from "../data/collections";
import { ICollection } from "../dataDefinitions/collection";
import { ProductType } from "../dataDefinitions/productType";
import { HelperProductTypes } from "./helperProductTypes";
import { HelperProducts } from "./helperProducts";

export class HelperCollections {
  public static GetCollectionPages(): ICollection[] {
    return Collections;
  }

  public static GetCollectionsForMenu(): ICollection[] {
    return Collections.filter(collection =>
      collection.active &&
      collection.type === "Collection"
    ).sort((a, b) => a.order - b.order);
  }

  public static GetCollectionsForHeader(): ICollection[] {
    return Collections.filter(collection =>
      collection.active &&
      collection.type !== "Collection"
    ).sort((a, b) => a.order - b.order);
  }

  public static GetCollectionPage(collectionID: number): ICollection {
    return Collections.find(page => page.id === collectionID)!;
  }

  // Retrieves all the product types for a given collection
  public static GetCollectionProductTypes(collectionID: number) {

    let products = HelperProducts.GetCollectionProducts(collectionID);

    // Get all the types from the collection products
    let productTypesInCollection : ProductType[] = products.map((product) => product.type);

    // Get the unique types
    productTypesInCollection = productTypesInCollection.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    // Get all the available types
    var allTypes = HelperProductTypes.GetProductTypes();

    // Filter the available types to only the ones that are in the collection
    return allTypes.filter((value) => {
        return productTypesInCollection.includes(value.type);
    });
  }
}
