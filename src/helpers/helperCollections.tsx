import { ICollection, Collections } from "../data/collections";

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
}
