import { Container } from "react-bootstrap";
import { ICartItem } from "../dataDefinitions/cartItem";
import { PurchaseDetails } from "../components/purchaseDetails/purchaseDetails";

interface CheckoutPageParams {
  cartItems: ICartItem[];
  clearCartItems: () => void;
}

export function CheckoutPage({ cartItems, clearCartItems }: CheckoutPageParams) {
  return <div>
    <Container>
      <h1 style={{
        marginBlock: '3rem',
      }}>Checkout</h1>

      <PurchaseDetails />

    </Container>
  </div>
}