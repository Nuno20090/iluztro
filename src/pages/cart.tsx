import { Button, Container } from "react-bootstrap";
import { CartItem } from "../components/cartItem";
import { PurchaseDetails } from "../components/purchaseDetails/purchaseDetails";

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

    <Container>
      <h1 style={{
        marginBlock: '3rem',
      }}>Cart</h1>

      {
        cartItems.length > 0 &&
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
            variant={'primary'}
            className="larger-text"
            onClick={() => {
              clearCartItems();
            }}
          >
            Clear Cart
          </Button>
        </>
      }
      {
        cartItems.length === 0 &&
        <div>
          No items in the cart
        </div>
      }

      <PurchaseDetails />

    </Container>

  </div >;
}
