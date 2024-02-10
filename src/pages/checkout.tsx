import { useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { ICartItem } from "../dataDefinitions/cartItem";
import { MBWayButton } from "../components/checkout/mbwayButton";
import { MBWayInstructions } from "../components/checkout/mbwayInstructions";
import { BankTransferButton } from "../components/checkout/bankTransferButton";
import { BankTransferInstructions } from "../components/checkout/bankTransferInstructions";
import { PurchaseForm } from "../components/checkout/purchaseForm";
import { BuyerLocation } from "../library/order";
import { PaymentDetails } from "../components/checkout/paymentDetails";
import { useNavigate } from "react-router-dom";
import { OrderMail } from "../library/orderMail";

interface CheckoutPageParams {
  cartItems: ICartItem[];
  clearCartItems: () => void;
}

export function CheckoutPage({ cartItems, clearCartItems }: CheckoutPageParams) {

  const navigate = useNavigate();

  const [buyerName, setBuyerName] = useState<string>("");
  const [buyerMail, setBuyerMail] = useState<string>("");
  const [buyerAddress, setBuyerAddress] = useState<string>("");
  const [buyerLocation, setBuyerLocation] = useState<BuyerLocation>("Portugal");
  const [buyerInstructions, setBuyerInstructions] = useState<string>("");

  const [paymentMethod, setPaymentMethod] = useState<"Bank Transfer" | "MbWay" | undefined>();

  const [validated, setValidated] = useState(false);

  const finalizePurchaseAreaRef = useRef<HTMLDivElement>(null);
  const buyerDetailsAreaRef = useRef<HTMLDivElement>(null);

  const handleFinalizePurchase = (event: React.FormEvent<HTMLFormElement>) => {

    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();

    setValidated(true);

    const formDataIsValid = form.checkValidity();

    if (formDataIsValid) {

      OrderMail.sendOrderMail(
        buyerName,
        buyerMail,
        buyerAddress,
        buyerLocation,
        buyerInstructions,
        cartItems,
        paymentMethod!
      );

      clearCartItems();
      navigate("/thankyou");
    }
    else {
      console.log("Form is invalid");
      buyerDetailsAreaRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }

  const scrollToFinalizePurchaseArea = () => {
    finalizePurchaseAreaRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  const handlePaymentSelection = (paymentMethod: "Bank Transfer" | "MbWay") => {
    setPaymentMethod(paymentMethod);
    setTimeout(scrollToFinalizePurchaseArea, 100);
  }

  return (
    <Container>
      <h1 style={{
        marginBlock: '3rem',
      }}>Checkout</h1>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>

        <div
          ref={buyerDetailsAreaRef}
          style={{
            minWidth: '300px',
            maxWidth: '600px',
            width: '100%',
          }}
        >
          <h3>Your Details</h3>

          <PurchaseForm
            buyerName={buyerName}
            setBuyerName={setBuyerName}
            buyerMail={buyerMail}
            setBuyerMail={setBuyerMail}
            buyerLocation={buyerLocation}
            setBuyerLocation={setBuyerLocation}
            buyerAddress={buyerAddress}
            setBuyerAddress={setBuyerAddress}
            buyerInstructions={buyerInstructions}
            setBuyerInstructions={setBuyerInstructions}
            handleSubmit={handleFinalizePurchase}
            validated={validated}
          ></PurchaseForm>

          <h3 style={{ marginBlock: "2rem" }}>Payment</h3>

          <div>
            <PaymentDetails
              cartItems={cartItems}
              buyerLocation={buyerLocation}
            />

            <div
              className="payment-methods"
            >
              <BankTransferButton
                onSelected={() => handlePaymentSelection("Bank Transfer")}
              />

              <MBWayButton
                onSelected={() => handlePaymentSelection("MbWay")}
              />
            </div>
          </div>

          {paymentMethod === "Bank Transfer" &&
            <BankTransferInstructions />
          }
          {paymentMethod === "MbWay" &&
            <MBWayInstructions />
          }

          {(paymentMethod === "Bank Transfer" ||
            paymentMethod === "MbWay") &&
            <div
              ref={finalizePurchaseAreaRef}
              style={{ marginBottom: "3rem" }}
            >
              <Button
                type="submit"
                form="purchaseForm"
                className='finalize-purchase'
                onClick={() => handleFinalizePurchase}
              >Finalize purchase</Button>
            </div>
          }

        </div >
      </div >
    </Container>

  );
}


