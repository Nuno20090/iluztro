import { ICartItem } from "../dataDefinitions/cartItem";
import { HelperProductTypes } from "../helpers/helperProductTypes";
import { HelperProducts } from "../helpers/helperProducts";
import { BuyerLocation, Order } from "./order";
import emailjs from '@emailjs/browser';

export class OrderMail {

    static async sendOrderMail(
        buyerName: string,
        buyerMail: string,
        buyerAddress: string,
        buyerLocation: BuyerLocation,
        buyerInstructions: string,
        cartItems: ICartItem[],
        paymentMethod: "Bank Transfer" | "MbWay"
    ) {
        // Get a string that represent the current time
        const currentTime = new Date().toLocaleString();

        // Get a string that represents the cart items
        const cartItemsDescription = OrderMail.getCartItemsDescription(cartItems);

        var mailData = {
            when: currentTime,
            itemsDetails: cartItemsDescription,
            buyerName: buyerName,
            buyerMail: buyerMail,
            buyerAddress: buyerAddress,
            buyerLocation: buyerLocation,
            buyerInstructions: buyerInstructions,
            paymentSelected: paymentMethod,
            paymentItemsAmount: `${Order.getOrderItemsTotal(cartItems)}€`,
            paymentShippingAmount: `${Order.getOrderDeliveryCosts(cartItems, buyerLocation)}€`,
            paymentTotalAmount: `${Order.getOrderTotal(cartItems, buyerLocation)}€`
        };

        const result = await emailjs.send(
            "service_b75c7mf",
            "template_ccf6ccw",
            mailData,
            "E_UkF_2jrxNy73-y6"
        );

        console.log(result.status + " : " + result.text);
    }

    static getCartItemsDescription(cartItems: ICartItem[]): string {

        let cartItemsString = "";
        for (let i = 0; i < cartItems.length; i++) {

            if (cartItemsString !== "") {
                cartItemsString += "\n";
            }

            cartItemsString += OrderMail.getCartItemDescription(cartItems[i]);
        }
        return cartItemsString;
    }

    static getCartItemDescription(cartItem: ICartItem): string {

        const sellableItem = HelperProducts.GetSellableItem(cartItem.productID, cartItem.variantID);

        // Item Type
        const itemTypeDescription = HelperProductTypes.GetProductTypeNameSingular(sellableItem.type);

        // Item Code
        const itemCodeDescription = OrderMail.getCartItemCode(cartItem);

        // Item Name
        const itemNameDescription = sellableItem.productName_en;

        // Item price
        const itemPriceDescription = `${sellableItem.price_eur}€`;

        return (
            `${itemTypeDescription} | ` +
            `${itemCodeDescription} | ` +
            `${itemNameDescription} | ` +
            `${itemPriceDescription}`
        );
    }

    static getCartItemCode(cartItem: ICartItem): string {

        if (cartItem.variantID === undefined) {
            return cartItem.productID.toString();
        }

        return `${cartItem.productID}, ${cartItem.variantID}`;
    }
}