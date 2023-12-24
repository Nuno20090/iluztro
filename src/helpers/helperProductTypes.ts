import { ProductTypes } from "../data/productTypes";

export class HelperProductTypes{
    static GetProductTypes() {
        
        // Get all the product types
        var allProductTypes = ProductTypes;

        // Sort them correctly by the order
        allProductTypes.sort((a, b) => a.order - b.order);

        // Return the product types
        return allProductTypes;
    }

}