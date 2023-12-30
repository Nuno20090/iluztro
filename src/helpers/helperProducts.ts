import { Products } from "../data/products";
import { IProduct } from "../dataDefinitions/product";
import { ISellableItem } from "../dataDefinitions/sellableItem";
import { IProductVariant } from "../dataDefinitions/variant";

export class HelperProducts {
  public static GetProduct(productID: number): IProduct {
    return Products.find(product => product.id === productID)!;
  }

  public static GetCollectionActiveProducts(collectionID: number): IProduct[] {
    return Products.filter(product =>
      product.collectionID === collectionID &&
      product.active === true);
  }

  public static GetSellableItems(collectionID: number): ISellableItem[] {

    // Get all the products in the collection
    let colectionProducts = HelperProducts.GetCollectionActiveProducts(collectionID);

    // For each product:
    // - If it has variants, create a sellable item for each variant
    // - If it doesn't have variants, create a sellable item for the product
    let sellableItems: ISellableItem[] = [];

    colectionProducts.forEach((product) => {

      const numVariants = product.variants ? product.variants.length : 0;

      if (numVariants === 0) {
        sellableItems.push(HelperProducts.CreateSellableItemFromProduct(product));
      }
      else {
        const variants = product.variants;
        if (variants === undefined) {
          throw new Error("variants is null");
        }

        for (let i = 0; i < variants.length; i++) {
          const variant = variants[i];
          if (variant.active === false) {
            continue;
          }

          sellableItems.push(HelperProducts.CreateSellableItemFromVariant(product, variant));
        }
      }
    });

    return sellableItems;
  }

  public static GetSellableItem(
    productID: number,
    variantID: number | undefined): ISellableItem {

    let product = HelperProducts.GetProduct(productID);

    if (variantID === undefined) {
      return HelperProducts.CreateSellableItemFromProduct(product);
    }

    let variant = product.variants?.find(variant => variant.id === variantID);

    if (variant === undefined) {
      throw new Error("variant is null");
    }

    return HelperProducts.CreateSellableItemFromVariant(product, variant);
  }

  private static CreateSellableItemFromProduct(product: IProduct): ISellableItem {
    return {
      collectionID: product.collectionID,
      productID: product.id,
      variantID: undefined,

      productName_en: product.name_en,
      variantName_en: undefined,
      description_en: product.description_en,

      type: product.type,

      price_eur: product.price_eur,
      measures: product.measures,

      photos: product.photos
    };
  }

  private static CreateSellableItemFromVariant(product: IProduct, variant: IProductVariant): ISellableItem {

    return {
      collectionID: product.collectionID,
      productID: product.id,
      variantID: variant.id,

      productName_en: product.name_en,
      variantName_en: variant.name_en,
      description_en: variant.description_en || product.description_en,

      type: product.type,
      price_eur: variant.price_eur || product.price_eur,
      measures: variant.measures || product.measures,
      photos: variant.photos || product.photos
    };
  }
}