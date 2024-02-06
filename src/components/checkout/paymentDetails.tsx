import { useEffect, useState } from "react";
import { ICartItem } from "../../dataDefinitions/cartItem";
import { BuyerLocation, Order } from "../../library/order";

interface PaymentDetailsParams {
    cartItems: ICartItem[];
    buyerLocation: BuyerLocation;
}

export function PaymentDetails({
    cartItems,
    buyerLocation
}: PaymentDetailsParams) {

    const [itemsCost, setItemsCost] = useState<number>(0);
    const [shippingCost, setShippingCost] = useState<number>(0);
    const [totalCost, setTotalCost] = useState<number>(0);

    useEffect(() => {

        const itemsCost = Order.getOrderItemsTotal(cartItems);
        const shippingCost = Order.getOrderDeliveryCosts(cartItems, buyerLocation);
        const totalCost = itemsCost + shippingCost;

        setItemsCost(itemsCost);
        setShippingCost(shippingCost);
        setTotalCost(totalCost);

    }, [cartItems, buyerLocation]);

    return <div
        className="payment-details">
        <table>
            <tbody>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>Items Cost</td>
                    <td>{itemsCost}€</td>
                </tr>
                <tr>
                    <td>Shipping Cost</td>
                    <td>{shippingCost}€</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>{totalCost}€</td>
                </tr>
            </tbody>
        </table>


    </div>
}