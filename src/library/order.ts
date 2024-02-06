import { ICartItem } from "../dataDefinitions/cartItem";
import { HelperProducts } from "../helpers/helperProducts";

export type BuyerLocation = "Portugal" | "Other";

export class Order {

    static OrderThresholdFreeShipping = 150;
    static DeliveryCostPortugal = 6;
    static DeliveryCostOther = 13;

    static getOrderItemsTotal(cartItems: ICartItem[]): number {
        var total = 0;

        cartItems.forEach(item => {

            const sellableItem = HelperProducts.GetSellableItem(item.productID, item.variantID);

            total += sellableItem.price_eur ?? 0;
        });

        return total;
    }

    static getOrderDeliveryCosts(cartItems: ICartItem[], buyerLocation: BuyerLocation): number {

        // Get the value of the items
        const itemsTotal = Order.getOrderItemsTotal(cartItems);

        // Check if it is above the threshold
        if (itemsTotal > Order.OrderThresholdFreeShipping) {
            return 0;
        }

        // Check if the buyer is in Portugal
        if (buyerLocation === "Portugal") {
            return Order.DeliveryCostPortugal;
        }
        else {
            return Order.DeliveryCostOther;
        }
    }

    static getOrderTotal(cartItems: ICartItem[], buyerLocation: BuyerLocation): number {

        // Get the value of the items
        const itemsTotal = Order.getOrderItemsTotal(cartItems);

        // Get the delivery costs
        const deliveryCosts = Order.getOrderDeliveryCosts(cartItems, buyerLocation);

        // Return the total
        return itemsTotal + deliveryCosts;
    }
}