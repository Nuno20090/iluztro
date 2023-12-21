import { ICollectionPage, CollectionPages } from "../data/collections";

export class HelperCollections
{
    public static GetCollectionPages() : ICollectionPage[] {
        return CollectionPages;
    }

    public static GetCollectionPage(collectionID : number) : ICollectionPage {
        return CollectionPages.find(page => page.id === collectionID)!;
    }
}
