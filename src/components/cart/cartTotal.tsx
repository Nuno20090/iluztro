import { ICartItem } from "../../dataDefinitions/cartItem";
import { HelperProducts } from "../../helpers/helperProducts";

interface CartTotalParams {
    cartItems: ICartItem[];
}

export function CartTotal({ cartItems }: CartTotalParams) {

    const total = cartItems.reduce((total, cartItem) => {
        const sellableItem = HelperProducts.GetSellableItem(cartItem.productID, cartItem.variantID);
        if (!sellableItem || !sellableItem.price_eur) {
            return total;
        }
        return total + sellableItem.price_eur;
    }, 0);

    return <div
        style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexDirection: "row"
        }}>
        <h3>
            Total
        </h3>
        <h3>
            {total}€
        </h3>
    </div>
}