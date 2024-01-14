import { Button, Container } from "react-bootstrap";
import { CartItem } from "../components/cartItem";

interface CartPageParams {
    cartItems: { productID: number, variantID: number | undefined }[];
    clearCartItems: () => void;
    removeCartItem: (productID: number, variantID: number | undefined) => void;
}

export function CartPage({
    cartItems,
    clearCartItems,
    removeCartItem
}: CartPageParams) {

    return <div>

        <h1>Cart</h1>
        <Container>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.5rem"
                }}
            >
                {
                    cartItems.map((cartItem, index) => {
                        return <>
                            <CartItem
                                key={index}
                                productID={cartItem.productID}
                                variantID={cartItem.variantID}
                                removeCartItem={removeCartItem}
                            />
                        </>
                    })
                }
            </div>

            <Button
                variant={'outline-primary'}
                onClick={() => {
                    clearCartItems();
                }}
            >
                Clear Cart
            </Button>

        </Container>

    </div >;
}
