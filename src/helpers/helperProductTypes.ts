import { ProductTypes } from "../data/productTypes";
import { ProductType } from "../dataDefinitions/productType";

export class HelperProductTypes {
    static GetProductTypes() {

        // Get all the product types
        var allProductTypes = ProductTypes;

        // Sort them correctly by the order
        allProductTypes.sort((a, b) => a.order - b.order);

        // Return the product types
        return allProductTypes;
    }

    static GetProductTypeNameSingular(productType: ProductType) {
        const productDef = ProductTypes.find(p => p.type === productType);

        if (productDef === undefined) {
            return "";
        }
        return productDef.name_singular_en;
    }
}