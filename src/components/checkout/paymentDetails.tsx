import { ICartItem } from "../../dataDefinitions/cartItem";
import { BuyerLocation } from "../../library/order";

interface PaymentDetailsParams {
    cartItems: ICartItem[];
    buyerLocation: BuyerLocation;
}


export function PaymentDetails({
    cartItems,
    buyerLocation
}: PaymentDetailsParams) {
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
                    <td>30€</td>
                </tr>
                <tr>
                    <td>Shipping Cost</td>
                    <td>20€</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>50€</td>
                </tr>
            </tbody>
        </table>


    </div>
}