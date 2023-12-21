import { IProduct, Products } from "../data/products";

export class HelperProducts
{
    public static GetCollectionProducts(collectionID : number) : IProduct[] {
        return Products.filter(product => product.collectionID === collectionID);
    }
}