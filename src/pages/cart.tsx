import { Button, Container } from "react-bootstrap";
import { CartItem } from "../components/cart/cartItem";
import { ICartItem } from "../dataDefinitions/cartItem";
import { CartTotal } from "../components/cart/cartTotal";
import { useNavigate } from 'react-router-dom';

interface CartPageParams {
  cartItems: ICartItem[];
  clearCartItems: () => void;
  removeCartItem: (cartItem: ICartItem) => void;
}

export function CartPage({
  cartItems,
  clearCartItems,
  removeCartItem
}: CartPageParams) {

  let navigate = useNavigate();

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
                return <CartItem
                  key={index}
                  productID={cartItem.productID}
                  variantID={cartItem.variantID}
                  removeCartItem={removeCartItem}
                />
              })
            }
          </div>

          <CartTotal
            cartItems={cartItems}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              marginTop: '2rem',
              width: '100%',
            }}>
            <Button
              variant={'primary'}
              className="larger-text"
              onClick={() => {
                clearCartItems();
              }}
            >
              Clear Cart
            </Button>

            <Button
              variant={'primary'}
              className="larger-text"
              onClick={() => {
                navigate('/checkout');
              }}
            >
              Proceed to Checkout
            </Button>
          </div>
        </>
      }
      {
        cartItems.length === 0 &&
        <div>
          No items in the cart
        </div>
      }

      <div
        style={{
          marginTop: '5rem',
        }}
      >
      </div>

    </Container>

  </div >;
}
